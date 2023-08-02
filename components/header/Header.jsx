import React from 'react';
import { HeaderSelector } from './HeaderSelector';
import { getLocalData } from '@/lib/localdata';


const data = await getLocalData();
const menu = data.categories

console.log( 'last2', menu);
export const Header =  () => {
    


    return (
        <> 
        <HeaderSelector categoryItems={menu} />
        </>
        
    );
};

