function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
        Home Page
      </h1>

      <p className="text-gray-400 text-lg mb-8">
        Welcome to my GrowthLift React website.
      </p>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-400 transition-colors">
        <h2 className="text-2xl font-bold mb-3">
          React Internship Project
        </h2>

        <p className="text-gray-400">
          This project demonstrates React components, props, state,
          hooks, lists, routing and Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

export default Home;