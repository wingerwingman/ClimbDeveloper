export default (state = { climb: [], loading: false}, action) => {
    switch(action.type){
        case "LOADING_CLIMBS": 
            return {
                ...state,
                loading: true
            }
        case "CLIMBS_LOADED": 
            return {
                ...state,
                climbs: action.payload,
                loading: false
            }
        case "ADDING_CLIMB":
            return {
                ...state,
                loading: true
            }
        case "CLIMB_ADDED":
            return {
                ...state,
                climbS: [...state.climbs, action.payload],
                loading: false 
            }

        case "DELETING_CLIMB":
            return {
                ...state,
                loading: true
            }
        case "CLIMB_DELETED":
            return {
                ...state,
                climbS: [...state.climbs.filter(climb => `${climb.id}` !== action.payload)],
                loading: false 
            }

        
        default:
            return state
    }
}