export default (state = { areas: [], loading: false}, action) => {
    switch(action.type){
        case "LOADING_AREAS": 
            return {
                ...state,
                loading: true
            }
        case "AREAS_LOADED": 
            return {
                ...state,
                areas: action.payload,
                loading: false
            }
        case "ADDING_AREA":
            return {
                ...state,
                loading: true
            }
        case "AREA_ADDED":
            return {
                ...state,
                areas: [...state.areas, action.payload],
                loading: false 
            }

        case "DELETING_AREA":
            return {
                ...state,
                loading: true
            }
        case "AREA_DELETED":
            return {
                ...state,
                areas: [...state.areas.filter(area => `${area.id}` !== action.payload)],
                loading: false 
            }

        
        default:
            return state
    }
}