const roomState = {
    selectedRoom: null,
};

const reducer = (state = roomState, action) => {
    switch (action.type) {
        case 'GET_ROOM': {
            return {
                ...state,
                selectedRoom: action.payload
            };
        }
        default:
            return state;
    }
};






export default reducer;
