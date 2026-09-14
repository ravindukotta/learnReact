export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

export function filterInStock(products: Product[]): Product[] {
  return products.filter((product) => product.inStock);
}
