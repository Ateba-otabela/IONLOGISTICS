import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Overview() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Shipments"
        description="Enterprise shipment operations and status overview."
        breadcrumbs=[{ label: 'Admin' }, { label: 'Shipments' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Shipments placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default Overview;
