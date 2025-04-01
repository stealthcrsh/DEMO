import React from 'react'

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
              Welcome to Our Platform
            </h1>
            <p className="text-xl text-white text-center mb-8">
              The best solution for your business needs
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 flex items-center gap-2">
              Get Started
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <i className="fas fa-magic text-xl text-blue-500"></i>
                <h3 className="text-xl font-semibold">Easy to Use</h3>
              </div>
              <p className="text-gray-600">
                Our platform is designed with simplicity in mind, making it easy for anyone to get started.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <i className="fas fa-tools text-xl text-blue-500"></i>
                <h3 className="text-xl font-semibold">Powerful Tools</h3>
              </div>
              <p className="text-gray-600">
                Access a wide range of powerful tools to help your business grow and succeed.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <i className="fas fa-headset text-xl text-blue-500"></i>
                <h3 className="text-xl font-semibold">24/7 Support</h3>
              </div>
              <p className="text-gray-600">
                Our dedicated support team is always here to help you with any questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage 