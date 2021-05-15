const initialState = {
    name: '',
    numberOfPeople: 0,
}

export const globalReducer = (state = initialState, action) => {
    switch(action.type) {
        default: {
            return state;
        }
    }
}