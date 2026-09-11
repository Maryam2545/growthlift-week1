function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "React project using components and props.",
    },
    {
      title: "Project 2",
      description: "React project using state and hooks.",
    },
    {
      title: "Project 3",
      description: "React project using routing and Tailwind CSS.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-400 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-3">
              {project.title}
            </h2>

            <p className="text-gray-400">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;