import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Services() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Services"
        description="Logistics services, freight forwarding and managed transportation."
        breadcrumbs=[{ label: 'Services' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page will outline enterprise logistics offerings.</p>
        </div>
      </Card>
    </div>
  );
}

export default Services;
