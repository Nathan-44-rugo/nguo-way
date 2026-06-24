import ShopPage from '../components/ShopPage';

const VICKS_ITEMS = [
  { id: 'shirt-1', name: 'Classic Crew Tee', category: 'tshirt', price: '$25.00', image: '/clothes/T_SHIRT_1-removebg-preview.png' },
  { id: 'shirt-2', name: 'Oversized Graphic Tee', category: 'tshirt', price: '$30.00', image: '/clothes/T_SHIRT_2-removebg-preview.png' },
  { id: 'shirt-6', name: 'Relaxed Fit Everyday', category: 'tshirt', price: '$18.00', image: '/clothes/t_shirt_6-removebg-preview.png' },
  { id: 'trousers-1', name: 'Pleated Wide Leg', category: 'trousers', price: '$45.00', image: '/clothes/trousers_1-removebg-preview.png' },
  { id: 'trousers-2', name: 'Straight Fit Chinos', category: 'trousers', price: '$42.00', image: '/clothes/trousers_2-removebg-preview.png' },
  { id: 'trousers-4', name: 'High-Waist Tailored Pant', category: 'trousers', price: '$80.00', image: '/clothes/trousers_4-removebg-preview.png' },
];

export default function VicksCornerPage() {
  return (
    <ShopPage
      brandName="Vick's Corner"
      brandTagline="Edgy Shirt Wear · Uni-sex"
      brandStyle="vicks"
      items={VICKS_ITEMS}
    />
  );
}
