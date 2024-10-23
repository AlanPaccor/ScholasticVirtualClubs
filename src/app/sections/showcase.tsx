import Image from 'next/image';
import landingImage from "../../../public/modern-tech.jpg";


export default function Showcase() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Master concepts in 15 minutes a day</h2>
        <p className="text-center text-gray-600 mb-12">
          Whether you're a complete beginner or ready to dive into machine learning and
          beyond, Brilliant makes it easy to level up fast with fun, bite-sized lessons.
        </p>
        
        <div className="flex items-center space-x-8 mb-20">
          <div className="flex-1">
            <Image
              src={landingImage}
              alt="Interactive graph example"
              width={400}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">Effective, hands-on learning</h3>
            <p className="text-gray-600">
              Visual, interactive lessons make concepts feel intuitive — so even complex ideas just
              click. Our real-time feedback and simple explanations make learning efficient.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-8 mb-20">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">Learn at your level</h3>
            <p className="text-gray-600">
              Students and professionals alike can hone dormant skills or learn new ones. Progress
              through lessons and challenges tailored to your level. Designed for ages 13 to 113.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src={landingImage}
              alt="Interactive rover example"
              width={400}
              height={300}
              layout="responsive"
            />
            <div className="mt-2 flex items-center">
              <button className="bg-black text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <input type="range" className="ml-4 flex-grow" />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <div className="flex-1">
            <Image
              src={landingImage}
              alt="Guided bite-sized lessons example"
              width={400}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">Guided bite-sized lessons</h3>
            <p className="text-gray-600">
              We make it easy to stay on track, see your progress, and build your problem-solving
              skills one concept at a time.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-8 mb-20">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">Learn at your level</h3>
            <p className="text-gray-600">
              Students and professionals alike can hone dormant skills or learn new ones. Progress
              through lessons and challenges tailored to your level. Designed for ages 13 to 113.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src={landingImage}
              alt="Interactive rover example"
              width={400}
              height={300}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
