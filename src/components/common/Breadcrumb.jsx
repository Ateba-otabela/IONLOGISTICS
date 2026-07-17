import { Link } from 'react-router-dom';

function Breadcrumb({ items = [] }) {
  return (
    <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link to="/" className="transition-colors hover:text-slate-900">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-slate-300">/</span>
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-slate-900">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-600">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
