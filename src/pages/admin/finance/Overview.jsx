import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Overview() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Finance"
        description="Financial operations and cash flow tracking."
        breadcrumbs=[{ label: 'Admin' }, { label: 'Finance' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Finance placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default Overview;
