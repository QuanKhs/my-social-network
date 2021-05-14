import authApi from 'api/authApi';

export const TYPES = {
    AUTH: 'AUTH',
}

export const login = (data) => async (dispatch) => {
    try {
        dispatch({ type: 'NOTIFY', payload: { loading: true } })
        
        const res = await authApi.login(data);
        dispatch({
            type: 'AUTH',
            payload: {
                token: res.accessToken,
                user: res.user,
            }
        })

        console.log('🚀 ~ file: authAction.js ~ line 11 ~ login ~ res', res);
        localStorage.setItem('firstLogin', true);
        
        dispatch({
            type: 'NOTIFY',
            payload: {
                success: res.msg,
            }
        });

    } catch (err) {
        // dispatch({
        //     type: 'NOTIFY',
        //     payload: {
        //         error: err.response.data.msg,
        //     }
        // });
    }
}