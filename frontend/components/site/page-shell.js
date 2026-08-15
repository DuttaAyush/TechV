import Nav from './nav';
import Footer from './footer';
import ConsultationWidget from './consultation-widget';
import CartDrawer from './cart-drawer';

export default function PageShell({ children }) {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#071326] text-white">{children}</main>
      <CartDrawer />
      <ConsultationWidget />
      <Footer />
    </>
  );
}