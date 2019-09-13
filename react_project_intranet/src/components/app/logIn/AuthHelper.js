export const setToken = (token) => {
    sessionStorage.setItem('keyToTheFuture', token)
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

export const setAdmin = (admin) => {sessionStorage.setItem('is Admin', admin)}
export const getAdmin = () => {sessionStorage.getItem('is Admin')}


export const isAdmin = () => {
    if (getAdmin()) {
        return true
    } else {
        return false
    }
}

export const logout = () => {
    localStorage.removeItem('sometokenname')
}

//Exercise - Add funtionality to check if token has expired or not