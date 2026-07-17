import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Dashboard() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Admin Dashboard"
        description="A central operations overview for administrators."
        breadcrumbs=[{ label: 'Admin Dashboard' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Admin dashboard overview.</p>
        </div>
      </Card>
    </div>
  );
}

export default Dashboard;
