import { Link } from 'react-router-dom';

function Breadcrumb({ items = [], theme = 'default' }) {
  const isDark = theme === 'dark';
  const linkClass = isDark ? 'text-slate-200 hover:text-white' : 'text-slate-500 hover:text-slate-900';
  const currentClass = isDark ? 'text-white' : 'text-slate-600';
  const separatorClass = isDark ? 'text-slate-400' : 'text-slate-300';

  return (
    <nav className={`text-sm ${isDark ? 'text-slate-200' : 'text-slate-500'}`} aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link to="/" className={`transition-colors ${linkClass}`}>
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className={separatorClass}>/</span>
            {item.to ? (
              <Link to={item.to} className={`transition-colors ${linkClass}`}>
                {item.label}
              </Link>
            ) : (
              <span className={currentClass}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
