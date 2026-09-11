function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">
        About Me
      </h1>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-400 transition-colors">
        <p className="text-gray-300 text-lg">
          My name is Maryam. I am a Computer Science student
          learning React and modern web development.
        </p>
      </div>
    </div>
  );
}

export default About;