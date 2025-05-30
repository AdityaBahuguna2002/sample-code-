import { useAuth } from "@/app/context/authContext"


export const managePostLocalStorage = (isEdit, postType) => {
    
    let formDataKey="";
    const {auth} = useAuth();

    if(isEdit){
        formDataKey = `${auth?.id}/${postType}/post/edit`;
    }
    else{
        formDataKey = `${auth?.id}/${postType}/post/create`;
    }
    return formDataKey;
}

export const manageCategoryLocalStorage = (isEdit, postType) => {
    
    let categoryKey="";
    const {auth} = useAuth();

    if(isEdit){
        categoryKey = `${auth.id}/${postType}/category/edit`;
    }
    else{
        categoryKey = `${auth.id}/${postType}/category/create`;
    }

    return categoryKey;

}