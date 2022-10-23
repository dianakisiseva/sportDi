import moment from "moment"

export const format_date = (date) => {
    var momentDate = moment(date);

    if (momentDate.isValid() == false){
        return null;
    }

    return momentDate.format("DD/MM/YYYY");
}

export const format_date_time = (date) => {
    var momentDate = moment(date);

    if (momentDate.isValid() == false){
        return null;
    }

    return moment(date).format("DD/MM/YYYY HH:mm:ss");
}