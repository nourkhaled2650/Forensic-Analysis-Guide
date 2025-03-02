import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a2540] text-white">
      <header className="p-6 border-b border-[#33FF99]/20">
        <div className="container mx-auto flex items-center gap-2">
          <Image src="/logo.png" width={42} height={42} alt="logo" />
          <h1 className="text-2xl font-bold">Forensic Analysis Guide</h1>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          Evidence Analysis Guide
        </h2>
        <p className="text-center text-[#e7fcfb] mb-12 max-w-2xl mx-auto">
          This guide provides forensic investigators and students with
          step-by-step methods for analyzing trace evidence efficiently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {evidenceTypes.map((type) => (
            <Link key={type.id} href={`/evidence/${type.id}`} className="group">
              <div className="bg-[#e7fcfb] rounded-lg p-6 h-full transition-all duration-300 hover:shadow-lg hover:shadow-[#33FF99]/20 hover:translate-y-[-4px]">
                <div className="bg-[#0a2540] rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  {type.icon}
                </div>
                <h3 className="text-[#0a2540] text-xl font-bold text-center mb-2">
                  {type.title}
                </h3>
                <p className="text-[#0a2540]/80 text-center text-sm">
                  {type.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

const evidenceTypes = [
  {
    id: "hair",
    title: "Hair Evidence",
    description:
      "Analysis of hair samples for microscopic, DNA, and chemical properties",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#33FF99]"
      >
        <path d="M4 18V9c0-2.76 2.24-5 5-5 2.76 0 5 2.24 5 5v9" />
        <path d="M8 18v-7c0-1.66 1.34-3 3-3 1.66 0 3 1.34 3 3v7" />
        <path d="M12 18v-5c0-.55.45-1 1-1s1 .45 1 1v5" />
        <rect width="16" height="2" x="4" y="18" rx="1" />
        <path d="M2 22h20" />
      </svg>
    ),
  },
  {
    id: "fiber",
    title: "Fiber Evidence",
    description:
      "Microscopic examination and spectroscopy analysis of fiber samples",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#33FF99]"
      >
        <path d="M6 3v12" />
        <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path d="M15 6a9 9 0 0 1 9 9" />
        <path d="M15 18a9 9 0 0 1-9-9" />
      </svg>
    ),
  },
  {
    id: "glass",
    title: "Glass Evidence",
    description:
      "Refractive index, density, and fracture pattern analysis of glass fragments",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#33FF99]"
      >
        <path d="m5 8 6 6" />
        <path d="m4 14 10-10 6 6-2 2" />
        <path d="M14 4v4h4" />
        <path d="M8.8 16a5 5 0 1 0 5.2 5" />
        <path d="M16 16a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    id: "paint",
    title: "Paint Evidence",
    description: "Layer examination and spectroscopy analysis of paint samples",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#33FF99]"
      >
        <path d="M19 9c0 1.3-.84 2.4-2 2.82V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-8.18C9.84 11.4 9 10.3 9 9V3h10v6Z" />
        <path d="M5 3v4" />
        <path d="M5 11v4" />
        <path d="M9 3v2" />
        <path d="M9 9v1" />
      </svg>
    ),
  },
  {
    id: "soil",
    title: "Soil Evidence",
    description:
      "Physical, chemical, and mineralogical analysis of soil samples",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#33FF99]"
      >
        <path d="M2 22c1.25-1.25 2.5-2 4-2 1.5 0 2.75.75 4 2 1.25-1.25 2.5-2 4-2 1.5 0 2.75.75 4 2" />
        <path d="M2 16c1.25-1.25 2.5-2 4-2 1.5 0 2.75.75 4 2 1.25-1.25 2.5-2 4-2 1.5 0 2.75.75 4 2" />
        <path d="M2 10c1.25-1.25 2.5-2 4-2 1.5 0 2.75.75 4 2 1.25-1.25 2.5-2 4-2 1.5 0 2.75.75 4 2" />
      </svg>
    ),
  },
  {
    id: "polymer",
    title: "Polymer Evidence",
    description: "Spectroscopy and thermal analysis of polymer fragments",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#33FF99]"
      >
        <path d="M8.42 4.3A5.17 5.17 0 0 0 2.1 11.2a5.17 5.17 0 0 0 6.7 2.8 5.17 5.17 0 0 0 2.8-6.7" />
        <path d="M18.4 5.2a5.17 5.17 0 0 0-6.3 3.6" />
        <path d="M15.19 12.4a5.17 5.17 0 0 0 3.6 6.3 5.17 5.17 0 0 0 6.3-3.6 5.17 5.17 0 0 0-3.6-6.3" />
      </svg>
    ),
  },
];
