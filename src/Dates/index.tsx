import { Info, calendar } from "../interface/";

export const whatIsYourDate = (format: string, actualDate: Date): Info => {
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


export const createTableHeader = (format: string): string[] => {

    switch (format) {
        case "de-DE":
            return ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
        default:
            return ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    }
}

// works only with american calendar (starting on sunday)
export const createTableBody = (start: number, end: number): calendar => {

    const date = (index: number) => {
        if (index < start) {
            return null;
        } else if (index > (end + start - 1)) {
            return null;
        } else {
            return (index - start + 1);
        }
    }

    const result: any = {};

    for (let j = 0; j < 6; j++) {
        const row: (number | null)[] = [];
        for (let i = (j * 7); i < ((j * 7) + 7); i++) {
            row.push(date(i))
        }
        result[`row0${j + 1}`] = row;
    }

    return result
}