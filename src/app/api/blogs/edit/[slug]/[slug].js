// src/app/dashboard/blogs/edit/[id].jsx
import EditBlogForm from '../../components/EditBlogForm';

const EditBlogPage = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <h1>Éditer le blog</h1>
      <EditBlogForm blogId={id} />
    </div>
  );
};

export default EditBlogPage;
