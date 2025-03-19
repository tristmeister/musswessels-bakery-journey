
import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

type CheckoutStep = 'information' | 'shipping' | 'payment' | 'confirmation';

const Checkout = () => {
  const [step, setStep] = useState<CheckoutStep>('information');
  const { items, getSubtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const subtotal = getSubtotal();
  const shipping = 4.95;
  const total = subtotal + shipping;

  // Form state
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
    notes: '',
    shippingMethod: 'standard',
    paymentMethod: 'paypal',
    saveInfo: false,
    acceptTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 'information') {
      // Validate information step
      if (!formData.email || !formData.firstName || !formData.lastName || 
          !formData.address || !formData.city || !formData.postalCode) {
        toast.error('Bitte füllen Sie alle Pflichtfelder aus.');
        return;
      }
      setStep('shipping');
    } else if (step === 'shipping') {
      setStep('payment');
    } else if (step === 'payment') {
      if (!formData.acceptTerms) {
        toast.error('Bitte akzeptieren Sie die AGB und Datenschutzerklärung.');
        return;
      }
      
      // Process payment and place order
      // In a real application, you would call your payment API here
      
      setStep('confirmation');
      // Clear the cart after successful order
      clearCart();
    } else if (step === 'confirmation') {
      navigate('/shop');
    }
  };

  if (items.length === 0 && step !== 'confirmation') {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">Ihr Warenkorb ist leer</h2>
              <p className="text-gray-600 mb-8">
                Sie haben noch keine Produkte in Ihrem Warenkorb.
              </p>
              <Button asChild>
                <a href="/shop">Zum Shop</a>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Main checkout form */}
            <div className="md:col-span-8 space-y-8">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold">Checkout</h1>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <span className={step === 'information' ? 'text-brand font-semibold' : ''}>
                    Information
                  </span>
                  <span>&gt;</span>
                  <span className={step === 'shipping' ? 'text-brand font-semibold' : ''}>
                    Versand
                  </span>
                  <span>&gt;</span>
                  <span className={step === 'payment' ? 'text-brand font-semibold' : ''}>
                    Zahlung
                  </span>
                  <span>&gt;</span>
                  <span className={step === 'confirmation' ? 'text-brand font-semibold' : ''}>
                    Bestätigung
                  </span>
                </div>
              </div>

              {step === 'information' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="font-semibold">Kontaktinformationen</h2>
                    <div>
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="font-semibold">Lieferadresse</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Vorname *</Label>
                        <Input 
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nachname *</Label>
                        <Input 
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address">Adresse *</Label>
                      <Input 
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="col-span-2">
                        <Label htmlFor="city">Stadt *</Label>
                        <Input 
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="postalCode">Postleitzahl *</Label>
                        <Input 
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefon</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="notes">Anmerkungen zur Bestellung</Label>
                      <Textarea 
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => navigate('/shop')}
                    >
                      Zurück zum Shop
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-brand hover:bg-brand-700"
                    >
                      Weiter zu Versand
                    </Button>
                  </div>
                </form>
              )}

              {step === 'shipping' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="font-semibold">Versandart</h2>
                    <RadioGroup 
                      value={formData.shippingMethod}
                      onValueChange={(value) => handleRadioChange('shippingMethod', value)}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2 border p-4 rounded-md">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard" className="flex-1 cursor-pointer">
                          <div className="font-medium">Standardversand</div>
                          <div className="text-sm text-muted-foreground">3-5 Werktage</div>
                        </Label>
                        <div className="font-medium">4,95 €</div>
                      </div>
                      
                      <div className="flex items-center space-x-2 border p-4 rounded-md">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express" className="flex-1 cursor-pointer">
                          <div className="font-medium">Expressversand</div>
                          <div className="text-sm text-muted-foreground">1-2 Werktage</div>
                        </Label>
                        <div className="font-medium">8,95 €</div>
                      </div>
                      
                      <div className="flex items-center space-x-2 border p-4 rounded-md">
                        <RadioGroupItem value="pickup" id="pickup" />
                        <Label htmlFor="pickup" className="flex-1 cursor-pointer">
                          <div className="font-medium">Abholung im Geschäft</div>
                          <div className="text-sm text-muted-foreground">Kostenlos</div>
                        </Label>
                        <div className="font-medium">0,00 €</div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setStep('information')}
                    >
                      Zurück
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-brand hover:bg-brand-700"
                    >
                      Weiter zu Zahlung
                    </Button>
                  </div>
                </form>
              )}

              {step === 'payment' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="font-semibold">Zahlungsmethode</h2>
                    <RadioGroup 
                      value={formData.paymentMethod}
                      onValueChange={(value) => handleRadioChange('paymentMethod', value)}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2 border p-4 rounded-md">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                          <div className="font-medium">PayPal</div>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 border p-4 rounded-md">
                        <RadioGroupItem value="credit" id="credit" />
                        <Label htmlFor="credit" className="flex-1 cursor-pointer">
                          <div className="font-medium">Kreditkarte</div>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 border p-4 rounded-md">
                        <RadioGroupItem value="sepa" id="sepa" />
                        <Label htmlFor="sepa" className="flex-1 cursor-pointer">
                          <div className="font-medium">SEPA-Lastschrift</div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="saveInfo"
                        checked={formData.saveInfo}
                        onCheckedChange={(checked) => 
                          handleCheckboxChange('saveInfo', checked === true)
                        }
                      />
                      <Label htmlFor="saveInfo" className="text-sm">
                        Meine Informationen für zukünftige Bestellungen speichern
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="acceptTerms"
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) => 
                          handleCheckboxChange('acceptTerms', checked === true)
                        }
                        required
                      />
                      <Label htmlFor="acceptTerms" className="text-sm">
                        Ich akzeptiere die AGB und Datenschutzerklärung *
                      </Label>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setStep('shipping')}
                    >
                      Zurück
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-brand hover:bg-brand-700"
                    >
                      Bestellung abschließen
                    </Button>
                  </div>
                </form>
              )}

              {step === 'confirmation' && (
                <div className="space-y-6 py-8">
                  <div className="text-center">
                    <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Vielen Dank für Ihre Bestellung!</h2>
                    <p className="text-gray-600 mb-6">
                      Ihre Bestellung #BK12345 wurde erfolgreich aufgegeben.
                    </p>
                    <p className="text-gray-600 mb-8">
                      Sie erhalten in Kürze eine Bestätigungs-E-Mail an {formData.email}.
                    </p>
                    <Button 
                      onClick={() => navigate('/shop')}
                      className="bg-brand hover:bg-brand-700"
                    >
                      Zurück zum Shop
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Order summary */}
            <div className="md:col-span-4">
              <div className="bg-gray-50 p-6 rounded-lg border">
                <h2 className="text-lg font-semibold mb-4">Bestellübersicht</h2>
                
                {step !== 'confirmation' && (
                  <div className="space-y-4 mb-6">
                    {items.map(item => (
                      <div key={item.product.id} className="flex gap-4">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border bg-gray-100">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-sm font-medium">{item.product.name}</h3>
                              <p className="mt-1 text-sm text-gray-500">Menge: {item.quantity}</p>
                            </div>
                            <p className="text-sm font-medium">
                              {(item.product.price * item.quantity).toFixed(2).replace('.', ',')} €
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {step === 'confirmation' ? (
                  <div className="space-y-2 text-sm">
                    <p>
                      Wir werden Ihre Bestellung so schnell wie möglich bearbeiten. 
                      Bei Fragen können Sie sich gerne an unseren Kundenservice wenden.
                    </p>
                    <p className="font-medium">
                      Kontakt: info@musswessels.de
                    </p>
                    <p className="font-medium">
                      Tel: +49 123 456789
                    </p>
                  </div>
                ) : (
                  <>
                    <Separator className="my-4" />
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Zwischensumme</span>
                        <span>{subtotal.toFixed(2).replace('.', ',')} €</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Versand</span>
                        <span>{shipping.toFixed(2).replace('.', ',')} €</span>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="flex justify-between font-medium">
                      <span>Gesamt</span>
                      <span>{total.toFixed(2).replace('.', ',')} €</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
