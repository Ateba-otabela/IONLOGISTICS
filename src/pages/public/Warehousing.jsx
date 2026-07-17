import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Warehousing() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Warehousing"
        description="Warehouse and distribution center capabilities."
        breadcrumbs=[{ label: 'Warehousing' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page highlights storage and distribution services.</p>
        </div>
      </Card>
    </div>
  );
}

export default Warehousing;
