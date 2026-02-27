"use client";
import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import CreatePostModal from "../components/CreatePostModal";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-2xl mx-auto p-4 mt-4">
        <div>
          {posts.length === 0 ? (
            <p>No posts yet.</p>
          ) : (
            posts.map((post) => <PostCard key={post._id} post={post} />)
          )}
        </div>
      </main>

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-5 right-5 bg-blue-600 text-white w-12 h-12 rounded-full text-2xl flex items-center justify-center pb-1"
      >
        +
      </button>

      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fetchPosts={fetchPosts}
      />
    </div>
  );
}
