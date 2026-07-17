import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function UploadDocuments() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Upload Documents"
        description="Upload shipping and compliance documents."
        breadcrumbs=[{ label: 'Documents' }, { label: 'Upload Documents' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">File upload placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default UploadDocuments;
