import Loading from 'components/Loading';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const handleToast = (type, msg) => {
    toast(msg, { type: type });
}
export default function Notify() {
    const { notify } = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className="notify">
            {notify.loading && <Loading />}
            {
                notify.error && handleToast(toast.TYPE.ERROR, notify.error)}
            {
                notify.success && handleToast(toast.TYPE.SUCCESS, notify.success)
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
