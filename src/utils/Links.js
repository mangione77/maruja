const buildUrls = (id) => {
    let links = [
        {
            "categoryTitle":"Perfil",
            "categoryIcon":"🕵",
            "links": [
                { "linkName":"Fotos", "linkUrl":`https://www.facebook.com/search/${id}/photos-by/`, "linkIcon":"📷" },
                { "linkName":"Vídeos", "linkUrl":`https://www.facebook.com/search/${id}/videos-by/`, "linkIcon":"📹" },
                { "linkName":"Grupos", "linkUrl":`https://www.facebook.com/search/${id}/groups`, "linkIcon":"🤖" },
                { "linkName":"Eventos futuros", "linkUrl":`https://www.facebook.com/search/${id}/events-joined/`, "linkIcon":"📅" },
                { "linkName":"Eventos pasados", "linkUrl":`https://www.facebook.com/search/${id}/events-joined/in-past/date/events/intersect/`, "linkIcon":"📅" },
                { "linkName":"Juegos", "linkUrl":`https://www.facebook.com/search/${id}/apps-used/game/apps/intersect`, "linkIcon":"🎮" },
                { "linkName":"Apps", "linkUrl":`https://www.facebook.com/search/${id}}/apps-used/`, "linkIcon":"📱" }
            ]
        },
        {
            "categoryTitle":"Lugares",
            "categoryIcon":"🌆",
            "links": [
                { "linkName":"Todos", "linkUrl":`https://www.facebook.com/search/${id}/places-visited/`, "linkIcon":"🌉" },
                { "linkName":"Bares", "linkUrl":`https://www.facebook.com/search/${id}/places-visited/110290705711626/places/intersect/`, "linkIcon":"🍻" },
                { "linkName":"Restaurantes", "linkUrl":`https://www.facebook.com/search/${id}/places-visited/273819889375819/places/intersect/`, "linkIcon":"🍟" },
                { "linkName":"Tiendas", "linkUrl":`https://www.facebook.com/search/${id}/places-visited/200600219953504/places/intersect/`, "linkIcon":"🛒" },
                { "linkName":"Hoteles", "linkUrl":`https://www.facebook.com/search/${id}/places-visited/164243073639257/places/intersect/`, "linkIcon":"🛏️" },
                { "linkName":"Cines/Teatros", "linkUrl":`https://www.facebook.com/search/${id}/places-visited/192511100766680/places/intersect/`, "linkIcon":"🎬" },
            ]
        },
        {
            "categoryTitle":"Conocidos",
            "categoryIcon":"👩‍👩‍👧‍👦",
            "links": [
                { "linkName":"Familiares", "linkUrl":`https://www.facebook.com/search/${id}/relatives/intersect`, "linkIcon":"👪" },
                { "linkName":"Amigos", "linkUrl":`https://www.facebook.com/search/${id}/friends/intersect`, "linkIcon":"👯" },
                { "linkName":"Amigos de amigos", "linkUrl":`https://www.facebook.com/search/${id}/friends/friends/intersect`, "linkIcon":"👯" },
                { "linkName":"Compañeros de trabajo", "linkUrl":`https://www.facebook.com/search/${id}/employees/intersect/`, "linkIcon":"👨🏻‍🏭" },
                { "linkName":"Compañeros de clase", "linkUrl":`https://www.facebook.com/search/${id}/schools-attended/ever-past/intersect/students/intersect/`, "linkIcon":"👩‍🎓" },
                { "linkName":"Residentes en la misma ciudad", "linkUrl":`https://www.facebook.com/search/${id}/current-cities/residents-near/present/intersect`, "linkIcon":"🌆" },
            ]
        },
        {
            "categoryTitle":"Intereses",
            "categoryIcon":"😍",
            "links": [
                { "linkName":"Todo", "linkUrl":`https://www.facebook.com/search/${id}/pages-liked/intersect`, "linkIcon":"👪" },
                { "linkName":"Partido político", "linkUrl":`https://www.facebook.com/search/${id}/friends/intersect`, "linkIcon":"👯" },
                { "linkName":"Amigos de amigos", "linkUrl":`https://www.facebook.com/search/${id}/friends/friends/intersect`, "linkIcon":"👯" },
                { "linkName":"Compañeros de trabajo", "linkUrl":`https://www.facebook.com/search/${id}/employees/intersect/`, "linkIcon":"👨🏻‍🏭" },
                { "linkName":"Compañeros de clase", "linkUrl":`https://www.facebook.com/search/${id}/schools-attended/ever-past/intersect/students/intersect/`, "linkIcon":"👩‍🎓" },
                { "linkName":"Residentes en la misma ciudad", "linkUrl":`https://www.facebook.com/search/${id}/current-cities/residents-near/present/intersect`, "linkIcon":"🌆" },
            ]
        },
        {
            "categoryTitle":"Likes",
            "categoryIcon":"👍",
            "links": [
                { "linkName":"Fotos", "linkUrl":`https://www.facebook.com/search/${id}/photos-liked/intersect`, "linkIcon":"📷" },
                { "linkName":"Vídeos", "linkUrl":`https://www.facebook.com/search/${id}/videos-liked/intersect`, "linkIcon":"📹" },
                { "linkName":"Posts", "linkUrl":`https://www.facebook.com/search/${id}/stories-liked/intersect`, "linkIcon":"📓" }
            ]
        },
        {
            "categoryTitle":"Etiquetas",
            "categoryIcon":"🔖",
            "links": [
                { "linkName":"Fotos", "linkUrl":`https://www.facebook.com/search/${id}/photos-of/intersect/`, "linkIcon":"📷" },
                { "linkName":"Vídeos", "linkUrl":`https://www.facebook.com/search/${id}/videos-of/intersect/`, "linkIcon":"📹" },
                { "linkName":"Posts", "linkUrl":`https://www.facebook.com/search/${id}/stories-tagged/intersect/`, "linkIcon":"📓" }
            ]
        }
    ]

    return links
}

export default buildUrls