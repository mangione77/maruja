const buildPeopleLinks = (id) => {
    const peopleLinks = [
        { "linkName":"Familiares", "linkUrl":`https://www.facebook.com/search/${id}/relatives/intersect`, "linkIcon":"👪" },
        { "linkName":"Amigos", "linkUrl":`https://www.facebook.com/search/${id}/friends/intersect`, "linkIcon":"👯" },
        { "linkName":"Amigos de amigos", "linkUrl":`https://www.facebook.com/search/${id}/friends/friends/intersect`, "linkIcon":"👯" },
        { "linkName":"Compañeros de trabajo", "linkUrl":`https://www.facebook.com/search/${id}/employees/intersect/`, "linkIcon":"👨🏻‍🏭" },
        { "linkName":"Compañeros de clase", "linkUrl":`https://www.facebook.com/search/${id}/schools-attended/ever-past/intersect/students/intersect/`, "linkIcon":"👩‍🎓" },
        { "linkName":"Residentes en la misma ciudad", "linkUrl":`https://www.facebook.com/search/${id}/current-cities/residents-near/present/intersect`, "linkIcon":"🌆" },
        ]

    return peopleLinks
}

export default buildPeopleLinks