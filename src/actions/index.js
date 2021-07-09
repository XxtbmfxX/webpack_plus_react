//describir lo que haremos
//pasar un objeto al reducer
//El objeto toma la accion y evalua como lo guarda en el estado

//payload-->carga util

export const actions = {
    setFavorite: 'SET_FAVORITE',
    deleteFavorite: 'DELETE_FAVORITE',
    loginRequest: 'LOGIN_REQUEST',
    logoutRequest: 'LOGOUT_REQUEST',
    registerRequest: 'REGISTER_REQUEST'
}

export const setFavorite = payload => ({
    type: actions.setFavorite, //lo que hacemos en SNAKE_CASE
    payload
});

//funciones que retornan un objeto

export const deleteFavorite = payload => ({
    type: actions.deleteFavorite,
    payload,
})

export const loginRequest = payload => ({
    type: actions.loginRequest,
    payload,
})

export const logoutRequest = payload => ({
    type: actions.logoutRequest,
    payload,
})

export const registerRequest = payload => ({
    type: actions.registerRequest,
    payload,
})