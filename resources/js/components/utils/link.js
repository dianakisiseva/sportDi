import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

export const Link = ({href, url, activeClass, method, children, className, data}) => {
    const activeClassNames = url && url.current === href.replace(/^\/|\/$/g, "")  ? activeClass ? activeClass : 'active' : '';
    const classNames = className ? className : '';
    let query_params = '';

    if ((!method || method.toLowerCase() === 'get') && !!data) {
        query_params = `?${Object.keys(data).map(d => `${d}=${data[d]}`).join("&")}`;
    }

    return <InertiaLink
                href={`${href}${query_params}`}
                className={`${classNames} ${activeClassNames}`}
                method={method ? method : 'get'}
                data={!!query_params ? {} : data}
            >{children}</InertiaLink>
};
