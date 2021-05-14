export const TYPES = {
    AUTH: 'AUTH',
}

export const login = (data) => (dispatch) => {
    try {
        // console.log('🚀 ~ file: authAction.js ~ line 6 ~ login ~ data', data);
        dispatch({ type: 'NOTIFY', payload: { loading: true } })

    } catch (err) {

    }
}