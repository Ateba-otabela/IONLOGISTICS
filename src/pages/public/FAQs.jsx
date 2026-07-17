import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function FAQs() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="FAQs"
        description="Common questions about logistics, shipping and support."
        breadcrumbs=[{ label: 'FAQs' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page answers frequently asked questions.</p>
        </div>
      </Card>
    </div>
  );
}

export default FAQs;
