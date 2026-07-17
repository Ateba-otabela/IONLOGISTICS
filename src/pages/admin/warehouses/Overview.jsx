import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Overview() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Warehouses"
        description="Warehouse network management and inventory overview."
        breadcrumbs=[{ label: 'Admin' }, { label: 'Warehouses' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Warehouses placeholder.</p>
        </div>
      </Card>
    </div>
  );
}

export default Overview;
