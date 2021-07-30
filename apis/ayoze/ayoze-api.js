export const LISTNEWFEEDS = async (params, credentials, signal) => {
    try {
        let response = await fetch ("/_v1/api/ayozes/feed/"+ params, {
            method: "GET",
            signal: signal,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + credentials
            }
        });
        return await response.json()
    } catch (err) {
        console.log(err)
    }
};

export const READ = async (params, credentials, signal) => {
    try {
        let response = await fetch ("/_v1/api/ayozes/single/feed/"+ params, {
            method: "GET",
            signal,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + credentials
            }
        });
        return await response.json()
    } catch (err) {
        console.log(err)
    }
};

export const LIKE = async (params, credentials, gistId) => {
    try {
        let response = await fetch ("/_v1/api/gists/like/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": 'Bearer ' + credentials.token
            },
            body: JSON.stringify({userId: params.userId, gistId})
        });
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export const UNLIKE = async (params, credentials, gistId) => {
    try {
        let response = await fetch ("/_v1/api/gists/unlike/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": 'Bearer ' + credentials.token
            },
            body: JSON.stringify({userId: params.userId, gistId})
        });
        return await response.json()
    } catch (err) {
        console.log(err)
  
    }
}

export const CREATE = async (params, credentials, post) => {
   //  console.log(params)
    try {
        let response = await fetch("/_v1/api/ayozes/new/" + params, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + credentials
            },
            body: post
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export const REACT = async (userId, credentials, ayozeId, reaction) => {
    try {
        let response = await fetch ("/_v1/api/ayozes/react", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": 'Bearer ' + credentials
            },
            body: JSON.stringify({userId, ayozeId, reaction})
        });
        return await response.json()
    } catch (err) {
        console.log(err)
}}