import { CategoryPage } from "@/components/Category/CategoryPage";
import { getLocalData } from "@/lib/localdata";
import { SubCategoryPage} from "@/components/Category/SubCategoryPage";
import { AboutSubCategory } from "@/components/captions/AboutSubCategory";

const data = await getLocalData();
const category = data.subcategories;


  export async function getStaticPaths(){
    const paths= category.map((item)=>{
      return {
        params: {
          subcategoriesId:`${item.main}`,
        },
        
      }
    })

    return {
      paths,
      fallback:false,
    }
  }
export default function subCategoriesDetail({ params }) {
  
    return (
      <main className="bg-snp-bg-body w-full  flex justify-center">
        <div className="mx-auto w-full mobile:w-144 tablet:w-192  laptop:w-248 desktop:w-300">

        <SubCategoryPage mainFilterParam={params.subcategoriesId} />
        <AboutSubCategory subId={params.subcategoriesId}/>
        </div>
      </main>
    );
  
  

    
  
}
