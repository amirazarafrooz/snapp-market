import dynamic from "next/dynamic";
import { getLocalData } from "../../../../lib/localdata";
// import CampaignPage from "@/components/CampaignPage/CampaignPage";
import delay from "@/utils/delay";
import Loading from "../../subcategories/[subcategoriesId]/SubProductsLoading";
const CampaignPage = dynamic(
  async () => await delay(import("@/components/campaigns/CampaignPage/CampaignPage")),
  {
    loading: () => <Loading />,
  }
);

const data = await getLocalData();
const product = data.products;
const campaignRoot = [
  "sunich",
  "Hype",
  "date",
  "freezed",
  "Laundry",
  "discount",
];

export async function getStaticPaths() {
  const paths = campaignRoot.map((item) => {
    return {
      params: {
        campaignsId: `${item}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default function CampaignsDetail({ params }) {
  return (
    <main className="bg-snp-bg-body w-full  flex justify-center">
      <div className="mx-auto w-full mobile:w-[466px] tablet:w-[690px] laptop:w-[914px] desktop:w-[1138px]">
        <CampaignPage campaignsId={params.campaignsId} product={product} />
      </div>
    </main>
  );
}
