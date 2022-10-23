import React from 'react';

export default function Seperator({ children, symbol }) {
    let nonEmpty = children.filter(el => el);
    let length = nonEmpty.length;
    return nonEmpty.filter(el => el).map((child, key) => (
        <React.Fragment key={key}>
            {child}
            {(key != length - 1) && symbol}
        </React.Fragment>))

}