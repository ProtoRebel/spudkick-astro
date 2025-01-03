interface SocialNetwork {
  network: string;
  username: string;
  url: string;
  primary: boolean;
}

const socialNetworks: SocialNetwork[] = [
  {
    network: "Instagram",
    username: "@protorebelllc",
    url: "https://instagram.com/protorebelllc",
    primary: true,
  },
  {
    network: "Twitter",
    username: "@ProtoRebel",
    url: "https://twitter.com/protorebel",
    primary: false,
  },
  {
    network: "LinkedIn",
    username: "ProtoRebel, LLC",
    url: "https://linkedin.com/company/protorebel",
    primary: true,
  },
];

export function getSocial(filter?: 'primary'): SocialNetwork[] {
  if (filter === 'primary') {
    return socialNetworks.filter((social) => social.primary);
  }
  return socialNetworks;
}
