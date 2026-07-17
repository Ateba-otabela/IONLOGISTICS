import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Overview() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Customers"
        description="Customer management and account overview."
        breadcrumbs=[{ label: 'Admin' }, { label: 'Customers' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Customers placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default Overview;
