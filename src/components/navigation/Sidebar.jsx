import { Link } from 'react-router-dom';

const items = [
  { label: 'Overview', to: '/customer' },
  { label: 'Shipments', to: '/customer/shipments' },
  { label: 'Orders', to: '/customer/orders/active' },
  { label: 'Payments', to: '/customer/payments/methods' },
  { label: 'Documents', to: '/customer/documents/upload' },
  { label: 'Messages', to: '/customer/communication/messages' },
];

function Sidebar() {
  return (
    <aside className="hidden w-72 flex-col border-r border-slate-200 bg-white px-4 py-6 lg:flex">
      <div className="mb-8 text-lg font-semibold text-primary">Customer Portal</div>
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

export default Sidebar;
