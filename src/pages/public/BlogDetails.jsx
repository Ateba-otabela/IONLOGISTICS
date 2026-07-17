import Card from '@/components/cards/Card';
import PageHeader from '@/components/common/PageHeader';

function BlogDetails() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Blog Details"
        description="Detailed logistics insights and case studies."
        breadcrumbs=[{ label: 'Blog' }, { label: 'Blog Details' }]
      />
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">This page is a placeholder for a blog article.</p>
        </div>
      </Card>
    </div>
  );
}

export default BlogDetails;
