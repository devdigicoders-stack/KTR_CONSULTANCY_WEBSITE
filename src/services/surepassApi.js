const SUREPASS_BEARER_TOKEN = import.meta.env.VITE_SUREPASS_BEARER_TOKEN || '';
const BASE_URL = import.meta.env.VITE_SUREPASS_BASE_URL || 'https://kyc-api.surepass.app/api/v1';

export const BUREAU_CONFIGS = {
  cibil: {
    id: 'cibil',
    name: 'TransUnion CIBIL',
    shortName: 'CIBIL',
    basePrice: 500,
    gstRate: 0.18,
    endpoint: `${BASE_URL}/credit-report-cibil/fetch-report-pdf`,
    badge: 'Most Comprehensive & Recommended',
    usp: 'Includes Complete Bank Names & Loan Account Numbers',
    description: 'Detailed TransUnion CIBIL report with complete bank account numbers, active & closed loans, credit utilization and repayment track record.'
  },
  crif: {
    id: 'crif',
    name: 'CRIF High Mark',
    shortName: 'CRIF',
    basePrice: 450,
    gstRate: 0.18,
    endpoint: `${BASE_URL}/credit-report-crif/fetch-report-pdf`,
    badge: 'Microfinance & Commercial Depth',
    usp: 'Wide coverage of retail and NBFC accounts',
    description: 'CRIF High Mark detailed credit report covering retail loans, commercial debts, and credit cards.'
  },
  experian: {
    id: 'experian',
    name: 'Experian',
    shortName: 'Experian',
    basePrice: 400,
    gstRate: 0.18,
    endpoint: `${BASE_URL}/credit-report-experian/fetch-report-pdf`,
    badge: 'Global Credit Bureau',
    usp: 'Instant analytics and delinquency risk insights',
    description: 'Experian comprehensive score and credit health assessment with granular payment timeline.'
  },
  equifax: {
    id: 'equifax',
    name: 'Equifax',
    shortName: 'Equifax',
    basePrice: 350,
    gstRate: 0.18,
    endpoint: `${BASE_URL}/credit-report-cibil/fetch-report-pdf`, // Surepass unified bureau
    badge: 'Affordable Quick Check',
    usp: 'Summary credit score and basic loan report',
    description: 'Equifax credit rating analysis and loan verification document.'
  }
};

/**
 * Validates and calculates discount for coupon code
 * @param {string} code
 * @param {number} basePrice
 * @returns {{ valid: boolean, discountPercent: number, discountAmount: number, message: string }}
 */
export function evaluateCoupon(code, basePrice) {
  if (!code || !code.trim()) {
    return { valid: false, discountPercent: 0, discountAmount: 0, message: '' };
  }
  const cleanCode = code.trim().toUpperCase();
  if (cleanCode === 'TEAM50') {
    const discountAmount = Math.round(basePrice * 0.5);
    return {
      valid: true,
      discountPercent: 50,
      discountAmount,
      message: '🎉 Coupon "Team50" applied! 50% discount has been deducted.'
    };
  }
  return {
    valid: false,
    discountPercent: 0,
    discountAmount: 0,
    message: 'Invalid coupon code. Use "Team50" for 50% discount.'
  };
}

/**
 * Calculates billing totals including GST
 */
export function calculatePricing(bureauId, couponCode = '') {
  const bureau = BUREAU_CONFIGS[bureauId] || BUREAU_CONFIGS.cibil;
  const basePrice = bureau.basePrice;
  const couponResult = evaluateCoupon(couponCode, basePrice);
  const discountedBase = couponResult.valid ? basePrice - couponResult.discountAmount : basePrice;
  const gstAmount = Math.round(discountedBase * bureau.gstRate);
  const totalPayable = discountedBase + gstAmount;

  return {
    bureau,
    basePrice,
    couponResult,
    discountedBase,
    gstAmount,
    totalPayable
  };
}

/**
 * Calls Surepass Production API to fetch live credit report PDF
 */
export async function fetchCreditReportFromSurepass({ bureauId, pan, name, mobile, gender = 'male' }) {
  const bureau = BUREAU_CONFIGS[bureauId] || BUREAU_CONFIGS.cibil;
  const cleanPan = pan.trim().toUpperCase();
  const cleanMobile = mobile.trim();
  const cleanName = name.trim();

  // Split name for CRIF if needed
  const nameParts = cleanName.split(' ');
  const firstName = nameParts[0] || cleanName;
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : 'Kumar';

  const payload = bureauId === 'crif'
    ? {
        mobile: cleanMobile,
        pan: cleanPan,
        first_name: firstName,
        last_name: lastName,
        gender: gender.toLowerCase(),
        consent: 'Y'
      }
    : {
        mobile: cleanMobile,
        pan: cleanPan,
        name: cleanName,
        gender: gender.toLowerCase(),
        consent: 'Y'
      };

  try {
    const response = await fetch(bureau.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUREPASS_BEARER_TOKEN}`
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    return {
      httpStatus: response.status,
      ok: response.ok,
      data: result.data || null,
      statusCode: result.status_code || response.status,
      success: result.success,
      message: result.message || (response.ok ? 'Report fetched successfully' : 'Unable to fetch report'),
      raw: result
    };
  } catch (err) {
    console.error('Surepass API request error:', err);
    return {
      httpStatus: 500,
      ok: false,
      data: null,
      statusCode: 500,
      success: false,
      message: err.message || 'Network connection failed. Please check your internet or retry.',
      raw: null
    };
  }
}
