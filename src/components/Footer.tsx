
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const FooterLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className="text-gray-600 hover:text-brand transition-colors duration-200 hover:underline"
  >
    {children}
  </Link>
);

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-brand hover:text-white transition-all duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center mb-6">
              <div className="relative h-10 w-10 mr-3 overflow-hidden rounded-full border-2 border-brand">
                <div className="absolute inset-0 bg-brand flex items-center justify-center text-white font-bold text-lg">M</div>
              </div>
              <span className="text-xl font-semibold text-gray-800">Musswessels</span>
            </Link>
            <p className="text-gray-600 mb-6">
              Seit 1868 bäckt unsere Familie mit Leidenschaft und Tradition die besten Brote und Backwaren für Sie und Ihre Liebsten.
            </p>
            <div className="flex space-x-3">
              <SocialLink
                href="https://facebook.com"
                icon={<Facebook size={20} />}
                label="Facebook"
              />
              <SocialLink
                href="https://instagram.com"
                icon={<Instagram size={20} />}
                label="Instagram"
              />
              <SocialLink
                href="https://youtube.com"
                icon={<Youtube size={20} />}
                label="YouTube"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-800 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink to="/">Startseite</FooterLink>
              </li>
              <li>
                <FooterLink to="/familienbaeckerei">Über Uns</FooterLink>
              </li>
              <li>
                <FooterLink to="/shop">Online-Shop</FooterLink>
              </li>
              <li>
                <FooterLink to="/fachgeschaefte">Fachgeschäfte</FooterLink>
              </li>
              <li>
                <FooterLink to="/kundenmeinung">Kundenmeinung</FooterLink>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-800 mb-4">Produkte</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink to="/shop">Brote</FooterLink>
              </li>
              <li>
                <FooterLink to="/shop">Gebäck</FooterLink>
              </li>
              <li>
                <FooterLink to="/shop">Kuchen</FooterLink>
              </li>
              <li>
                <FooterLink to="/shop">Torten</FooterLink>
              </li>
              <li>
                <FooterLink to="/fototorten-designer">Fototorten</FooterLink>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-800 mb-4">Service</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink to="/jobs">Karriere</FooterLink>
              </li>
              <li>
                <FooterLink to="/vorteilskarte">Vorteilskarte</FooterLink>
              </li>
              <li>
                <FooterLink to="/">FAQ</FooterLink>
              </li>
              <li>
                <FooterLink to="/">Kontakt</FooterLink>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-800 mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Hauptstraße 12<br />
                  12345 Musterstadt
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand mr-2 flex-shrink-0" />
                <a
                  href="tel:+491234567890"
                  className="text-gray-600 hover:text-brand transition-colors"
                >
                  +49 1234 567890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand mr-2 flex-shrink-0" />
                <a
                  href="mailto:info@musswessels.de"
                  className="text-gray-600 hover:text-brand transition-colors"
                >
                  info@musswessels.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-gray-500 text-sm">
                &copy; {currentYear} Familienbäckerei Musswessels. Alle Rechte vorbehalten.
              </p>
            </div>
            <div className="flex space-x-6">
              <FooterLink to="/">Datenschutz</FooterLink>
              <FooterLink to="/">AGB</FooterLink>
              <FooterLink to="/">Impressum</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
