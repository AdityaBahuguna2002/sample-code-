import AllPost from "@/components/admin/AllPost/AllPost";

const AllItems = async (props) => {

    const { params } = await props;

    const {postType} = await params;

    return(
        <AllPost postType={postType}/>
    );


}

export default AllItems;