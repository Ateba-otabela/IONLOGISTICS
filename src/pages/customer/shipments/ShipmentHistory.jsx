import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function ShipmentHistory() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Shipment History"
        description="Browse past shipment records and statuses."
        breadcrumbs=[{ label: 'Shipments' }, { label: 'Shipment History' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">History placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default ShipmentHistory;
