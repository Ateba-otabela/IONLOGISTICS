import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function CompletedOrders() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Completed Orders"
        description="Review completed order history."
        breadcrumbs=[{ label: 'Orders' }, { label: 'Completed Orders' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Completed orders placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default CompletedOrders;
