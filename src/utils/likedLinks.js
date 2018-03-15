const buildLikedUrls = (id) => {
    const likedUrls = [
        { "linkName":"Fotos", "linkUrl":`https://www.facebook.com/search/${id}/photos-liked/intersect`, "linkIcon":"📷" },
        { "linkName":"Videos", "linkUrl":`https://www.facebook.com/search/${id}/videos-liked/intersect`, "linkIcon":"📹" },
        { "linkName":"Posts", "linkUrl":`https://www.facebook.com/search/${id}/stories-liked/intersect`, "linkIcon":"📓" }
        ]

    return likedUrls
}

export default buildLikedUrls