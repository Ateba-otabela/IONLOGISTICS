import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function SupportTickets() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Support Tickets"
        description="Create and monitor support cases."
        breadcrumbs=[{ label: 'Communication' }, { label: 'Support Tickets' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Support tickets placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default SupportTickets;
