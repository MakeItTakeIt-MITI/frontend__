export function calculateGameDuration(startTime: string, endTime: string) {
    const toMinutes = (time: string) => {
        if (!time) {
            console.log("error");
        }

        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    };

    const startMinutes = toMinutes(startTime);
    const endMinutes = toMinutes(endTime);

    if (endMinutes >= startMinutes) {
        // same day
        return endMinutes - startMinutes;
    } else {
        // after midnight
        return endMinutes + 1440 - startMinutes;
    }
}