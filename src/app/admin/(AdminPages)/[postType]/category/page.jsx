import AddCategory from "@/components/admin/AddCategory/AddCategory";
import {fetchCategory} from "@/lib/api/admin/categoryApi";

export default async function Category(props) {
  const { params } = await props;

  const {postType} = await params;

  const { data, error, loading } = await fetchCategory(postType);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen p-4 text-red-500">
        Error: {error}
      </div>
    );
  }

  return <AddCategory data={data} postType={postType} />;
}
