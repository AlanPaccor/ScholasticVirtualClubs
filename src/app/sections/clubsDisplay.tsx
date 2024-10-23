"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import academic from '../../../public/academic.png';

type Category = 'Academic' | 'Arts & Culture' | 'Technology' | 'Sports & Wellness' | 'Social Impact';

type Club = {
  icon: string;
  name: string;
};

type ClubsList = {
  [key in Category]: Club[];
};

type CategoryImages = {
  [key in Category]: string | StaticImageData;
};

type AdditionalClubs = {
  [key in Category]?: number;
};

const ClubsDisplay = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Academic');
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    setIsChanging(true);
    const timer = setTimeout(() => setIsChanging(false), 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const clubCategories: Category[] = [
    'Academic',
    'Arts & Culture',
    'Technology',
    'Sports & Wellness',
    'Social Impact'
  ];

  const clubsList: ClubsList = {
    'Academic': [
      { icon: '📚', name: 'Debate Society' },
      { icon: '🔬', name: 'Science Club' },
      { icon: '🌍', name: 'Model UN' },
      { icon: '📝', name: 'Creative Writing' },
      { icon: '🧮', name: 'Math League' },
      { icon: '🗣️', name: 'Public Speaking' },
      { icon: '📰', name: 'School Newsletter' }
    ],
    'Arts & Culture': [
      { icon: '🎨', name: 'Digital Art Studio' },
      { icon: '🎭', name: 'Virtual Theater' },
      { icon: '🎵', name: 'Music Production' },
      { icon: '📷', name: 'Photography Club' },
      { icon: '🎬', name: 'Film Making' }
    ],
    'Technology': [
      { icon: '💻', name: 'Coding Club' },
      { icon: '🤖', name: 'Robotics Team' },
      { icon: '🎮', name: 'Game Development' },
      { icon: '🌐', name: 'Web Design' },
      { icon: '📱', name: 'App Development' }
    ],
    'Sports & Wellness': [
      { icon: '🧘', name: 'Virtual Yoga' },
      { icon: '🏃', name: 'Fitness Challenge' },
      { icon: '♟️', name: 'Chess Club' },
      { icon: '🧠', name: 'Mindfulness' }
    ],
    'Social Impact': [
      { icon: '🌱', name: 'Environmental Club' },
      { icon: '🤝', name: 'Peer Mentoring' },
      { icon: '❤️', name: 'Community Service' },
      { icon: '🌈', name: 'Diversity Alliance' }
    ]
  };

  const categoryImages: CategoryImages = {
    'Academic': academic,
    'Arts & Culture': '/images/arts-culture.png',
    'Technology': '/images/technology.png',
    'Sports & Wellness': '/images/sports-wellness.png',
    'Social Impact': '/images/social-impact.png'
  };

  const additionalClubs: AdditionalClubs = {
    'Academic': 8,
    'Technology': 5
  };

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-8">Virtual Clubs for Every Interest</h1>
      
      <div className="flex justify-center gap-4 mb-8 overflow-x-auto py-2">
        {clubCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-grow overflow-hidden">
        <div className={`md:col-span-1 space-y-4 overflow-y-auto transition-opacity duration-300 ${isChanging ? 'opacity-0' : 'opacity-100'}`}>
          <h2 className="text-xl font-semibold mb-4">
            Clubs in {activeCategory}
          </h2>
          <div className="space-y-2">
            {clubsList[activeCategory].map((club) => (
              <div
                key={club.name}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer border border-gray-200"
              >
                <span className="text-2xl">{club.icon}</span>
                <span className="font-medium">{club.name}</span>
              </div>
            ))}
          </div>
          {additionalClubs[activeCategory] && (
            <div className="mt-4 text-gray-500">
              + {additionalClubs[activeCategory]} additional clubs
            </div>
          )}
        </div>

        <div className="h-[500px] md:col-span-3 rounded-md overflow-hidden bg-gray-900 border-2 border-gray-900 flex flex-col shadow-lg">
          <div className='bg-gray-900 flex justify-center items-center p-1'>
            <div className="bg-gray-600/30 py-1 px-24 text-white uppercase text-sm rounded-full">
              {activeCategory}
            </div>
          </div>
          <div className="flex-grow relative">
            <div className={`absolute inset-0 transition-opacity duration-300 ${isChanging ? 'opacity-0' : 'opacity-100'}`}>
              <Image
                src={categoryImages[activeCategory]}
                alt={`${activeCategory} category`}
                fill
                sizes="(max-width: 768px) 100vw, 75vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-6">
          All of our 60+ courses are crafted by award-winning teachers, researchers, and professionals from:
        </p>
        <div className="flex justify-center items-center space-x-8">
          <Image src="/images/caltech-logo.png" alt="Caltech" width={100} height={40} />
          <Image src="/images/mit-logo.png" alt="MIT" width={60} height={40} />
          <Image src="/images/duke-logo.png" alt="Duke" width={80} height={40} />
          <Image src="/images/microsoft-logo.png" alt="Microsoft" width={100} height={40} />
          <Image src="/images/google-logo.png" alt="Google" width={80} height={40} />
          <span className="text-gray-400 text-sm uppercase">And many<br />more...</span>
        </div>
      </div>
    </div>
  );
};

export default ClubsDisplay;
