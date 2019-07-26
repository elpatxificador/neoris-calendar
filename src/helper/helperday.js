const MONTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function* range(to, from) {
    for(var i = to; i < from; i++) {
        yield i;
    }
}

function isCurrent(current, date) {
    return current.getFullYear() === date.getFullYear() &&
            current.getMonth() === date.getMonth() &&
            current.getDay() === date.getDay();
}

export function getDays(date) {
    if (!date) {
        throw 'ande vas!!';
    }
    let month = date.getMonth();
    let year = date.getFullYear();
    let currentDate = new Date(Date.now());
    
    [...range(1, MONTHS[month])]
    .map((day)=>{
        let date = new Date(year, month, day);
        let current = isCurrent(currentDate, date);
        return {
            date: date,
            isCurrent: current,
            selected: current ? true : false
        }
    })
}