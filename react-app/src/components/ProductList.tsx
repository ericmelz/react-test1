// @flow 
import * as React from 'react';
import {useEffect, useState} from "react";

export const ProductList = ({category}: {category: string}) => {
    const [products, setProducts] = useState<string[]>([]);

    useEffect(() => {
        console.log('Fetching products in ', category);
        setProducts(['Clothing', 'Household', 'Electronics'])
    }, [category])

    return (
        <div>
        </div>
    );
};