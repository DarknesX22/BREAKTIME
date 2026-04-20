export type OrderStatus = 'Packed' | 'New Order' | 'Order Pending' | 'In Stock' | 'Out of Stock' | 'Low Stock';

export interface Order {
  id: string;
  date: string;
  store: string;
  region: string;
  status: OrderStatus;
}

export interface InventoryItem {
  id: string;
  date: string;
  name: string;
  quantity: number;
  status: OrderStatus;
  units: number;
  threshold: number;
  expiryDate: string;
}

export interface StatItem {
  label: string;
  count: number | string;
  subtext: string;
  icon?: string;
  variant?: 'primary' | 'white';
}

export interface InventorySummaryItem {
  label: string;
  count: number;
  subtext: string;
  trend: number;
  variant: 'low' | 'out' | 'expire';
}
