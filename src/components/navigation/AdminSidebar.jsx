import { Link } from 'react-router-dom';

const items = [
  { label: 'Dashboard', to: '/admin' },
  { label: 'Shipments', to: '/admin/shipments' },
  { label: 'Customers', to: '/admin/customers' },
  { label: 'Drivers', to: '/admin/drivers' },
  { label: 'Fleet', to: '/admin/fleet' },
  { label: 'Warehouses', to: '/admin/warehouses' },
  { label: 'Routes', to: '/admin/routes' },
  { label: 'Finance', to: '/admin/finance' },
  { label: 'Reports', to: '/admin/reports' },
  { label: 'Administration', to: '/admin/administration' },
];

function AdminSidebar() {
  return (
    <aside className="hidden w-72 flex-col border-r border-slate-200 bg-white px-4 py-6 lg:flex">
      <div className="mb-8 text-lg font-semibold text-primary">Admin Portal</div>
      <nav className="space-y-3">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block rounded-2xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default AdminSidebar;
