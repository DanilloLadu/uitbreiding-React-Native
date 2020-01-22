const assetState = {
    selectedAsset: null
};

const reducer = (state = assetState, action) => {
    switch (action.type) {
        case 'GET_ASSET': {
            return {
                ...state,
                selectedAsset: action.payload
            };
        }
        default:
            return state;
    }
};


export default reducer;