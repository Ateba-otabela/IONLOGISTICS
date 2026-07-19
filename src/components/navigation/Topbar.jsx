import logo from '../../assets/images/logo.png';

function Topbar() {
  return (
    <header className="border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
      <div className="mx-auto max-w-7xl text-slate-700 flex items-center gap-3">
        <img src={logo} alt="IONLOGISTICS" className="h-6 w-auto" />
        <span>IONLOGISTICS Console</span>
      </div>
    </header>
  );
}

export default Topbar;
