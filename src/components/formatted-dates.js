export const currentDay = (day) => {
    if(day === 1){
        return 'Sunday'
    } else if (day === 2) {
        return 'Monday'
    } else if (day === 3) {
        return 'Tuesday'
    } else if (day === 4) {
        return 'Wednesday'
    } else if (day === 5) {
        return 'Thursday'
    } else if (day === 6) {
        return 'Friday'
    } else {
        return 'Saturday'
    }
};

export const currentMonth = (month) => {
    if(month === 1){
        return 'January'
    } else if (month === 2) {
        return 'February'
    } else if (month === 3) {
        return 'March'
    } else if (month === 4) {
        return 'April'
    } else if (month === 5) {
        return 'May'
    } else if (month === 6) {
        return 'June'
    } else if (month === 7) {
        return 'July'
    } else if (month === 8) {
        return 'August'
    } else if (month === 9) {
        return 'September'
    } else if (month === 10) {
        return 'October'
    } else if (month === 11) {
        return 'November'
    } else {
        return 'December'
    }
}

export const publicationDate = (date) => {
    const newDdate = new Date(date);
    const UTCDate = (newDdate.getMonth()+1) + '/'+ newDdate.getDate() + '/' + newDdate.getFullYear();
    return UTCDate
}