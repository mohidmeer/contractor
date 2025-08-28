"use client";

import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./_components/EditForm";
import CreateBlogJsonForm from "./_components/CreateForm";


interface Blog {
    id: string;
    title: string;
    slug: string;
    read_time: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    description?: string;
}

const Page = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [editingBlog, setEditingBlog] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    // Fetch blogs on mount
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const params = new URLSearchParams();

                // only add q if search isn't empty
                if (search.trim()) {
                    params.set("q", search.trim());
                }

                const res = await fetch(`/api/admin/blogs?${params.toString()}`);
                const data = await res.json();
                setBlogs(data.items || []);
            } catch (err) {
                console.error("Failed to fetch blogs", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [search]);

    // Filter blogs by search text
    const filtered = blogs.filter(
        (b) =>
            b.title.toLowerCase().includes(search.toLowerCase()) ||
            b.slug.toLowerCase().includes(search.toLowerCase())
    );
    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this blog?")) return;
      
        try {
          const res = await fetch(`/api/admin/blogs/${id}`, {
            method: "DELETE",
          });
      
          if (!res.ok) {
            const msg = await res.text();
            throw new Error(msg || "Failed to delete blog");
          }
      
          // remove deleted blog from state
          setBlogs((prev) => prev.filter((b) => b.id !== id));
      
          alert("✅ Blog deleted successfully!");
        } catch (err:any) {
          alert("❌ Error: " + err.message);
        }
      };

    return (
        <div className="container mx-auto bg-white p-4 min-h-screen flex flex-col gap-4">
            <h3 className="">Manage Blogs</h3>
            <div className="flex gap-2 items-center">
            <input
                className="input max-w-xl"
                placeholder="Search For Blogs"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
             <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-green-600 text-white rounded">
        New Blog
      </button>

            </div>
            

            <div className="relative overflow-x-auto card rounded-md">
                {loading ? (
                    <p className="p-4">Loading blogs...</p>
                ) : (
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">Blog title</th>
                                <th scope="col" className="px-6 py-3">Description</th>
                                <th scope="col" className="px-6 py-3">Created At</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((blog) => (
                                <tr key={blog.id}>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        {blog.title}
                                    </th>
                                    <td className="px-6 py-4 max-w-xl">{blog.description ?? "-"}</td>
                                    <td className="px-6 py-4">
                                        {new Date(blog.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 flex gap-2">
                                        <button className="border rounded-md border-gray-100 p-1">
                                            <MdEdit size={20} className="text-blue-500 cursor-pointer" onClick={() => setEditingBlog(blog.id)} />
                                        </button>
                                        <button className="border rounded-md border-gray-100 p-1"  onClick={() => handleDelete(blog.id)}>
                                            <MdDelete size={20} className="text-red-500 cursor-pointer" />
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="text-center py-4">
                                        No blogs found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
            {editingBlog && (
                <EditForm
                    blog_id={editingBlog}
                    onClose={() => setEditingBlog(null)}
                    onSave={(updated) => {
                        // update your local state with updated blog
                        console.log(updated)
                        setEditingBlog(null);
                    }}
                />
            )}
            {
                isOpen &&
                <CreateBlogJsonForm
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    onCreated={(blog) => console.log("Blog created:", blog)}
                />
            }

        </div>
    );
};

export default Page;
