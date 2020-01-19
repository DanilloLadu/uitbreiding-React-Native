const ticketState = {
    newTicket: null,
    upVotedTicket:null
};

const reducer = (state = ticketState, action) => {
    switch (action.type) {
        case 'CREATE_TICKET': {
            return {
                ...state,
                newTicket: action.payload
            };
        }
        case 'UPVOTED_TICKET': {
            return {
                ...state,
                upVotedTicket: action.payload
            };
        }
        default:
            return state;
    }
};


export default reducer;
