import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function ShipmentDetails() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Shipment Details"
        description="Detailed shipment information and status."
        breadcrumbs=[{ label: 'Shipments' }, { label: 'Shipment Details' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Shipment detail placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default ShipmentDetails;
