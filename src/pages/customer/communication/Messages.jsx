import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Messages() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Messages"
        description="Chat and message history with support teams."
        breadcrumbs=[{ label: 'Communication' }, { label: 'Messages' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Messages placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default Messages;
