function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Contact
      </h1>

      <form className="max-w-xl bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="mb-5">
          <label className="block text-gray-300 mb-2">
            Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-green-400 outline-none"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-300 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-green-400 outline-none"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-300 mb-2">
            Message
          </label>

          <textarea
            placeholder="Enter your message"
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-green-400 outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-green-500 text-gray-900 font-bold rounded-lg hover:bg-green-400 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;