const initialState = {
    formData: {}
};

const FormReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FORM_DATA':
            return {
                ...state,
                formData: action.payload
            }
        default:
            return state
    }
};

export default FormReducer