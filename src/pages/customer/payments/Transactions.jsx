import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Transactions() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Transactions"
        description="Track transaction history and status."
        breadcrumbs=[{ label: 'Payments' }, { label: 'Transactions' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Transactions placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default Transactions;
