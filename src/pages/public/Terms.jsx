import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Terms() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Terms"
        description="Terms of service and legal agreements."
        breadcrumbs=[{ label: 'Terms' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page outlines terms and conditions.</p>
        </div>
      </Card>
    </div>
  );
}

export default Terms;
