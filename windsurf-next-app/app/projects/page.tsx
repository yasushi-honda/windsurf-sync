export default function Projects() {
  return (
    <div className="page-container">
      <h1 className="heading">Our Projects</h1>
      <p className="subheading">Explore our latest work</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Project 1</h2>
            <p className="text-gray-600 mb-4">
              A modern web application built with Next.js and Tailwind CSS.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Project 2</h2>
            <p className="text-gray-600 mb-4">
              An e-commerce platform with seamless user experience.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
