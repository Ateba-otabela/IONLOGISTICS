import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Profile() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Profile"
        description="Manage profile information and account preferences."
        breadcrumbs=[{ label: 'Profile' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Profile management placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default Profile;
