"use client";

import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('@/components/admin/Dashboard'), { ssr: false });

export default function AdminPage() {
  return <Dashboard />;
}
