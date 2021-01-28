export interface Info {
    actualDate: Date,
    today: {
        year: number
        month: string
        day: number
    },
    start: {
        date: Date
        day: number
        weekday: number
    },
    end: {
        date: Date
        day: number
        weekday: number
    }
}