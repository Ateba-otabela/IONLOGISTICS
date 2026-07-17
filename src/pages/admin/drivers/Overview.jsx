import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Overview() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Drivers"
        description="Driver profiles and assignment management."
        breadcrumbs=[{ label: 'Admin' }, { label: 'Drivers' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Drivers placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default Overview;
