import BlogForm from '../../../Components/Blogs/BlogForm';

export default function CreateBlog({ categories }) {
    return <BlogForm categories={categories} />;
}

CreateBlog.layout = BlogForm.layout;
