import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function ActiveOrders() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Active Orders"
        description="View and manage active orders."
        breadcrumbs=[{ label: 'Orders' }, { label: 'Active Orders' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Active orders placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default ActiveOrders;
