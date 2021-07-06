//describir lo que haremos
//pasar un objeto al reducer
//El objeto toma la accion y evalua como lo guarda en el estado

//payload-->carga util
//uso de parentesis
export const setFavorite = payload => ({
    type: 'SET_FAVORITE', //lo que hacemos en SNAKE_CASE
    payload
});