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

export const setName = (username) => {sessionStorage.setItem('name', username)}
export const getName = () => {sessionStorage.getItem('name')}


export const nameIs = () => {
    if (getName()) {
        return true
    } else {
        return false
    }
}

export const logout = () => {
    const deleteTokenKey = sessionStorage.getItem('keyToTheFuture');
    localStorage.removeItem(deleteTokenKey)

    const deleteAdminKey = sessionStorage.getItem('is Admin');
    localStorage.removeItem(deleteAdminKey)
}

//Exercise - Add funtionality to check if token has expired or not