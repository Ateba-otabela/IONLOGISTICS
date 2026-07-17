import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function RequestQuote() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Request Quote"
        description="Request a logistics quote for shipments and supply chain services."
        breadcrumbs=[{ label: 'Request Quote' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page will allow customers to request custom pricing.</p>
        </div>
      </Card>
    </div>
  );
}

export default RequestQuote;
