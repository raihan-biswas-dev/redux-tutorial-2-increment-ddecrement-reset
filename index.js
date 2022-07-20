// State
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require('redux')

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET'

const initialState = {
    count: 0
}


const incrementAction = () => {
    return {
        type: 'INCREMENT'
    };
};
const decrementAction = () => {
    return {
        type: 'DECREMENT'
    }
}
const resetAction = () => {
    return {
        type: 'RESET'
    }
}


const counterReducr = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }

        default:
            return state;
    }
}







const store = createStore(counterReducr)

store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(incrementAction())
