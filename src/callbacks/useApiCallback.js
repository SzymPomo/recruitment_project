import {useState, useEffect, useCallback} from "react";
import {toast} from "react-toastify";

const useApiCallback = (callback, callImmediately = false)  => {
    const apiUrl = 'https://api.ipstack.com/';
    const apiKey = '9351a09e6cf07263f02e4d6f0b17227b';

    const [data, updateData] = useState({});

    const execute = useCallback(async (newCallback) => {
        const fetchUrl = apiUrl + newCallback + '?access_key=' + apiKey;

        return await fetch(fetchUrl,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
                    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
                }
            })
            .then(response => response.json())
            .then((data) => {
                if (!data.error && data.latitude && data.longitude) {
                    updateData(data);
                } else {
                    if (data.error) {
                        toast.error(data.error.info);
                    } else {
                        toast.info('Location not found')
                    }
                }


                return data;
            });
    });


    useEffect(() => {
        if (callImmediately) {
            execute(callback);
        }
    }, [callback]);

    return {data, execute};
};

export default useApiCallback;