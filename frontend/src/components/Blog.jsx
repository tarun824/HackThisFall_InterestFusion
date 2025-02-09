import React, { useState } from "react";

// Mock data for blog posts
const mockBlogPosts = [
  {
    id: 1,
    title: "How to Start with React",
    author: "John Doe",
    date: "2025-02-01",
    content: "React is a powerful library for building user interfaces. Start by learning the basics of JSX, components, and state management.",
  },
  {
    id: 2,
    title: "The Importance of Clean Code",
    author: "Jane Smith",
    date: "2025-01-25",
    content: "Writing clean code is essential for maintainability and scalability. Learn some key principles to keep your codebase tidy.",
  },
  {
    id: 3,
    title: "10 Tips for Effective Debugging",
    author: "Alice Johnson",
    date: "2025-01-15",
    content: "Debugging can be a daunting task. These 10 tips will help you identify and resolve issues in your code more efficiently.",
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter blog posts based on the search query
  const filteredPosts = mockBlogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Header */}
      <header className="bg-blue-500 text-white text-center py-4 mb-6">
        <h1 className="text-2xl font-bold">Blog</h1>
        <p className="text-sm">Explore the latest posts and insights.</p>
      </header>

      {/* Main Section */}
      <main className="max-w-4xl mx-auto">
        {selectedPost ? (
          <BlogDetail post={selectedPost} setSelectedPost={setSelectedPost} />
        ) : (
          <>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <BlogList posts={filteredPosts} setSelectedPost={setSelectedPost} />
          </>
        )}
      </main>
    </div>
  );
};

// SearchBar Component
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search blog posts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  );
};

// BlogList Component
const BlogList = ({ posts, setSelectedPost }) => {
  return (
    <div className="space-y-4">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow rounded-lg p-4 cursor-pointer hover:bg-gray-100"
            onClick={() => setSelectedPost(post)}
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-500 text-sm">
              By {post.author} on {post.date}
            </p>
            <p className="text-gray-700 mt-2">
              {post.content.slice(0, 100)}...
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No posts found. Try another search.</p>
      )}
    </div>
  );
};

// BlogDetail Component
const BlogDetail = ({ post, setSelectedPost }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <button
        onClick={() => setSelectedPost(null)}
        className="text-blue-500 hover:underline mb-4"
      >
        &larr; Back to Blog List
      </button>
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-500 text-sm mb-4">
        By {post.author} on {post.date}
      </p>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
};

export default Blog;
