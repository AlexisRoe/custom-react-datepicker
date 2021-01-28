import { Info } from "../interface/Info";

export const whatIsYourDate = (format: string): Info => {
    const actualDate = new Date();
    const actualYear = actualDate.getFullYear();
    const actualMonth = actualDate.getMonth();
    const firstDayOfMonth = new Date(actualYear, actualMonth, 1);
    const lastDayOfMonth = new Date(actualYear, actualMonth + 1, 0);

    return {
        actualDate,
        today: {
            year: actualDate.getFullYear(),
            month: new Intl.DateTimeFormat(format, { month: "long" }).format(actualDate),
            day: actualDate.getDate(),
        },
        start: {
            date: firstDayOfMonth,
            day: firstDayOfMonth.getDate(),
            weekday: firstDayOfMonth.getDay()
        },
        end: {
            date: lastDayOfMonth,
            day: lastDayOfMonth.getDate(),
            weekday: lastDayOfMonth.getDay()
        }
    }
};

export const createDayList = (start: number, end: number): (number | null)[] => {

    const dayList: (number | null)[] = [...new Array(42)].map((day, index) => {
        if (index < start) {
            return null;
        } else if (index > (end + start - 1)) {
            return null;
        } else {
            return (index - start + 1);
        }
    })

    return dayList
}

export const listDaysShort = (format: string): string[] => {

    switch (format) {
        case "de-DE":
            return ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
        default:
            return ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    }
}