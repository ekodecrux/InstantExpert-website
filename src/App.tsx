import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FaqChatbot } from './components/FaqChatbot';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProductDetailModal } from './components/ProductDetailModal';
import { PRODUCTS } from './data/siteData';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductItem, RoutePath } from './types/navigation';

const VALID_ROUTES: RoutePath[] = [
  '/',
  '/about',
  '/products',
  '/services',
  '/contact',
  '/privacy-policy',
];

function parseRoute(pathname: string): RoutePath {
  const normalized = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  if (VALID_ROUTES.includes(normalized as RoutePath)) {
    return normalized as RoutePath;
  }
  return '/';
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() =>
    parseRoute(window.location.pathname)
  );
  const [contactInterest, setContactInterest] = useState<string | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(parseRoute(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = useCallback(
    (path: RoutePath, options?: { interest?: string; productId?: string }) => {
      if (options?.interest) {
        setContactInterest(options.interest);
      }
      if (options?.productId) {
        const matched = PRODUCTS.find((p) => p.id === options.productId) ?? null;
        setSelectedProduct(matched);
      }
      if (window.location.pathname !== path) {
        window.history.pushState({}, '', path);
      }
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    []
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#142C49]">
      <Header currentPath={currentPath} onNavigate={handleNavigate} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentPath === '/' && (
              <HomePage
                onNavigate={handleNavigate}
                onSelectProduct={setSelectedProduct}
                onOpenChatbot={() => setIsChatbotOpen(true)}
              />
            )}
            {currentPath === '/about' && <AboutPage onNavigate={handleNavigate} />}
            {currentPath === '/products' && (
              <ProductsPage
                onNavigate={handleNavigate}
                onSelectProduct={setSelectedProduct}
              />
            )}
            {currentPath === '/services' && <ServicesPage onNavigate={handleNavigate} />}
            {currentPath === '/contact' && (
              <ContactPage initialInterest={contactInterest} />
            )}
            {currentPath === '/privacy-policy' && (
              <PrivacyPolicyPage onNavigate={handleNavigate} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer
        onNavigate={handleNavigate}
        onOpenChatbot={() => setIsChatbotOpen(true)}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onNavigate={handleNavigate}
      />

      <FaqChatbot
        isOpen={isChatbotOpen}
        onToggle={() => setIsChatbotOpen((prev) => !prev)}
        onClose={() => setIsChatbotOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
