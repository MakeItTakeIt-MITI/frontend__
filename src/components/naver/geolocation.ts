export const getGeolocation = () => {
    if (navigator.geolocation) { // GPS를 지원하면
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords); // lat lng을 통해 좌표값을 얻어옵니다.
        }, function (error) {
            console.error(error);
        }, {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: Infinity
        });
    } else {
        alert('GPS not available on current browser');
    }
}
