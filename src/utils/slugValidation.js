 export  const checkSlugIsValid = (slug)=>{
    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

      if (!slug) {
        return {status : false, message : "Slug cannot be empty."};
      }
    
      if (/[A-Z]/.test(slug)) {
        return {status : false, message : "Slug cannot contain uppercase letters."};
      }
    
      if (slug.startsWith('-')) {
        return {status : false, message : "Slug cannot start with a hyphen."};
      }
    
      if (slug.endsWith('-')) {
        return {status : false, message : "Slug cannot end with a hyphen."};
      }
    
      if (/--/.test(slug)) {
        return {status : false, message : "Slug cannot contain consecutive hyphens."};
      }
    
      if (/[^a-z0-9-]/.test(slug)) {
        return {status : false, message : "Slug can only contain lowercase letters, numbers, and hyphens."};
      }
    
      if (!slugRegex.test(slug)) {
        return {status : false, message : "Invalid slug."};
      }
    
      return {status : true, message : "Valid slug."};
    
 }