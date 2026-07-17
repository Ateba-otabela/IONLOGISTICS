import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Register() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Register"
        description="Create a new customer account for the platform."
        breadcrumbs=[{ label: 'Authentication' }, { label: 'Register' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page provides account registration UI.</p>
        </div>
      </Card>
    </div>
  );
}

export default Register;
