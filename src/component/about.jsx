import { Target, Lightbulb, Shield, Users } from "lucide-react";

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
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Hostel Attendance Portal
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hostel Attendance Portal simplifies attendance tracking for
            educational institutions through secure, innovative, and
            user-friendly technology.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100"
            >
              <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>  
          ))}
        </div>

        {/* Simple Team Preview */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A passionate group of developers, educators, and designers committed
            to transforming attendance management across institutions.
          </p>
        </div>
      </div> 
    </section>
  );
}
