import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function Blog() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Blog"
        description="Logistics thought leadership and industry insights."
        breadcrumbs=[{ label: 'Blog' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page hosts articles and announcements.</p>
        </div>
      </Card>
    </div>
  );
}

export default Blog;
