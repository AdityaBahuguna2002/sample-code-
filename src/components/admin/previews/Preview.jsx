"use client";
const  PreviewDraft = ({postData, categories, content, featuredImage}) => {
  console.log(categories);  
    return(
        <div className="flex flex-col gap-6">
            {featuredImage ? (
              <img
                src={typeof featuredImage === "string" ? featuredImage : URL.createObjectURL(featuredImage)}
                alt="Featured"
                className="w-full h-64 object-cover rounded"
              />
            ) : (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">No featured image</div>
            )}

            <h1 className="text-3xl font-bold">{postData.title || "Untitled Post"}</h1>

            <div className="flex gap-2 flex-wrap">
              {(categories || []).map((cat, idx) => (
                <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                  {cat.name}
                </span>
              ))}
            </div>

            <div dangerouslySetInnerHTML={{ __html: content || "<p>No content yet</p>" }} />
        </div>
    )
}

export default PreviewDraft;