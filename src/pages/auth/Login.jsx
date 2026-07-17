import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Login() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Login"
        description="Sign in to access the IONLOGISTICS portal."
        breadcrumbs=[{ label: 'Authentication' }, { label: 'Login' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page provides a login form UI.</p>
        </div>
      </Card>
    </div>
  );
}

export default Login;
