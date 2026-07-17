import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function ShippingDocuments() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Shipping Documents"
        description="Manage shipping document records."
        breadcrumbs=[{ label: 'Documents' }, { label: 'Shipping Documents' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Shipping documents placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default ShippingDocuments;
