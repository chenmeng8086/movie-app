const defaultState = {
    name: 'reducer-b'
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'B-changeName':
            state.name = action.value
            break
    }
    return { ...state }
}