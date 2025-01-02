interface BusinessInfo {
    name: string;
    address: string;
    email: string;
    phone: string;
}

const businessInfo: BusinessInfo = {
  name: 'ProtoRebel, LLC',
  address: 'Boise, Idaho, United States',
  email: 'support@protorebel.com',
  phone: '208.654.1004',
};

export function getBusinessInfo(infoType: keyof BusinessInfo): string {
  return businessInfo[infoType] || 'N/A';
}
