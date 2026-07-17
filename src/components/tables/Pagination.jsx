function Pagination() {
  return (
    <div className="flex items-center justify-between px-4 py-3 text-sm text-slate-600">
      <span>Page 1 of 10</span>
      <div className="flex items-center gap-2">
        <button className="rounded-2xl border border-slate-200 px-3 py-2">Prev</button>
        <button className="rounded-2xl border border-slate-200 px-3 py-2">Next</button>
      </div>
    </div>
  );
}

export default Pagination;
