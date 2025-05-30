import {checkSlugIsValid} from "@/utils/slugValidation";
 
 const checkSlugs = async ({slug, tag})=> {
    
    const res = {
        data : null,
        error : null,
        loading : true
    }

    if(!slug || !tag){
        return; 
    }

    const {status, message} = checkSlugIsValid(slug);

    if(!status){
        res.error = message;
        return res;
    }

    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/checkSlug?tag=${tag}&slug=${slug}`,{
            method : "GET"
        });

        if(!response.ok){
            throw new Error("Error in checkSlugs : Failed to fetch dummy data");
        }

        const responseData = await response.json();
        if(responseData.status === 403){
            res.error = responseData.message;
        }else{    
            res.data = responseData.message;
        }
    }       
    catch(error){
        console.error("error in checkSlugs", error);
    }
    finally{
        res.loading = false;
        return res;
    }
  }

  export default checkSlugs;