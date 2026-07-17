import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Invoices() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Invoices"
        description="Access invoice records and receipts."
        breadcrumbs=[{ label: 'Payments' }, { label: 'Invoices' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Invoices placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default Invoices;
