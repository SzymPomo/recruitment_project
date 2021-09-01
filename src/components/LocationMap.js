import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";
import {useCallback} from 'react';

function LocationMap({location}) {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyAyNmek2-MGWWo18tNwlZfj0MZ42Si4rrs'
    });


    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
    }, []);

    if (!location) {
        return null;
    }

    const center = {
        lat: location.latitude || 0,
        lng: location.longitude || 0
    };

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={{width: '100%', height: '300px'}}
            center={center}
            zoom={10}
            onLoad={onLoad}
        >
        </GoogleMap>
    ) : <></>
}

export default LocationMap;