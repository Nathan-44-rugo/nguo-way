import ShopPage from '../components/ShopPage';

const EGOS_ITEMS = [
  { id: 'shirt-2', name: 'Oversized Graphic Tee', category: 'tshirt', price: '$30.00', image: '/clothes/T_SHIRT_2-removebg-preview.png' },
  { id: 'shirt-3', name: 'Luxe Drape Tee', category: 'tshirt', price: '$55.00', image: '/clothes/t_shirt_3-removebg-preview.png' },
  { id: 'shirt-4', name: 'Statement Silhouette', category: 'tshirt', price: '$60.00', image: '/clothes/t_shirt_4-removebg-preview.png' },
  { id: 'trousers-3', name: 'Culture Flare Trousers', category: 'trousers', price: '$75.00', image: '/clothes/trousers_3-removebg-preview.png' },
  { id: 'trousers-4', name: 'High-Waist Tailored Pant', category: 'trousers', price: '$80.00', image: '/clothes/trousers_4-removebg-preview.png' },
  { id: 'trousers-1', name: 'Pleated Wide Leg', category: 'trousers', price: '$45.00', image: '/clothes/trousers_1-removebg-preview.png' },

];

export default function EgosBoutiquePage() {
  return (
    <ShopPage
      brandName="EGO's Boutique"
      brandTagline="For Fashionista · To Silence Rooms"
      brandStyle="egos"
      items={EGOS_ITEMS}
    />
  );
}
