// @ts-ignore
import businessData from '../content/businessInfo.json';

interface SocialNetwork {
  network: string;
  username: string;
  url: string;
  primary: boolean;
}

interface BusinessName {
  default: string;
  legal: string;
  short: string;
}

interface BusinessTagline {
  short: string;
  long: string;
  area: string;
}

interface BusinessAddress {
  city: string;
  state: string;
  postal: string;
}

interface BusinessInfo {
  name: BusinessName;
  tagline: BusinessTagline;
  address: BusinessAddress;
  year: number;
  email: string;
  phone: string;
  social: SocialNetwork[];
}

const businessInfo: BusinessInfo = businessData as BusinessInfo;

type Modifier = 'clean' | 'legal' | 'short' | 'length' | 'long' | 'area' | 'primary' | 'city' | 'state' | 'postal';

export function getBusinessInfo(
  infoType: keyof BusinessInfo,
  modifier?: Modifier
): string | SocialNetwork[] {
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

  if (infoType === 'tagline') {
    const taglineValue = value as BusinessTagline;
    if (modifier === 'short') {
      return taglineValue.short;
    }
    if (modifier === 'long') {
      return taglineValue.long;
    }
    if (modifier === 'area') {
      return taglineValue.area;
    }
    return taglineValue.short;
  }

  if (infoType === 'address') {
    const addressValue = value as BusinessAddress;
    if (modifier === 'city') {
      return addressValue.city;
    }
    if (modifier === 'state') {
      return addressValue.state;
    }
    if (modifier === 'postal') {
      return addressValue.postal;
    }
    return `${addressValue.city}, ${addressValue.state} ${addressValue.postal}`;
  }

  if (infoType === 'year') {
    if (modifier === 'length') {
      const currentYear = new Date().getFullYear();
      const yearsInBusiness = currentYear - (value as number);
      return `${yearsInBusiness} ${yearsInBusiness === 1 ? 'year' : 'years'}`;
    }
    return value.toString();
  }

  if (infoType === 'social') {
    const networks = value as SocialNetwork[];
    if (modifier === 'primary') {
      return networks.filter(network => network.primary);
    }
    return networks;
  }

  if (typeof value === 'string') {
    if (modifier === 'clean' && infoType === 'phone') {
      return value.replace(/[^0-9]/g, '');
    }
    return value;
  }

  return '';
}

// Helper function specifically for social networks
export function getBusinessSocial(primary?: boolean): SocialNetwork[] {
  const networks = businessInfo.social;
  if (typeof primary === 'boolean') {
    return networks.filter(network => network.primary === primary);
  }
  return networks;
}
