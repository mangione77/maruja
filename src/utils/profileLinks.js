const buildProfileUrls = (id) => {
    const profileLinks = [
        { "linkName":"Fotos", "linkUrl":`https://www.facebook.com/search/${id}/photos-by/`, "linkIcon":"📷" },
        { "linkName":"Videos", "linkUrl":`https://www.facebook.com/search/${id}/videos-by/`, "linkIcon":"📹" },
        { "linkName":"Grupos", "linkUrl":`https://www.facebook.com/search/${id}/groups`, "linkIcon":"👩‍👦‍👦" },
        { "linkName":"Eventos futuros", "linkUrl":`https://www.facebook.com/search/${id}/events-joined/`, "linkIcon":"📅" },
        { "linkName":"Eventos pasados", "linkUrl":`https://www.facebook.com/search/${id}/events-joined/in-past/date/events/intersect/`, "linkIcon":"📅" },
        { "linkName":"Juegos", "linkUrl":`https://www.facebook.com/search/${id}/apps-used/game/apps/intersect`, "linkIcon":"🎮" },
        { "linkName":"Apps", "linkUrl":`https://www.facebook.com/search/${id}}/apps-used/`, "linkIcon":"📱" }
        ]

    return profileLinks
}

export default buildProfileUrls