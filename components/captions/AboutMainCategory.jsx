import { getLocalData } from "@/lib/localdata";

const data = await getLocalData();
const caption = data.captions;

export const AboutMainCategory = async ({ main }) => {

  const hasCaption=caption.filter((item) => item.main == main)
  .map((item) =>item.text.map((captions) =>{captions.title}))[0].length

  return (
    <>
     {hasCaption>0 && <div className=" flex justify-center px-1 w-full ">
          {caption
            .filter((item) => item.main == main)
            .map((item) => {
              return (
                 <div className=" bg-white w-full h-auto pt-4 pb-6 px-3.5 border border-solid border-gray-300 border-opacity-50 rounded font-iransans">
                  {item.text.map((captions) => (
                    <>
                      <h3 className="font-iransansb text-lg">
                        {captions.title}
                      </h3>
                      <p className="whitespace-pre-line text-sm text-gray-500">{captions.caption}</p>
                    </>
                  ))}
                </div>
              );
            })}
        
      </div>
   } </>
  );

};