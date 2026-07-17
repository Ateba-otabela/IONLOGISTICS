import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function DeliveryConfirmation() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Delivery Confirmation"
        description="Confirm delivery and receipt details."
        breadcrumbs=[{ label: 'Shipments' }, { label: 'Delivery Confirmation' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Delivery confirmation placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default DeliveryConfirmation;
