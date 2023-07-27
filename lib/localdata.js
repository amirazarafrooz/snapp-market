import { data } from "autoprefixer";
import fsPromises from "fs/promises";
import path from "path";

export async function getLocalData() {
  const filePath = path.join(process.cwd(), "./db/db.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return objectData;
}



// Template for using LocalData

// import { getLocalData } from '../lib/localdata';



// const data = await getLocalData();
// const yechizi = data.categories

// export default function Home() { 
//     return (
//   <>
//   ...
//        {yechizi.filter((item)=>
//        (item.id=='330001')).map((item) => (<div className='bg-orange-600'>{item.main}</div>))}

// ...
// )}




// #2 template for read data

// {f.filter((item)=>
//     (item.id=='330001')).map((item) => (<div className='bg-orange-600'>{item.main}-{item.mainFA}-{item.subs.map((item) => (<div>{item}</div>))}</div>))}