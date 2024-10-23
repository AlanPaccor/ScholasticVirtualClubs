'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../../firebaseConfig';
import GetStarted from './GetStarted';

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
      <GetStarted />
    </div>
  );
}
