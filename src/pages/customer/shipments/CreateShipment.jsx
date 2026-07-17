import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function CreateShipment() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Create Shipment"
        description="Create new shipments and shipping requests."
        breadcrumbs=[{ label: 'Shipments' }, { label: 'Create Shipment' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Shipment creation placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default CreateShipment;
