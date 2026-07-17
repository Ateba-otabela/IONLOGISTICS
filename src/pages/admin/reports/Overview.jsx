import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Overview() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Reports"
        description="Reporting and executive summaries."
        breadcrumbs=[{ label: 'Admin' }, { label: 'Reports' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Reports placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default Overview;
