const buildTagsUrls = (id) => {
    const tagLinks = [
        { "linkName":"Fotos", "linkUrl":`https://www.facebook.com/search/${id}/photos-of/intersect/`, "linkIcon":"📷" },
        { "linkName":"Videos", "linkUrl":`https://www.facebook.com/search/${id}/videos-of/intersect/`, "linkIcon":"📹" },
        { "linkName":"Posts", "linkUrl":`https://www.facebook.com/search/${id}/stories-tagged/intersect/`, "linkIcon":"📓" }
        ]

    return tagLinks
}

export default buildTagsUrls