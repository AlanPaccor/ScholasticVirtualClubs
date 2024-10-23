import { useEffect, useState } from 'react';
import { auth } from '../../../firebaseConfig'; // Make sure this path is correct
import Image from 'next/image';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.displayName || user.email}!</h1>
      
      {/* Waitlist Ready Section */}
      <div className="bg-purple-100 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center mb-2">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">4/4</div>
              <h2 className="text-xl font-semibold">Your waitlist is ready!</h2>
            </div>
            <p className="text-gray-600">Share across your social media, network and with friends and family to start building an audience.</p>
          </div>
          <div className="space-y-2">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md w-full">Copy link</button>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-md border border-gray-300 w-full">Continue editing capture page</button>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-md border border-gray-300 w-full">Customize the info you collect</button>
          </div>
        </div>
      </div>

      {/* Get more out of Kajabi Section */}
      <h2 className="text-2xl font-semibold mb-4">Get more out of Kajabi</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Kajabi Hero Group',
            description: 'Join us on Facebook to get advice and guidance from fellow entrepreneurs.',
            image: '/images/kajabi-hero-group.png',
            link: 'Join the Group',
          },
          {
            title: 'Kajabi University',
            description: 'Access our resources, tailored to help you thrive.',
            image: '/images/kajabi-university.png',
            link: 'Visit Kajabi University',
          },
          {
            title: 'Kajabi Experts',
            description: 'Find and hire a vetted Kajabi Expert to level up your business',
            image: '/images/kajabi-experts.png',
            link: 'Visit Store',
          },
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <Image src={item.image} alt={item.title} width={64} height={64} className="mb-4" />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <a href="#" className="text-blue-600 hover:underline">{item.link} →</a>
          </div>
        ))}
      </div>
    </div>
  );
}
