/* Reducer berfungsi untuk memanggil function di action dengan dimana ini logika yang diterapkan */

const initialState = {
    results: [],
    data: {},
    popular: [],
    isLoading: true,
    isError: false
}

function videoReducers(state = initialState, action) {
    switch (action.type) {

        case "ALL_VIDEOS_PENDING":
            return { ...state, isLoading: true, results: action.payload }
        case "ALL_VIDEOS_FULFILLED":
            return { ...state, isLoading: false, results: action.payload.data }
        case "ALL_VIDEOS_REJECTED":
            return { ...state, isLoading: false, isError: true }

        case "GET_VIDEO_PENDING":
            return { ...state, isLoading: true, data: action.payload }
        case "GET_VIDEO_FULFILLED":
            return { ...state, isLoading: false, data: action.payload.data }
        case "GET_VIDEO_REJECTED":
            return { ...state, isLoading: false, isError: true }

        case "SEARCH_PENDING":
            return { ...state, isLoading: true, results: action.payload }
        case "SEARCH_FULFILLED":
            return { ...state, isLoading: false, results: action.payload.data }
        case "SEARCH_REJECTED":
            return { ...state, isLoading: false, isError: true }

        case "POPULAR_PENDING":
            return { ...state, isLoading: true, popular: action.payload }
        case "POPULAR_FULFILLED":
            return { ...state, isLoading: false, popular: action.payload.data }
        case "POPULAR_REJECTED":
            return { ...state, isLoading: false, isError: true }

        default:
            return state
    }
}

export default videoReducers