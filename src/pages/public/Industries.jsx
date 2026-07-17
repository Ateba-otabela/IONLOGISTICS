import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Industries() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Industries"
        description="Industries served by IONLOGISTICS across global supply chains."
        breadcrumbs=[{ label: 'Industries' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page highlights logistics solutions by industry.</p>
        </div>
      </Card>
    </div>
  );
}

export default Industries;
