const inicialState={
    dogs:[],
    dogActivo:null,
    searchDog:''
}

function rootReducer(state=inicialState,action){
    
    switch (action.type) {
        case 'GET_RAZA':
            return {
                ...state,
                dogs:action.payload   
            }
        case 'GET_RAZAID':
            return{
                ...state,
                dogActivo:action.payload
            }
        case 'CLEAN_ACTIVE_DOG':
            return {
                ...state,
                dogActivo:null
            }
        case 'SEARCH_BY_NAME':
            return {
                ...state,
                searchDog:action.payload
                // dogs:state.dogs.filter(el=>(el.name.toLowerCase().includes(action.payload.toLowerCase())))
            }
        default:
            return state;
    }


}

export default rootReducer;