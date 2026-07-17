import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function RefundRequests() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Refund Requests"
        description="Submit refund requests and claims."
        breadcrumbs=[{ label: 'Payments' }, { label: 'Refund Requests' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Refund requests placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default RefundRequests;
