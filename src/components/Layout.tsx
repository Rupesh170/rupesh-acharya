import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

export default function Layout() {
  const { pathname } = useLocation();

  // Check if we're on a ProjectDetail page that should have auto-hide header
  const isAutoHideRoute = /^\/projects\/[^/]+$/.test(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-canvas">
      {!isAutoHideRoute && <Header />}
      <main className={`flex-1 ${!isAutoHideRoute ? 'pt-16' : ''}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
