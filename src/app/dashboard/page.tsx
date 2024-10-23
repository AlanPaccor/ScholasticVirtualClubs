'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Dashboard from "./dashboard";
import { auth } from '../../../firebaseConfig'; // Make sure this path is correct
import Navbar from './navbar';
import Sidebar from './sidebar';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push('/');
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div>
      <Navbar />
      <div className="flex">
      <Sidebar />
      <Dashboard />
      </div>
    </div>
  );
}
