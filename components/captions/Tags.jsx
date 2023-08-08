'use client'
import Link from "next/link";
import React, { useEffect,useState } from "react";


export const Tags = ({ subId, product,subcategory}) => {
  const subBrands = product.filter(
    (item) =>
      item.category.sub ==
      subcategory.filter((item) => item.main == subId)[0].mainFA
  );

  const subCat = subcategory.filter(
    (item) =>
      item.main == subId)[0].mainFA
  ;

  const [uniqueBrands,setUniqueBrands]= useState([]);
const [uniqueKinds,setUniqueKinds]= useState([]);

useEffect (()=>{
    const resultBrand=[...new Set(subBrands.map((item) => item.brand ))]
    setUniqueBrands(resultBrand);


    const fResultKind=subBrands.map((item) =>item.tags)
    const sResultKind=[]
for (let index = 0; index < fResultKind.length; index++) {
    for (let j = 0; j < 3; j++) {
        if(fResultKind[index]?.map((item)=>item)[j]!=undefined)
        sResultKind.push(fResultKind[index]?.map((item)=>item)[j])   
    }
    const resultKind=[...new Set(sResultKind)]
    console.log(resultKind,'resultKind');
    setUniqueKinds(resultKind);   
}
  },[])

  return (
    <div className=" flex justify-center px-1 mt-4 w-full ">
    <div className="flex flex-col font-iransans bg-white w-full h-auto pt-4 pb-6 px-3.5 border border-solid border-gray-300 border-opacity-50 rounded ">
      <div >
        <h3 className="font-iransansb text-lg">انواع {subCat}</h3>
        <div className="flex flex-wrap">
          {uniqueKinds.map((item,id) => (
            <Link href={'/'} key={id} className="w-1/2 tablet:w-1/4 py-2 text-sm text-snp-secondary">{item} </Link>))} 
          
        </div>
        
      </div>
      <div>
        <h3 className="font-iransansb  text-lg">برندهای {subCat}</h3>
        <div className="flex flex-wrap">
          {uniqueBrands.map((item,id) => 
          <Link href={'/'} key={id} className="w-1/2 tablet:w-1/4 py-2 text-sm text-snp-secondary">{item} </Link>)} 
        </div>
      </div>
    </div>
    </div>
  );
};
