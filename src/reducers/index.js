//entender que sucede 
//actualizar estado

const reducer = (state, action) => {
    switch (action.type) { //evaluar el type (hecho en actions)
        case 'SET_FAVORITE': //caso particular
            return {
                ...state, //estado anterior
                myList: [...state.myList, action.payload] //elemento a cambiar-actualizar
                //estado anterior, objeto a guardar
            }
        default:
            return state //lo retornamos como llego
    }
}

export default reducer;