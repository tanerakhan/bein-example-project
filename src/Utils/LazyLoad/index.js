import React from 'react'
import LazyLoad from 'react-lazyload';

export default function LazyImage(props) {
    const { children } = props;
    return (
        <LazyLoad height={200}>
            { children }
        </LazyLoad>
    )
}
