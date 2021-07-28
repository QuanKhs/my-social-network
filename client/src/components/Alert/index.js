import Loading from 'components/Loading';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const handleToast = (type, msg) => {
    toast(msg, { type: type });
}
export default function Alert() {
    const { alert } = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className="alert">
            {alert.loading && <Loading />}
            {
                alert.error && handleToast(toast.TYPE.ERROR, alert.error)}
            {
                alert.success && handleToast(toast.TYPE.SUCCESS, alert.success)
            }
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}
