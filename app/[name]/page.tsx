import { redirect } from 'next/navigation';

const SHOP_ROUTES: Record<string, string> = {
  'vicks': '/vicks-corner',
  'juana': '/vicks-corner',
  'egos': '/egos-boutique',
  'dembe': '/egos-boutique',
  'jans': '/jans-shop',
  'sean': '/jans-shop',
};

interface PageProps {
  params: Promise<{ name: string }>;
}

export default async function CatchAllShopRedirect({ params }: PageProps) {
  const { name } = await params;
  const target = SHOP_ROUTES[name.toLowerCase()];
  if (target) {
    redirect(target);
  }
  redirect('/');
}