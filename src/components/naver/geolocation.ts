let hasSetLocation = false;

export function getCurrentLocation(setCurrentMyLocation: (arg: number, arg2: number) => void, gameSearched: boolean) {

    if (navigator.geolocation && gameSearched === false && !hasSetLocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords
                setCurrentMyLocation(latitude, longitude)
                hasSetLocation = true;

            },
            (error) => {
                console.error("geolocation error:", error.message);
            }
        );
    }
}
