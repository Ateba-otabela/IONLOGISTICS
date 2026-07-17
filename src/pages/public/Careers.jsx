import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Careers() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Careers"
        description="Career opportunities within IONLOGISTICS and IONTRUST."
        breadcrumbs=[{ label: 'Careers' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page lists roles and culture highlights.</p>
        </div>
      </Card>
    </div>
  );
}

export default Careers;
