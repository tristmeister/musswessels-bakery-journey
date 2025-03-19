
import { useCart } from '@/hooks/useCart';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CartDrawer from './CartDrawer';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <>
      <Button 
        variant="ghost" 
        size="icon" 
        className="relative text-white hover:bg-white/20"
        onClick={() => setIsCartOpen(true)}
        aria-label={`Warenkorb mit ${itemCount} Artikeln`}
      >
        <ShoppingBag className="h-5 w-5" />
        {itemCount > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center"
          >
            {itemCount}
          </Badge>
        )}
      </Button>
      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  );
};

export default CartIcon;
