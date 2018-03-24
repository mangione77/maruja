import axios from 'axios'

function fbCallInBulk(_usernames) {
    return new Promise((resolve, reject) => {
        let requestObj = { "usernames": _usernames }
        axios.post('http://localhost:8080/bulkIncoming/', requestObj)
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export default fbCallInBulk


