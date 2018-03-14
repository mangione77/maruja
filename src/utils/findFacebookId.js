import FindFacebookId from 'find-facebook-id'

async function findId(name) {
    try {
        let id = await FindFacebookId(name)
        return id
    }
    catch (err) {
        throw err
    }

}

export default findId