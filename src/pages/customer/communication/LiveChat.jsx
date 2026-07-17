import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function LiveChat() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Live Chat"
        description="Access live chat support and assistance."
        breadcrumbs=[{ label: 'Communication' }, { label: 'Live Chat' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Live chat placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default LiveChat;
