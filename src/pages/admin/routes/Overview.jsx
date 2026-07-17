import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Overview() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Routes"
        description="Route planning and optimization dashboards."
        breadcrumbs=[{ label: 'Admin' }, { label: 'Routes' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Routes placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default Overview;
