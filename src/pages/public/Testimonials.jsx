import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Testimonials() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Testimonials"
        description="Customer success stories and partner feedback."
        breadcrumbs=[{ label: 'Testimonials' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page features customer testimonials.</p>
        </div>
      </Card>
    </div>
  );
}

export default Testimonials;
