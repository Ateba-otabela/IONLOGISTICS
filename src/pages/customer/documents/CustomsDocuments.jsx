import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function CustomsDocuments() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Customs Documents"
        description="Access customs clearance paperwork."
        breadcrumbs=[{ label: 'Documents' }, { label: 'Customs Documents' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Customs documents placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default CustomsDocuments;
