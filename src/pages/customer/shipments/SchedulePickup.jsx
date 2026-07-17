import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function SchedulePickup() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Schedule Pickup"
        description="Schedule pickup requests for outgoing cargo."
        breadcrumbs=[{ label: 'Shipments' }, { label: 'Schedule Pickup' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Pickup scheduling placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default SchedulePickup;
