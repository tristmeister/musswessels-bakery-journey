import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  NavigationMenuLink,
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
      <NavigationMenuList className="gap-2">
        {items.map((item) => {
          if (item.type === 'dropdown') {
            return (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/30 focus:bg-white/30 transition-colors duration-200 font-medium">
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 p-3 gap-2 bg-white rounded-lg shadow-lg border border-gray-100">
                    {item.items?.map((subItem) => (
                      <li key={subItem.path}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={subItem.path}
                            className={cn(
                              "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-brand-50 hover:text-brand focus:bg-brand-50 focus:text-brand",
                              location.pathname === subItem.path && "bg-brand-50 text-brand font-medium"
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
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/30 focus:bg-white/30 transition-colors duration-200 font-medium">
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="mega-box w-screen max-w-screen-lg mx-auto p-3">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                        {item.megaMenu?.image && (
                          <div className="col-span-1 row-span-3 rounded-lg overflow-hidden h-full shadow-sm transform transition-transform duration-300 hover:scale-[1.02]">
                            <img 
                              src={item.megaMenu.image} 
                              alt="" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        
                        {item.megaMenu?.columns.map((column, idx) => (
                          <div key={idx} className="flex flex-col">
                            <h3 className="text-lg font-ephesis text-brand mb-3 border-b pb-1 border-brand-100">
                              {column.header}
                            </h3>
                            <ul className="space-y-2">
                              {column.links.map((link, linkIdx) => (
                                <li key={linkIdx}>
                                  <Link
                                    to={link.path}
                                    className={cn(
                                      "block px-2 py-1.5 rounded-md text-gray-700 hover:text-brand hover:bg-brand-50/50 transition-colors duration-200 text-sm",
                                      location.pathname === link.path && "bg-brand-50 text-brand font-medium"
                                    )}
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
                    "bg-transparent text-white hover:bg-white/30 focus:bg-white/30 transition-colors duration-200 font-medium",
                    location.pathname === item.path && "bg-white/30 font-medium border-b-2 border-white"
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
