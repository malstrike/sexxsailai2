export enum Tab {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  GALLERY = 'GALLERY',
  CONTACT = 'CONTACT'
}

export interface NavItem {
  id: Tab;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}