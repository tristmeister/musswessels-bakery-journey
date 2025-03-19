
export interface NavMegaMenuColumn {
  header: string;
  links: {
    name: string;
    path: string;
  }[];
}

export interface NavItem {
  name: string;
  path?: string;
  type?: 'dropdown' | 'mega-menu';
  items?: {
    name: string;
    path: string;
  }[];
  megaMenu?: {
    image?: string;
    columns: NavMegaMenuColumn[];
  };
}
