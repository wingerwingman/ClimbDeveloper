export const getAreas = () => {
    return dispatch => {
        dispatch({type: "LOADING_AREAS"})
        return fetch('/areas')
        .then(res => res.json())
        .then(areas => dispatch({type: "AREAS_LOADED", payload: areas}))
    }
}

export const addArea = (area) => {
    return (dispatch) => {
        dispatch({type: "ADDING_AREA"})
        fetch('/areas', {
            method: "POST",
            body: JSON.stringify(area), 
            headers:{
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(area => dispatch({type: "AREA_ADDED", payload: area}))
    }
}

export const editArea = (area) => {

    return (dispatch) => {
        dispatch({type: "EDITING_AREA"})
        fetch('/areas', {
            method: "POST",
            body: JSON.stringify(area), 
            headers:{
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(area => dispatch({type: "AREA_EDITED", payload: area}))
    }
}

export const deleteArea = (id) => {
    return (dispatch) => {
        dispatch({type: "DELETING_AREA"})
        fetch(`/areas/${id}`, {
            method: "DELETE",
            headers:{
                'Content-type': 'application/json'
            }
        })
        .then(() => dispatch({type: "AREA_DELETED", payload: id}))
    }
}