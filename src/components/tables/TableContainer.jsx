function TableContainer({ children }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
      {children}
    </div>
  );
}

export default TableContainer;
