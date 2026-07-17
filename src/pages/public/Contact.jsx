import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Contact() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Contact"
        description="Contact information and inquiries for IONLOGISTICS."
        breadcrumbs=[{ label: 'Contact' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page provides contact details and forms.</p>
        </div>
      </Card>
    </div>
  );
}

export default Contact;
