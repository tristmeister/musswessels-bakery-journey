
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
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
        {items.map((item) => (
          item.type === 'dropdown' ? (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/20 focus:bg-white/20 transition-colors">
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
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            location.pathname === subItem.path && "bg-accent"
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
          ) : (
            <NavigationMenuItem key={item.path}>
              <Link
                to={item.path || '/'}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-white hover:bg-white/20 focus:bg-white/20 transition-colors",
                  location.pathname === item.path && "bg-white/20"
                )}
              >
                {item.name}
              </Link>
            </NavigationMenuItem>
          )
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNav;
