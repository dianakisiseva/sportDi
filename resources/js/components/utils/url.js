export const updateQueryParams = (params) => {
    let urlParams = new URLSearchParams(window.location.search)

    for (let index in params){
        urlParams.set(index, params[index])
    }

    let url = window.location.href.split('?')[0] +  "?" + urlParams.toString();

    history.replaceState("", "", url)
}

export const getQueryParam = (index) => {
    let urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(index)
}

