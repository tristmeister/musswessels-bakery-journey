
export interface NavItem {
  name: string;
  path?: string;
  type?: 'dropdown';
  items?: {
    name: string;
    path: string;
  }[];
}
