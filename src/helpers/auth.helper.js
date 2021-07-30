import { SIGNOUT } from "../apis/auth/api-auth";


function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // add other defaults here if necessary
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

const AUTH = {
    /**
     * 
     * @param {string} jwt 
     * @param {} cb 
     * This sets the jwt args to the sessionStorage
     * 
     * sessionStorage.setItem('jwt', JSON.stringify(jwt))
     * 
     * cb()
     */
    authenticate(jwt, cb) {
        if(typeof window !== 'undefined'){
            setCookie('jwt', JSON.stringify(jwt),
		    {secure: true, 'max-age': 300600, samesite:"strict"})
        }
        cb()
    },

    isAuthenticated() {
        if(typeof window == 'undefined') {
            return false
        }
        let item = false;
        if(getCookie('jwt')){
         item = JSON.parse(getCookie("jwt"));
            return item;
        }else {
            return item;
        }
    },

    clearJWT(cb) {
        if (typeof window !== 'undefined'){
         deleteCookie("jwt")
	}
        cb()
        SIGNOUT().then(data=> {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC path=/;"
        })
    }

}

export default AUTH
