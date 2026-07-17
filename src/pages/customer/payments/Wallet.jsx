import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Wallet() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Wallet"
        description="Review wallet balance and credits."
        breadcrumbs=[{ label: 'Payments' }, { label: 'Wallet' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Wallet placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default Wallet;
