// reducer.js
export const initialState = {
    total: 0,
    products: []
}

const StoreReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                products: action.payload
            };
        case "REMOVE":
            return {
                ...state,
                products: action.payload
            };
        case "UPDATE_PRICE":
            return {
                ...state,
                total: action.payload
            };
        default:
            throw new Error('Cannot match case in reducer');
    }
};

export default StoreReducer;
