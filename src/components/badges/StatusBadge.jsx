function StatusBadge({ status }) {
  const colors = {
    Active: 'bg-emerald-100 text-emerald-700',
    Pending: 'bg-amber-100 text-amber-700',
    Inactive: 'bg-slate-100 text-slate-700',
  };
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[status] || colors.Pending}`}>{status}</span>;
}

export default StatusBadge;
