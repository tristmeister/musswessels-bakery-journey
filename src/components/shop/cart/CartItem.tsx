
import { CartItem as CartItemType } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { Minus, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex py-4 border-b">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium">
              <Link to={`/shop/${product.id}`} className="hover:underline">
                {product.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {product.price.toFixed(2).replace('.', ',')} €
            </p>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6" 
            onClick={() => removeItem(product.id)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center mt-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-7 w-7 rounded-full" 
            onClick={() => updateQuantity(product.id, quantity - 1)}
            disabled={quantity <= 1}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="mx-2 w-8 text-center">{quantity}</span>
          <Button 
            variant="outline" 
            size="icon" 
            className="h-7 w-7 rounded-full" 
            onClick={() => updateQuantity(product.id, quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
          <div className="ml-auto font-medium">
            {(product.price * quantity).toFixed(2).replace('.', ',')} €
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
