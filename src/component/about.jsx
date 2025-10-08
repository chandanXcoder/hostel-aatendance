import { Target, Lightbulb, Shield, Users } from "lucide-react";
import bgImage from "../assets/himgiri.jpg"; // <-- put your image here

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "Empowering educational institutions with efficient attendance management solutions.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Evolving continuously with cutting-edge technology and thoughtful design.",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "Protecting student data with enterprise-grade security and compliance standards.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "Building a supportive ecosystem for administrators, staff, and students.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Small intro paragraph only */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Hostel Attendance Portal simplifies attendance tracking for
            educational institutions through secure, innovative, and
            user-friendly technology.
          </p>
        </div>

        {/* Glass-style values section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg hover:bg-white/20 transition-all duration-300 text-center"
            >
              <div className="h-14 w-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-7 w-7 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team info */}
        <div className="mt-20 text-center">
          <p className="text-gray-300 max-w-2xl mx-auto">
            A passionate group of developers, educators, and designers committed
            to transforming attendance management across institutions.
          </p>
        </div>
      </div>
    </section>
  );
}
