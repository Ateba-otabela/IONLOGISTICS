import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Overview() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Administration"
        description="System administration and user management."
        breadcrumbs=[{ label: 'Admin' }, { label: 'Administration' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Administration placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default Overview;
