interface BusinessName {
  default: string;
  legal: string;
  short: string;
}

interface BusinessInfo {
  name: BusinessName;
  address: string;
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
  phone: '(208) 654-1004',
};

type Modifier = 'clean' | 'legal' | 'short';

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

  if (typeof value === 'string') {
    if (modifier === 'clean' && infoType === 'phone') {
      return value.replace(/[^0-9]/g, '');
    }
    return value;
  }

  return '';
}
