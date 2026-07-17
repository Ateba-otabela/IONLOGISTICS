import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function ShipmentTracking() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Shipment Tracking"
        description="Track the journey of a shipment in real time."
        breadcrumbs=[{ label: 'Shipments' }, { label: 'Shipment Tracking' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Tracking placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default ShipmentTracking;
