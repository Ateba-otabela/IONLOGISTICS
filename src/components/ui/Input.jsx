function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20 ${className}`}
      {...props}
    />
  );
}

export default Input;
