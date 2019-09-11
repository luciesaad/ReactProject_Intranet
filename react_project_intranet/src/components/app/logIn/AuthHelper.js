export const setToken = (token) => {
    sessionStorage.setItem('keyToTheFuture', token)
    console.log(token)
}

export const getToken = () => {
    return sessionStorage.getItem('keyToTheFuture')
}

export const isLoggedIn = () => {
    if (getToken()) {
        return true
    } else {
        return false
    }
}

export const logout = () => {
    localStorage.removeItem('sometokenname')
}

//Exercise - Add funtionality to check if token has expired or not