import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function VerifyEmail() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Verify Email"
        description="Confirm your email address for your account."
        breadcrumbs=[{ label: 'Authentication' }, { label: 'Verify Email' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page provides email verification UI.</p>
        </div>
      </Card>
    </div>
  );
}

export default VerifyEmail;
