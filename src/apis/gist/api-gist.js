export const LISTNEWFEEDS = async (params, credentials, signal) => {
    //console.log(credentials.token)
    try {
        let response = await fetch ("/_v1/api/gists/feed/"+ params.userId, {
            method: "GET",
            signal: signal,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + credentials.token
            }
        });
        return await response.json()
    } catch (err) {
        console.log(err)
    }
};

export const LIST_A_FEED = async (gistID, signal) => {
    //console.log(credentials.token)
    try {
        let response = await fetch (`/_v1/api/gists/feed/singlefeed/${gistID}`, {
            method: "GET",
            signal: signal,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        });
        return await response.json()
    } catch (err) {
        console.log(err)
    }
};

export const LIST_A_COMMENT = async (commentId, signal) => {
    //console.log(credentials.token)
    try {
        let response = await fetch (`/_v1/api/gists/feed/singlecomment/${commentId}`, {
            method: "GET",
            signal: signal,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        });
        return await response.json()
    } catch (err) {
        console.log(err)
    }
};

export const LISTBYUSER = async (userId, signal, credentials) => {
   // console.log(username, credentials)
    try {
        let response = await fetch (`/_v1/api/gists/by/${userId}/getCoos`, {
            method: "GET",
            signal,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + credentials.token
            }
        });
        return await response.json()
    }catch (err) {
        console.log(err)
    }
}

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
    try {
        let response = await fetch("/_v1/api/gists/new/" + params.userId, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + credentials.token
            },
            body: post
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

/**comment, userId, gistId */
export const COMMENT = async (params, credentials, gistId, comment) => {
    try {
        let response = await fetch ("/_v1/api/gists/comment/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": 'Bearer ' + credentials.token
            },
            body: JSON.stringify({userId: params.userId, gistId, comment})
        });
        const ress = await response.json()
        return ress
    } catch (err) {
        console.log(err)
}}

export const UNCOMMENT = async (params, credentials, gistId, comment) => {
    try {
        let response = await fetch ("/_v1/api/gists/uncomment/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": 'Bearer ' + credentials.token
            },
            body: JSON.stringify({userId: params.userId, gistId, comment})
        });
        return await response.json()
    } catch (err) {
        console.log(err)
}}