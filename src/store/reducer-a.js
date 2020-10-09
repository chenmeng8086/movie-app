const defaultState = {
    name: 'reducer-a'
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'A-changeName':
            state.name = action.value
            break
    }
    return { ...state }
}