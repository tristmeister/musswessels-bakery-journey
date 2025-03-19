
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavItem } from '@/types/navigation';

interface DesktopNavProps {
  items: NavItem[];
}

const DesktopNav = ({ items }: DesktopNavProps) => {
  const location = useLocation();

  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="gap-1">
        {items.map((item) => {
          if (item.type === 'dropdown') {
            return (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/30 focus:bg-white/30 transition-colors">
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] p-2 gap-1">
                    {item.items?.map((subItem) => (
                      <li key={subItem.path}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={subItem.path}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-50 hover:text-brand focus:bg-brand-50 focus:text-brand",
                              location.pathname === subItem.path && "bg-brand-50 text-brand"
                            )}
                          >
                            <div className="text-sm font-medium">{subItem.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          } else if (item.type === 'mega-menu') {
            return (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/30 focus:bg-white/30 transition-colors">
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="mega-box w-screen max-w-screen-lg mx-auto p-4">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                        {item.megaMenu?.image && (
                          <div className="col-span-1 row-span-3 rounded-lg overflow-hidden h-full">
                            <img 
                              src={item.megaMenu.image} 
                              alt="" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        
                        {item.megaMenu?.columns.map((column, idx) => (
                          <div key={idx} className="flex flex-col">
                            <h3 className="text-lg font-ephesis text-brand mb-3">
                              {column.header}
                            </h3>
                            <ul className="space-y-2">
                              {column.links.map((link, linkIdx) => (
                                <li key={linkIdx}>
                                  <Link
                                    to={link.path}
                                    className="text-gray-700 hover:text-brand transition-colors text-sm"
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          } else {
            return (
              <NavigationMenuItem key={item.path}>
                <Link
                  to={item.path || '/'}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-white/30 focus:bg-white/30 transition-colors",
                    location.pathname === item.path && "bg-white/30"
                  )}
                >
                  {item.name}
                </Link>
              </NavigationMenuItem>
            );
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNav;
