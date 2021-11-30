
initalState = {
    coordinates: {
        latitude: null,
        longitude: null,
        location: null,
    }
}

const coordinatesReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'SET_COORDINATES':
            return {
                ...state,
                coordinates: action.payload,
            }
        default:
            return state
    }
}

export default coordinatesReducer;