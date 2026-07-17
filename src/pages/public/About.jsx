import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function About() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="About"
        description="Company mission, experience and logistics capabilities."
        breadcrumbs=[{ label: 'About' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page will describe the IONTRUST ERP logistics vision.</p>
        </div>
      </Card>
    </div>
  );
}

export default About;
