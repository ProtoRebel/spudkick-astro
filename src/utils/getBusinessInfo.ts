interface BusinessName {
  default: string;
  legal: string;
  short: string;
}

interface BusinessInfo {
  name: BusinessName;
  address: string;
  year: number;
  email: string;
  phone: string;
}

const businessInfo: BusinessInfo = {
  name: {
    default: 'ProtoRebel',
    legal: 'ProtoRebel, LLC',
    short: 'PR',
  },
  address: 'Boise, Idaho, United States',
  email: 'support@protorebel.com',
  year: 2024,
  phone: '(208) 654-1004',
};

type Modifier = 'clean' | 'legal' | 'short' | 'length';

export function getBusinessInfo(
  infoType: keyof BusinessInfo,
  modifier?: Modifier
): string {
  const value = businessInfo[infoType];

  if (infoType === 'name') {
    const nameValue = value as BusinessName;
    if (modifier === 'legal') {
      return nameValue.legal;
    }
    if (modifier === 'short') {
      return nameValue.short;
    }
    return nameValue.default;
  }

  if (infoType === 'year') {
    if (modifier === 'length') {
      const currentYear = new Date().getFullYear();
      const yearsInBusiness = currentYear - value;
      return `${yearsInBusiness} ${yearsInBusiness === 1 ? 'year' : 'years'}`;
    }
    return value.toString(); // Return the start year as a string
  }

  if (typeof value === 'string') {
    if (modifier === 'clean' && infoType === 'phone') {
      return value.replace(/[^0-9]/g, '');
    }
    return value;
  }

  return '';
}
