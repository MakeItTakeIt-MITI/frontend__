export function getCurrentLocation(setCurrentMyLocation: (arg: number, arg2: number) => void) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords
                setCurrentMyLocation(latitude, longitude)
                console.log('geolocation stored');

            },
            (error) => {
                console.error("geolocation error:", error.message);
            }
        );
    } else {
        console.error("현재 위치를 찾을 수 없습니다.");
    }
}
