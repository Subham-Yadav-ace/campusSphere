"use client";
import { useState } from "react";

export default function CreatePostModal({ isOpen, onClose, fetchPosts }) {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/posts`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: newPost.title,
            content: newPost.content,
            author: newPost.author || "Anonymous Student",
          }),
        },
      );

      if (response.ok) {
        fetchPosts();
        onClose();
        setNewPost({ title: "", content: "", author: "" });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 border border-gray-500 w-96">
        <h2 className="text-lg font-bold mb-4">New Post</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className="border border-gray-300 p-2"
            placeholder="Author Name"
            value={newPost.author}
            onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
          />
          <input
            className="border border-gray-300 p-2"
            required
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <textarea
            className="border border-gray-300 p-2"
            required
            placeholder="Content"
            rows="4"
            value={newPost.content}
            onChange={(e) =>
              setNewPost({ ...newPost, content: e.target.value })
            }
          ></textarea>

          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
