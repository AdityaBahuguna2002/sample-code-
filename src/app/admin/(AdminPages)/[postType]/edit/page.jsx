import EditPost from "@/components/admin/Edit/EditPost";
import { getPostById } from "@/lib/api/admin/postApi";
import { fetchCategory } from "@/lib/api/admin/categoryApi";
import { getTags } from "@/lib/api/admin/tagsApi";

export default async function Edit({params, searchParams}) {

    const {postType} = await params;
    const {id} = await searchParams;

    const data = await getPostById(id);

    const category = await fetchCategory(postType);

    const tags = await getTags(postType);


    return <EditPost postType={postType} data={data?.post} category={category} tags={tags}/>;
}
