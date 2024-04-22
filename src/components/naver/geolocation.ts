export function getCurrentLocation(setCurrentMyLocation: (arg: number, arg2: number) => void, gameSearched: boolean) {
    if (navigator.geolocation && gameSearched === false) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords
                setCurrentMyLocation(latitude, longitude)
                console.log('geolocation stored', longitude, latitude);

            },
            (error) => {
                console.error("geolocation error:", error.message);
            }
        );
    }
}
