export default function Internships() {
  return (
    <section className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Internships</h2>

      <div className="space-y-4">

        <div className="border p-5 rounded-xl bg-white/60 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">
            Engineering Intern – ConnectWise (June 2025 - July 2025)
          </h3>
          <p className="mt-2 text-gray-700">
            Built REST APIs using Go & GoFiber, GraphQL layer with gqlgen, and
            unit tested using GoMock.
          </p>
        </div>

        <div className="border p-5 rounded-xl bg-white/60 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">
            Data Science Intern – KJSCE (July 2024 - Dec 2024)
          </h3>
          <p className="mt-2 text-gray-700">
            Built CNN disease detection model, cleaned dataset, integrated into
            apps, and published research at ICTEAH 2025.
          </p>
        </div>

      </div>
    </section>
  );
}
