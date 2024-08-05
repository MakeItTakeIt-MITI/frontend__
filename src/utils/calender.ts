export const DATES = () => {
    const availableDates = [];

    for (let i = 0; i < 16; i++) {
        const newDate = new Date();
        newDate.setDate(newDate.getDate() + i);
        availableDates.push(newDate);
    }

    const koreanDays = ["일", "월", "화", "수", "목", "금", "토"];

    const formattedDates = availableDates.map((date) => ({
        month: date.getMonth() + 1, // getMonth() is zero-based, so we add 1
        day: date.getDay(), // getDay() returns the day of the week (0-6)
        date: date.getDate(), // getDate() returns the day of the month (1-31)
        dayKorean: koreanDays[date.getDay()], // Map the day to its Korean equivalent
    }));

    console.log(formattedDates);

}