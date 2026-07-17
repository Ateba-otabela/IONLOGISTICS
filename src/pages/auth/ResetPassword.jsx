import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function ResetPassword() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Reset Password"
        description="Enter a new password for your account."
        breadcrumbs=[{ label: 'Authentication' }, { label: 'Reset Password' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page provides reset password UI.</p>
        </div>
      </Card>
    </div>
  );
}

export default ResetPassword;
