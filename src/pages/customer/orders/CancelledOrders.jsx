import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function CancelledOrders() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Cancelled Orders"
        description="Track cancelled and returned orders."
        breadcrumbs=[{ label: 'Orders' }, { label: 'Cancelled Orders' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Cancelled orders placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default CancelledOrders;
