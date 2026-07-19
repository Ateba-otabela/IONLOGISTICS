import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import logo from '../../assets/images/logo.png';

function PublicNavbar() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="IONLOGISTICS" className="h-8 w-auto" />
          <span className="text-xl font-bold text-primary">IONLOGISTICS</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex text-slate-600">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/fleet">Fleet</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/auth/login" className="text-sm text-slate-600 hover:text-slate-900">Login</Link>
          <Button variant="secondary" as="a" href="/auth/register">Sign Up</Button>
        </div>
      </div>
    </header>
  );
}

export default PublicNavbar;
