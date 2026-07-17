import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Fleet() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Fleet"
        description="Fleet management and asset visibility for logistics operations."
        breadcrumbs=[{ label: 'Fleet' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page shares fleet services and equipment overview.</p>
        </div>
      </Card>
    </div>
  );
}

export default Fleet;
