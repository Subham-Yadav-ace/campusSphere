export default function PostCard({ post }) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 mb-4 bg-white shadow-sm">
      <h3 className="font-bold text-lg">{post.title}</h3>
      <p className="whitespace-pre-wrap my-2">{post.content}</p>
      <div className="text-sm text-gray-500">
        By: {post.author} | {new Date(post.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
}
