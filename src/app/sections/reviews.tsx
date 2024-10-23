export default function Reviews() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <h2 className="text-center text-3xl font-bold mb-12">
          Join over 10 million people learning on Brilliant
        </h2>
        
        <div className="flex items-center justify-between">
          {/* Press Section */}
          <div className="flex items-center space-x-8">
            <img 
              src="/api/placeholder/120/40"
              alt="The New York Times"
              className="opacity-60 hover:opacity-100 transition-opacity"
            />
            <img 
              src="/api/placeholder/100/40"
              alt="The Atlantic"
              className="opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
  
          {/* App Store Reviews */}
          <div className="flex items-center">
            <div className="flex text-yellow-400 mr-2">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              Over 50,000 5-star reviews on<br />
              iOS App Store and Google Play
            </span>
          </div>
  
          {/* Trustpilot Score */}
          <div className="flex items-center">
            <div className="mr-4">
              <div className="text-sm font-medium mb-1">Trustpilot</div>
              <div className="flex text-green-500">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
            <span className="text-sm text-gray-600">
              TrustScore 4.7, 2,181 reviews
            </span>
          </div>
  
          {/* Awards */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">🍎</span>
            </div>
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">🏆</span>
            </div>
          </div>
        </div>
      </div>
    );
  }