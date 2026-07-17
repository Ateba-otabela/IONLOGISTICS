import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Dashboard() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Customer Dashboard"
        description="This page will display shipment statistics, notifications, recent activities and quick actions."
        breadcrumbs=[{ label: 'Customer Dashboard' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Customer dashboard overview.</p>
        </div>
      </Card>
    </div>
  );
}

export default Dashboard;
