import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Pricing() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Pricing"
        description="Tailored logistics pricing models for enterprise customers."
        breadcrumbs=[{ label: 'Pricing' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page shares strategic pricing overviews.</p>
        </div>
      </Card>
    </div>
  );
}

export default Pricing;
