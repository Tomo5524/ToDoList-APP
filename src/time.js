const getTime = (time) => {
    
    const timeSplit = time.split(':');
    let hours;
    let minutes;
    let meridian;
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
        meridian = 'PM';
        hours -= 12;
    } else if (hours < 12) {
        meridian = 'AM';
        if (hours == 0) {
        hours = 12;
        }
    } else {
        meridian = 'PM';
    }


    const res = hours + ':' + minutes + ' ' + meridian;
    return res
}

export default getTime
