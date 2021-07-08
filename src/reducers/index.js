//entender que sucede 
//actualizar estado

import { actions } from "../actions";

const reducer = (state, action) => {
    switch (action.type) { //evaluar el type (hecho en actions)

        case actions.setFavorite: //caso particular
            const exist = state.myList.find(item => item.id === action.payload.id)
            if (exist) {
                return { ...state }
            }
            return {
                ...state, //estado anterior
                myList: [...state.myList, action.payload] //elemento a cambiar-actualizar
                //estado anterior, objeto a guardar
            }

        case actions.deleteFavorite:
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }
        default:
            return state //lo retornamos como llego
    }
}


export default reducer;