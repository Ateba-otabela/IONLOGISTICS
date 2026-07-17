import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Analytics() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        description="Analytics and performance metrics for logistics teams."
        breadcrumbs=[{ label: 'Admin' }, { label: 'Analytics' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Analytics placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default Analytics;
