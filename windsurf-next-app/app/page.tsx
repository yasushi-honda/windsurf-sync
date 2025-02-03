import Image from "next/image";

export default function Home() {
  return (
    <div className="page-container">
      <h1 className="heading">Welcome to My Website</h1>
      <p className="subheading">
        Explore our modern website with smooth page transitions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Feature 1</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Feature 2</h2>
          <p className="text-gray-600">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Feature 3</h2>
          <p className="text-gray-600">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
      </div>
    </div>
  );
}
