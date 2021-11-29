import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

const cardReducers = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const {product} = action;
            return [...state, product]

        case REMOVE_PRODUCT:
            const productName = action.product.name
            const newState = state.filter((item) => item.name !== productName);
            return newState;
            
        default:
            return state    
    };
};

export default cardReducers;