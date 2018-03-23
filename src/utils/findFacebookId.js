import fbCall from './getFBId'

function findId(name) {
    return new Promise((resolve,reject) => {
        fbCall(name)
            .then(response => {
                resolve(response)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export default findId