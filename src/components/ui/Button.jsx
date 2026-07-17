function Button({ children, variant = 'primary', as: Component = 'button', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent';
  const styleMap = {
    primary: 'bg-primary text-white hover:bg-slate-900',
    secondary: 'bg-secondary text-white hover:bg-slate-900',
    ghost: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
  };

  return (
    <Component className={`${base} ${styleMap[variant] || styleMap.primary} ${className}`} {...props}>
      {children}
    </Component>
  );
}

export default Button;
