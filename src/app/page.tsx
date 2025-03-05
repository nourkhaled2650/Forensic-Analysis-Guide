import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#14273d] object-contain text-white">
      <header className="p-6 border-b border-[#33FF99]/20 flex justify-between items-center">
        <div className="container mx-auto flex items-center gap-2">
          <Image
            quality={100}
            src="/logo2.png"
            width={82}
            height={82}
            alt="logo"
          />
          <h1 className="text-lg md:text-2xl font-bold">
            Forensic Analysis Guide
          </h1>
        </div>
        <Button
          variant={"ghost"}
          className="hover:bg-[#e7fcfb]/20 py-1 p-0 cursor-pointer"
        >
          <Image
            quality={100}
            src="/ai.svg"
            width={62}
            height={62}
            alt={"AI"}
          />
        </Button>
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
                <div className="bg-[#14273d] rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Image
                    quality={100}
                    src={type.icon}
                    width={32}
                    height={32}
                    alt={type.title}
                  />
                </div>
                <h3 className="text-[#14273d] text-xl font-bold text-center mb-2">
                  {type.title}
                </h3>
                <p className="text-[#14273d]/80 text-center text-sm">
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
    icon: "/hair.svg",
  },
  {
    id: "fiber",
    title: "Fiber Evidence",
    description:
      "Microscopic examination and spectroscopy analysis of fiber samples",
    icon: "fiber.svg",
  },
  {
    id: "glass",
    title: "Glass Evidence",
    description:
      "Refractive index, density, and fracture pattern analysis of glass fragments",
    icon: "glass.svg",
  },
  {
    id: "paint",
    title: "Paint Evidence",
    description: "Layer examination and spectroscopy analysis of paint samples",
    icon: "paint.svg",
  },
  {
    id: "soil",
    title: "Soil Evidence",
    description:
      "Physical, chemical, and mineralogical analysis of soil samples",
    icon: "soil.svg",
  },
  {
    id: "polymer",
    title: "Polymer Evidence",
    description: "Spectroscopy and thermal analysis of polymer fragments",
    icon: "polymer.svg",
  },
];
