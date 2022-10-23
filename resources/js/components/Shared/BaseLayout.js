import React, { useEffect, useState } from 'react';

import { useToasts } from 'react-toast-notifications';

export default function BaseLayout(props){
    const {addToast} = useToasts();
    const [prevFlash, setPrevFlash] = useState({});
    let {flash} = props;

    useEffect(() => {
        let toastMessage = localStorage.getItem('reload-toast');
        localStorage.removeItem('reload-toast');

        if (!toastMessage){
            return;
        }

        try {
            toastMessage = JSON.parse(toastMessage);
        } catch (error) {
            return;
        }

        addToast(toastMessage.message, toastMessage.params);
    }, [])
    useEffect(() => {
        if (!flash || flash == prevFlash){
            return;
        }
        if (flash.success){
            addToast(flash.success, {
                appearance: "success",
                autoDismiss: true
            });
        }

        if (flash.error){
            addToast(flash.error, {
                appearance: "error",
                autoDismiss: true
            });
        }

        setPrevFlash({...flash});
    }, [flash])

    return props.children;


}