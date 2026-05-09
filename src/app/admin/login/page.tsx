"use client";

import dynamic from 'next/dynamic';

const LoginContent = dynamic(() => import('@/components/admin/LoginContent'), { ssr: false });

export default function AdminLoginPage() {
  return <LoginContent />;
}
