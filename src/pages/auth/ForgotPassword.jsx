import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function ForgotPassword() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Forgot Password"
        description="Reset your account password securely."
        breadcrumbs=[{ label: 'Authentication' }, { label: 'Forgot Password' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page provides password recovery UI.</p>
        </div>
      </Card>
    </div>
  );
}

export default ForgotPassword;
