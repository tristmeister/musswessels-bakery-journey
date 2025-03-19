
import { useCart } from '@/hooks/useCart';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ShoppingCart, Trash2 } from 'lucide-react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CartDrawer = ({ open, onOpenChange }: CartDrawerProps) => {
  const { items, clearCart, getItemCount, getSubtotal } = useCart();
  const itemCount = getItemCount();
  const subtotal = getSubtotal();
  
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="pb-4">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Ihr Warenkorb
          </SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <ShoppingCart className="h-16 w-16 text-muted-foreground" />
            <p className="text-muted-foreground text-center">
              Ihr Warenkorb ist leer. Entdecken Sie unsere Produkte im Shop.
            </p>
            <Button 
              variant="default" 
              className="mt-2"
              onClick={() => onOpenChange(false)}
              asChild
            >
              <Link to="/shop">Zum Shop</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-2">
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
            
            <div className="pt-4">
              <div className="flex justify-between py-2">
                <span>Zwischensumme</span>
                <span>{subtotal.toFixed(2).replace('.', ',')} €</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Versand</span>
                <span>Wird im Checkout berechnet</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between py-2 font-medium">
                <span>Gesamt</span>
                <span>{subtotal.toFixed(2).replace('.', ',')} €</span>
              </div>
              
              <div className="flex space-x-4 mt-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="flex-shrink-0"
                  onClick={() => clearCart()}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button 
                  variant="default" 
                  className="w-full bg-brand hover:bg-brand-700"
                  asChild
                >
                  <Link to="/checkout" onClick={() => onOpenChange(false)}>
                    Zur Kasse ({itemCount} {itemCount === 1 ? 'Artikel' : 'Artikel'})
                  </Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
