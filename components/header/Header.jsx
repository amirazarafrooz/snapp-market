import React from 'react';
import { HeaderSelector } from './HeaderSelector';
import { getLocalData } from '@/lib/localdata';


const data = await getLocalData();
const menu = data.categories
const search = data.products

export const Header =  () => {
    


    return (
        <> 
        <HeaderSelector categoryItems={menu} searchItem={search} />
        </>
        
    );
};

