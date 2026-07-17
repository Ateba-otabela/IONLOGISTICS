function Drawer({ title, children, className = '' }) {
  return (
    <div className={`rounded-t-3xl bg-white p-6 shadow-soft ${className}`}>
      {title && <h2 className="mb-4 text-xl font-semibold text-slate-900">{title}</h2>}
      {children}
    </div>
  );
}

export default Drawer;
