import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function ShippingCalculator() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Shipping Calculator"
        description="Estimate freight and transportation costs quickly."
        breadcrumbs=[{ label: 'Shipping Calculator' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page provides a pricing estimate interface.</p>
        </div>
      </Card>
    </div>
  );
}

export default ShippingCalculator;
