import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm text-slate-600">IONLOGISTICS © 2026. Built for enterprise logistics.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          <Link to="/privacy-policy" className="transition-colors hover:text-slate-900">Privacy</Link>
          <Link to="/terms" className="transition-colors hover:text-slate-900">Terms</Link>
          <Link to="/contact" className="transition-colors hover:text-slate-900">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
