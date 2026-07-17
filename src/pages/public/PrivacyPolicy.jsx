import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function PrivacyPolicy() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Privacy Policy"
        description="Privacy policy for IONLOGISTICS customers and visitors."
        breadcrumbs=[{ label: 'Privacy Policy' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page shares privacy and data policies.</p>
        </div>
      </Card>
    </div>
  );
}

export default PrivacyPolicy;
