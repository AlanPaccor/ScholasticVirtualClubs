import Image from 'next/image';

export default function AppDownload() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">
            Join over 10 million people<br />
            learning on Brilliant
          </h2>
          <button className="bg-green-500 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-green-600 transition duration-300">
            Get started
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
          <div className="text-center">
            <Image 
              src="/images/app-store-badge.png" 
              alt="Download on the App Store" 
              width={200} 
              height={60} 
              className="mb-2"
            />
            <div className="flex items-center justify-center">
              <div className="flex text-yellow-400">
                {'★★★★★'}
              </div>
              <span className="text-gray-600 ml-2">10K+ Ratings</span>
            </div>
          </div>
          <div className="text-center">
            <Image 
              src="/images/google-play-badge.png" 
              alt="Get it on Google Play" 
              width={200} 
              height={60} 
              className="mb-2"
            />
            <div className="flex items-center justify-center">
              <div className="flex text-yellow-400">
                {'★★★★★'}
              </div>
              <span className="text-gray-600 ml-2">60K+ Ratings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
