import AddPost from "@/components/admin/CreatePost";
import { getTags } from "@/lib/api/admin/tagsApi";

async function AddItems(props) {
  const { params } = await props;
 
  const {postType} = await params;

  const { data, error, loading } = await getTags(postType);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error ) {
    return (
      <div className="flex justify-center items-center h-screen p-4 text-red-500">
        Error: {error} 
      </div>
    );
  }

  return <AddPost data={data} postType={postType} />;
}

export default AddItems;
