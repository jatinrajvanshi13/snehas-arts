import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductById, getProductsByCategory } from '@/lib/data';
import ProductDetail from '@/components/ProductDetail';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: 'Product Not Found | Ananya Arts',
    };
  }

  return {
    title: `${product.name} | Handcrafted Earrings | Ananya Arts`,
    description: product.description,
  };
}

export function generateStaticParams() {
  const earrings = getProductsByCategory('earrings');
  return earrings.map((product) => ({
    id: product.id,
  }));
}

export default async function EarringDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product || product.category !== 'earrings') {
    notFound();
  }

  return <ProductDetail product={product} />;
}
