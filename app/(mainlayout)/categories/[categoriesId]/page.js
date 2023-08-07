import { CategoryPage } from "@/components/Category/CategoryPage";
import { getLocalData } from "@/lib/localdata";
import { SubCategoryPage} from "@/components/Category/SubCategoryPage";

const data = await getLocalData();
const category = data.categories;


  export async function getStaticPaths(){
    const paths= category.map((item)=>{
      return {
        params: {
          categoriesId:`${item.main}`,
        },
        
      }
    })

    return {
      paths,
      fallback:false,
    }
  }
export default function CategoriesDetail({ params }) {
  
    return (
      <main className="bg-snp-bg-body w-full  flex justify-center">
        <div className="mx-auto w-full mobile:w-144 tablet:w-192  laptop:w-248 desktop:w-300 p-2">

          <CategoryPage categoryName={params.categoriesId} />
        </div>
      </main>
    );
  
  

    
  
}
