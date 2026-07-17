import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function SecuritySettings() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Security Settings"
        description="Adjust security settings and access controls."
        breadcrumbs=[{ label: 'Security Settings' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Security settings placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default SecuritySettings;
