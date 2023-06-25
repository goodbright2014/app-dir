import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import ThreeItemGridItem from './three-items-gid-item';

// function ThreeItemGridItem({
//   item,
//   size,
//   background
// }: {
//   item: Product;
//   size: 'full' | 'half';
//   background: 'white' | 'pink' | 'purple' | 'black';
// }) {
//   let div_class = size === 'full' ? 'lg:col-span-4 lg:row-span-2' : 'lg:col-span-2 lg:row-span-1';
//   div_class = div_class + ' ' + 'animate-fadeIn';

//   return (
//     <div className={div_class}>
//       <Link className="block h-full" href={`/product/${item.handle}`}>
//         <GridTileImage
//           src={item.featuredImage.url}
//           width={size === 'full' ? 1080 : 540}
//           height={size === 'full' ? 1080 : 540}
//           priority={true}
//           background={background}
//           alt={item.title}
//           labels={{
//             title: item.title as string,
//             amount: item.priceRange.maxVariantPrice.amount,
//             currencyCode: item.priceRange.maxVariantPrice.currencyCode
//           }}
//         />
//       </Link>
//     </div>
//   );
// }

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts('hidden-homepage-featured-items');

  //if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct]: Product[] = homepageItems;

  return (
    <section
      className=" h-screen w-full  sm:grid sm:grid-cols-6 sm:grid-rows-2"
      data-testid="homepage-products"
    >
      <ThreeItemGridItem size="full" item={firstProduct!} background="purple" />
      <ThreeItemGridItem size="half" item={secondProduct!} background="black" />
    </section>
  );
}
