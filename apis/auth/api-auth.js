const SIGNIN = async function (user) {
    try {
        let response = await fetch("/_v1/auth/signin/", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(user)
        });
        return await response.json()
    } catch (err) {
        console.log(err)
    }
};

const SIGNOUT = async function () {
    try {
        let response = await fetch("/_v1/auth/signout", {
            method: "GET"
        });
        return await response.json()
    } catch (err) {
        console.log(err)
    }
};

export {SIGNIN, SIGNOUT}