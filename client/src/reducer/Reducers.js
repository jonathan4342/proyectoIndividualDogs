const inicialState = {
    dogs: [],
    filterDogs: [],
    dogActivo: null,
    searchDog: '',
    temperamentos: []

}

function rootReducer(state = inicialState, action) {

    switch (action.type) {
        case 'GET_RAZA':
            return {
                ...state,
                dogs: action.payload,
                    filterDogs: action.payload
            }
            case 'GET_RAZAID':
                return {
                    ...state,
                    dogActivo: action.payload
                }
                case 'CLEAN_ACTIVE_DOG':
                    return {
                        ...state,
                        dogActivo: null
                    }
                    case 'SEARCH_BY_NAME':
                        return {
                            ...state,
                            searchDog: action.payload
                            // dogs:state.dogs.filter(el=>(el.name.toLowerCase().includes(action.payload.toLowerCase())))
                        }
                        case 'ORDER_AZ':
                            return {
                                ...state,
                                filterDogs: [...state.filterDogs.reverse()]
                            }
                            case 'ORDEN_CREADOS':
                                const filterCreate = action.payload === 'Db' ? state.dogs.filter(el => el.createdInDb) :
                                    action.payload === 'Api' ? state.dogs.filter(el => !el.createdInDb) : [...state.dogs]
                                return {
                                    ...state,
                                    filterDogs: filterCreate
                                }
                                case 'ORDEN_PESO':
                                    return {
                                        ...state,
                                        filterDogs: [...state.dogs.sort((a, b) => {
                                            let pesoA = a.peso.replace("NaN", "").split("-")
                                            let pesoB = b.peso.replace("NaN", "").split("-");
                                            if (pesoA.length === 1) {
                                                pesoA = (Number(pesoA[0]))
                                            } else {
                                                pesoA = (Number(pesoA[0]) + Number(pesoA[1])) / 2;
                                            }

                                            if (pesoB.length === 1) {
                                                pesoB = (Number(pesoB[0]))
                                            } else {
                                                pesoB = (Number(pesoB[0]) + Number(pesoB[1])) / 2;
                                            }

                                            return action.payload === "mayor" ? pesoB - pesoA : pesoA - pesoB;
                                        })]
                                    }
                                    case 'TEMPERAMENTOS':
                                        return {
                                            ...state,
                                            temperamentos: action.payload
                                        }
                                        case 'FILTER_TEMP':
                                            return {
                                                ...state,
                                                filterDogs: state.dogs.filter(el => {
                                                    if(action.payload){
                                                        if(el.temperamento){
                                                            return el.temperamento?.toLowerCase().includes(action.payload.toLowerCase())
                                                        }
                                                        else if(el.temperamentos){
                                                           let temp= el.temperamentos.map(el=>el.name)
                                                           return temp.includes(action.payload)
                                                        }
                                                    }
                                                    else{
                                                        return true
                                                    }
                                                    
                                                })
                                            }
                                            default:
                                                return state;
    }


}

export default rootReducer;