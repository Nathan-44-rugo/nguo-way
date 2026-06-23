import ShopPage from '../components/ShopPage';

const JANS_ITEMS = [
  { id: 'shirt-5', name: 'Vintage Graphic Tee', category: 'tshirt', price: '$20.00', image: '/clothes/t_shirt_5-removebg-preview.png' },
  { id: 'shirt-6', name: 'Relaxed Fit Everyday', category: 'tshirt', price: '$18.00', image: '/clothes/t_shirt_6-removebg-preview.png' },
  { id: 'trousers-5', name: 'Camo Cargo Pants', category: 'trousers', price: '$55.00', image: '/clothes/trousers_5-removebg-preview.png' },
  { id: 'trousers-6', name: 'Washed Baggy Denim', category: 'trousers', price: '$65.00', image: '/clothes/trousers_6-removebg-preview.png' },
];

export default function JansShopPage() {
  return (
    <ShopPage
      brandName="Jan's Shop"
      brandTagline="Family Wear"
      brandStyle="jans"
      items={JANS_ITEMS}
    />
  );
}
