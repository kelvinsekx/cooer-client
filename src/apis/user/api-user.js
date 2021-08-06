import {baseUrl} from "./../../helpers/gen.helpers"

export const CREATE = async (user) => {
    try {
        let response = await fetch(
            `${baseUrl}/_v1/api/users/`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            credentials: "omit",
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch(err){
        console.log(err)
    }
}

export const LIST = async () => {
    try {
        let response = await fetch(
            `${baseUrl}/graphql`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
	   body: JSON.stringify({
	   	query: `
		   query{ allPeople(limit: 2){
                username
                photo 
                bio
            }}
		   `
	   })
        })
        return await response.json()
    } catch(err){
        console.log(err)
    }
}

export const UPDATE = async (userId, token, user) => {
    try {
        let response = await fetch(
            `${baseUrl}/_v1/api/users/${userId}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: user
        })
        return await response.json()
    } catch(err){
        console.log(err)
    }
}

export const READ = async (queryDescr, param, token, signal) => {
    try {
        let response = await fetch(
            `${baseUrl}/graphql`, {
            method: "POST",
            signal,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: `
                query {
                    person(userName: "${param.userId}", token: "${token.token}") {
                      ${queryDescr}
                    }
                  }`
            })
        })
        return await response.json()
    } catch(err){
        console.log(err)
    }
}

export const FOLLOW = async (params, credentials, followId, ID) =>{
    try {
        let response = await fetch(`${baseUrl}/_v1/api/users/${params.userId}/follow`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ credentials.token
            },
            body: JSON.stringify({userId: params.userId, followId, ID})
        })
        return await response.json()
    }catch (err){
        console.log(err)
    }
}

export const UNFOLLOW = async (params, credentials, unfollowId, ID) =>{
    try {
        let response = await fetch(`${baseUrl}/_v1/api/users/${params.userId}/unfollow`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ credentials.token
            },
            body: JSON.stringify({userId: params.userId, unfollowId, ID})
        })
        return await response.json()
    }catch (err){
        console.log(err)
    }
}
