import { getLocalData } from "@/lib/localdata";
import { CategoryListDesk } from "./CategoryListDesk";
import { CategoryListTab } from "./CategoryListTab";
import { CategoryCarousel } from "./CategoryCarousel";


const data = await getLocalData();
const category = data.categories;

export const CategoryPage = ({ categoryName }) => {
  
  return (
    <div className="w-full laptop:flex relative">
      {category
        .filter((item) => item.main === categoryName)
        .map((item) => (
          <CategoryListDesk list={item.subs} />
        ))}
      {category
        .filter((item) => item.main === categoryName)
        .map((item) => (
          <CategoryListTab list={item.subs} title={item.mainFA}/>
        ))}
        {category.filter(item => item.main === categoryName)
                  .map(item => {
                    return <CategoryCarousel lists={item.subs} />
                  })
        
        }
      {/* <CategoryCarousel products={products} categoryName={categoryName}/> */}
    </div>
  );
};
