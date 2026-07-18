import Breadcrumb from './Breadcrumb';

function PageHeader({ title, description, breadcrumbs = [], theme = 'default' }) {
  const isDark = theme === 'dark';

  return (
    <div className="mb-6 space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {title}
          </h1>
          <p className={`mt-2 max-w-2xl text-sm ${isDark ? 'text-slate-200' : 'text-slate-600'}`}>
            {description}
          </p>
        </div>
      </div>
      <Breadcrumb items={breadcrumbs} theme={theme} />
    </div>
  );
}

export default PageHeader;
