import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function MyShipments() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="My Shipments"
        description="View and manage active shipments."
        breadcrumbs=[{ label: 'Shipments' }, { label: 'My Shipments' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Shipment list placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default MyShipments;
