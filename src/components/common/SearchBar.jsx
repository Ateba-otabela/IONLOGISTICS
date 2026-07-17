function SearchBar() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <input
        type="search"
        placeholder="Search..."
        className="w-full border-none bg-transparent text-sm text-slate-900 outline-none"
      />
    </div>
  );
}

export default SearchBar;
