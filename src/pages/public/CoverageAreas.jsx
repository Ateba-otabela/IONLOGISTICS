import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function CoverageAreas() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Coverage Areas"
        description="Global and regional logistics coverage and service zones."
        breadcrumbs=[{ label: 'Coverage Areas' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page shows coverage maps and regions.</p>
        </div>
      </Card>
    </div>
  );
}

export default CoverageAreas;
