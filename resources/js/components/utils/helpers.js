export const selectOptionsMap = (collection, value, label, optional = {}) => {
    let options = [];

    Object.keys(collection).map(c => {
        let option = { value: collection[c][value], label: collection[c][label] };

        if (Object.keys(optional).length > 0) {
            let valueArr = optional.value.split('.');
            let col = collection[c];

            for (let i = 0; i < valueArr.length; i++) {
                col = col[valueArr[i]] ? col[valueArr[i]] : '';
            }

            option[optional.label] = col;
        }

        options.push(option);
    });

    return options;
};

export const asset = (url) => {
    return `/assets${url}`;
};

export const parseQueryString = () => {
    let str = window.location.search;
    let objURL = {};

    str.replace(
        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
        function ($0, $1, $2, $3) {
            objURL[$1] = $3;
        }
    );

    return objURL;
};

export const recursiveQueryToObject = () => {

    const helper = (keys, value, nth) => {
        const key = keys.shift()
        if (!keys.length) return { [key]: value }
        else return { [key]: { ...nth[key], ...helper(keys, value, nth[key] || {}) } }
    }

    return window.location.search.slice(1).split('&').reduce((result, entry) => {
        const [k, value] = entry.split('=')
        const keys = k.split('.')
        const key = keys.shift()
        result[key] = keys.length ? { ...result[key], ...helper(keys, value, result[key] || {}) } : value
        return result
    }, {})

}

export const objectToFormData = (obj, form, namespace) => {
    let fd = form || new FormData();
    let formKey;

    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {

            if (namespace) {
                formKey = namespace + '[' + property + ']';
            } else {
                formKey = property;
            }

            // if the property is an object, but not a File,
            // use recursivity.
            if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
                objectToFormData(obj[property], fd, property);
            } else {
                // if it's a string or a File object
                fd.append(formKey, obj[property]);
            }
        }
    }

    return fd;
};

export const isEmpty = (value) => {
    if (value === null || value === false) {
        return true;
    }
    if (Array.isArray(value) && value.length === 0) {
        return true;
    }

    if (typeof value == Object && Object.keys(value).length === 0) {
        return true;
    }

    return false;
}

export const isRequiredField = (property) => {
    if (typeof property == "string" && property != "undefined" && property.toLowerCase().includes("required")) {
        return true;
    }

    return false;
}

export const isMatch = (value, search) => {
    return value.toLowerCase().includes(search);
}

export const euroToCents = (euro) => {
    return Math.round(euro * 100)
}

export const centsToEuro = (cents) => {
    return cents / 100;
}

export const pricePercentage = (cents, percentage) => {
    return Math.round(cents * percentage / 100);
}