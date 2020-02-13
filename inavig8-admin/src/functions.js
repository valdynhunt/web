export function compareArrays(arr1, arr2) {
    const arr3 = [];

    if (arr1.length > 0 && arr2.length > 0) {

        arr1.forEach(
            (a1) => arr2.forEach((a2) => {
                if (a1.location_id === a2.location_id) {
                    arr3.push(a2);
                }
            }
        ));
    }

    return arr3;
}

export function createTimeStamp() {
    let date = new Date();
    let mon = date.getMonth() + 1;

    if (mon < 10) {
        mon = "0" + mon;
    }

    let day = date.getDate();

    if (day < 10) {
        day = "0" + day;
    }

    let yr = date.getFullYear();
    let hrs = date.getHours();
    let min = date.getMinutes();

    return mon + "" + day + "" + yr + "-" + hrs + "" + min + "";
}
