//describir lo que haremos
//pasar un objeto al reducer
//El objeto toma la accion y evalua como lo guarda en el estado

//payload-->carga util

export const actions = {
    setFavorite: 'SET_FAVORITE',
    deleteFavorite: 'DELETE_FAVORITE'
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