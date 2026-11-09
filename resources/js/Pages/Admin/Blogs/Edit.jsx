import BlogForm from '../../../Components/Blogs/BlogForm';

export default function EditBlog({ blog, categories }) {
    return <BlogForm blog={blog} categories={categories} />;
}

EditBlog.layout = BlogForm.layout;
