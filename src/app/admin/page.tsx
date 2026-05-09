"use client";

import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('./AdminDashboard'), { ssr: false });

export default function AdminPage() {
  return <Dashboard />;
}
