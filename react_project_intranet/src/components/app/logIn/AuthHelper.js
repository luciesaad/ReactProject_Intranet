export const setToken = (token) => {
    localStorage.setItem('keyToTheFuture', token)
    console.log(token)
}

export const getToken = () => {
    return localStorage.getItem('keyToTheFuture')
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