import authApi from 'api/authApi';
import { AUTH, ALERT } from 'constants/actionTypes';

export const login = (data) => async (dispatch) => {
    try {
        dispatch({ type: ALERT, payload: { loading: true } })

        const res = await authApi.login(data);
        dispatch({
            type: AUTH,
            payload: {
                token: res.accessToken,
                user: res.user,
            }
        })

        console.log('🚀 ~ file: authAction.js ~ line 20 ~ login ~ res', res);
        localStorage.setItem('firstLogin', true);

        dispatch({
            type: ALERT,
            payload: {
                success: res.msg,
            }
        });

    } catch (err) {
        dispatch({
            type: ALERT,
            payload: {
                error: err.response.data.msg,
            }
        });
    }
}

export const refreshToken = () => async (dispatch) => {
    const firstLogin = localStorage.getItem('firstLogin');
    if (firstLogin) {
        dispatch({ type: ALERT, payload: { loading: true } });
        try {
            const res = await authApi.refreshToken();
            dispatch({
                type: AUTH,
                payload: {
                    token: res.accessToken,
                    user: res.user,
                }
            })

            dispatch({ type: ALERT, payload: {} })

        } catch (err) {
            dispatch({
                type: ALERT,
                payload: {
                    error: err.response.data.msg,
                }
            });
        }
    }
}