const buildCommentsUrls = (id) => {
    const commentUrls = [
        { "linkName":"Fotos", "linkUrl":`https://www.facebook.com/search/${id}/photos-commented/intersect`, "linkIcon":"📷" }
        ]

    return commentUrls
}

export default buildCommentsUrls