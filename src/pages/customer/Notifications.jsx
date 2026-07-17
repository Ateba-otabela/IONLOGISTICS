import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Notifications() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Notifications"
        description="This page will list platform notifications and alerts."
        breadcrumbs=[{ label: 'Notifications' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Alerts and system notices.</p>
        </div>
      </Card>
    </div>
  );
}

export default Notifications;
