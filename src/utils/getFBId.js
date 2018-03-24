import axios from 'axios'

function fbCall(_username) {
    return new Promise((resolve,reject) => {
        let requestObj = { "username": _username }
        axios.post('https://secret-stream-16692.herokuapp.com/incoming/', requestObj)
            .then(response => {
                resolve(response.data.result.id)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export default fbCall   


