function EmptyState({ title, description }) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center text-slate-600">
      <h2 className="mb-2 text-xl font-semibold text-slate-900">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default EmptyState;
