import FindFacebookId from 'getFBId'

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