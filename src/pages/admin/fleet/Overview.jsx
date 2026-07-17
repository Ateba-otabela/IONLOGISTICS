import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Overview() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Fleet"
        description="Fleet asset management and vehicle tracking."
        breadcrumbs=[{ label: 'Admin' }, { label: 'Fleet' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Fleet placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default Overview;
