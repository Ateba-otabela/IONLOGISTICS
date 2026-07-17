import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Billing() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Billing"
        description="Review billing and invoice summaries."
        breadcrumbs=[{ label: 'Payments' }, { label: 'Billing' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Billing placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default Billing;
