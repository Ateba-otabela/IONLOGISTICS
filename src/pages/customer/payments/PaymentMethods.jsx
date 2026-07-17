import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function PaymentMethods() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Payment Methods"
        description="Manage saved payment methods."
        breadcrumbs=[{ label: 'Payments' }, { label: 'Payment Methods' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Payment method placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default PaymentMethods;
