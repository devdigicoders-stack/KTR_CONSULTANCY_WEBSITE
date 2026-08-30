export const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || '';

/**
 * Dynamically loads the Razorpay checkout script if not already present
 */
export function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

/**
 * Initiates Razorpay payment popup.
 * Resolves ONLY when payment is successfully captured by Razorpay with payment_id.
 * Rejects if user cancels or payment fails.
 */
export async function processRazorpayPayment({
  amountInRupees,
  bureauName,
  customerName,
  customerMobile,
  customerPan
}) {
  const isLoaded = await loadRazorpayScript();
  if (!isLoaded) {
    throw new Error('Razorpay SDK failed to load. Please check your internet connection.');
  }

  return new Promise((resolve, reject) => {
    const options = {
      key: RAZORPAY_KEY_ID,
      amount: Math.round(amountInRupees * 100), // amount in paise
      currency: 'INR',
      name: 'KTR Consultants',
      description: `${bureauName} Credit Report Fee`,
      image: '/favicon.svg',
      prefill: {
        name: customerName,
        contact: customerMobile
      },
      notes: {
        pan: customerPan,
        service: 'Credit Report Fetch',
        bureau: bureauName
      },
      theme: {
        color: '#020d1c'
      },
      modal: {
        ondismiss: function () {
          reject(new Error('Payment cancelled by user.'));
        }
      },
      handler: function (response) {
        if (response && response.razorpay_payment_id) {
          // Payment successfully captured
          resolve({
            success: true,
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id || null,
            signature: response.razorpay_signature || null
          });
        } else {
          reject(new Error('Payment could not be verified by gateway.'));
        }
      }
    };

    const razorpayInstance = new window.Razorpay(options);

    razorpayInstance.on('payment.failed', function (response) {
      console.error('Razorpay Payment Failed:', response.error);
      reject(new Error(response.error?.description || 'Payment transaction failed.'));
    });

    razorpayInstance.open();
  });
}
