"use client";

import Link from "next/link";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllPosts, deletePost, switchPostStatus } from "@/lib/api/admin/postApi";
import { Toast } from "../customAdminUI/Toast/Toast";
import { useAuth } from "@/app/context/authContext";
import { Pencil, Trash2 } from "lucide-react";
import { analyzeContent } from "@/utils/contentAnalyzer";
import { focusKeyword } from "@/utils/focusKeyword";

const AllPosts = ({ postType }) => {
  const { auth } = useAuth();
  const queryClient = useQueryClient();

  const { data: responseData, isLoading } = useQuery({
    queryKey: ["posts", postType],
    queryFn: () => getAllPosts(postType),
    enabled: !!postType,
  });

  const { mutate: deletePostMutation } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      Toast({ message: "Post deleted successfully", type: "success" });
      queryClient.invalidateQueries(["posts", postType]);
    },
    onError: () => {
      Toast({ message: "Failed to delete post", type: "error" });
    },
  });

  const { mutate: postStatus } = useMutation({
    mutationFn: switchPostStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts", postType]);
    },
    onError: (error) => {
      Toast({ message: error?.message || "Error switching post status", type: "error" });
    },
  });

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this post?")) {
      deletePostMutation({ postType, id });
    }
  };

  const handleSwitchPostStatus = (id) => {
    postStatus({ postType, id });
  };

  const posts = responseData?.posts || [];

  if (isLoading) return <p className="text-center text-sm py-2">Loading...</p>;

  return (
    <div className=" text-sm px-2">
      <table className="min-w-full bg-white rounded-md shadow-md border border-gray-200">
        <thead className="bg-gray-50 rounded-lg border-b">
          <tr className="text-left text-gray-600 uppercase text-xs tracking-wider">
            <th className="py-3 px-4">Title</th>
            <th className="py-3 px-4">Slug</th>
            <th className="py-3 px-4 hidden md:table-cell">Description</th>
            <th className="py-3 px-4">Actual Published Date</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Created</th>
            <th className="py-3 px-4 hidden md:table-cell">Updated</th>
            <th className="py-3 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {posts.map((post) => {

            return (
              <tr key={post.id} className="border-t hover:bg-gray-50 transition-all">
                <td
                  className={`py-3 px-4 ${
                    post.status === "published" ? "text-blue-600" : "text-gray-400"
                  } font-medium whitespace-nowrap`}
                >
                  {post.status === "published" ? (
                    <Link
                      href={`/${postType}/${post.slug}`}
                      className="hover:underline"
                      target="_blank"
                    >
                      {post.title}
                    </Link>
                  ) : (
                    post.title
                  )}
                </td>
                <td className="py-3 px-4">{post.slug}</td>
                <td className="py-3 px-4 hidden md:table-cell truncate max-w-xs">
                  {post.description}
                </td>
                <td className="py-3 px-4">
                  {post?.actualPublishedDate ? new Date(post.actualPublishedDate).toLocaleDateString(undefined, {
                      dateStyle: "medium",
                    }) : new Date(post.createdAt).toLocaleDateString(undefined, {
                      dateStyle: "medium",
                    })}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      post.status === "published"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="text-sm">
                    {new Date(post.createdAt).toLocaleDateString(undefined, {
                      dateStyle: "medium",
                    })}
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(post.createdAt).toLocaleTimeString(undefined, {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </td>
                <td className="py-3 px-4 hidden md:table-cell">
                  <div className="text-sm">
                    {new Date(post.updatedAt).toLocaleDateString(undefined, {
                      dateStyle: "medium",
                    })}
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(post.updatedAt).toLocaleTimeString(undefined, {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </td>
                <td className="py-3 px-4 text-center">
                  <div className="flex justify-center items-center gap-2">
                    {(post.userId === auth.id || auth.role === "editor") && (
                      <Link
                        href={`/admin/${postType}/edit?id=${post.id}`}
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      >
                        <Pencil className="w-4 h-4" />
                        <span>Edit</span>
                      </Link>
                    )}
                    {auth.role === "editor" && (
                      <>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="text-red-600 hover:text-red-800 flex items-center gap-1"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Delete</span>
                        </button>
                        <button
                          onClick={() => handleSwitchPostStatus(post.id)}
                          className={`flex items-center gap-1 ${
                            post.status === "published"
                              ? "text-green-600 hover:text-gray-700"
                              : "text-gray-500 hover:text-green-700"
                          }`}
                        >
                          <span>{post.status === "published" ? "Unpublish" : "Publish"}</span>
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllPosts;