const projects = [
  {
    title: "Quizzify – AI-Powered Quiz Generator",
    desc: "Full-stack AI quiz generator with Bloom’s taxonomy difficulty levels, auto-checking, scheduling & Google Forms API integration."
  },
  {
    title: "Dreamz Nexus 2K25 – Official Event Website",
    desc: "Responsive event website with Firebase Auth, real-time DB, and registration system."
  },
  {
    title: "Immunilink – Vaccine Management System",
    desc: "MERN portal with role-based access and admin panel."
  },
  {
    title: "AI Disease Detection CNN",
    desc: "Deep learning CNN model integrated into web & mobile apps."
  }
];

export default function Projects() {
  return (
    <section className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="border p-5 rounded-xl bg-white/60 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-700 mt-1">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
