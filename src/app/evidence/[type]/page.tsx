import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { EvidenceDetails } from "@/components/evidence-details";
import { evidenceData } from "@/data/evidence-data";
import { Card } from "@/components/ui/card";

export default async function EvidencePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const evidenceType = (await params).type;
  const evidence = evidenceData[evidenceType];
  if (!evidence) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a2540] text-white">
      <header className="p-6 border-b border-[#33FF99]/20">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#33FF99] hover:text-[#33FF99]/80 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Evidence Types
          </Link>
          <h1 className="text-2xl font-bold">{evidence.title}</h1>
        </div>
      </header>
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-[#e7fcfb] p-8 mb-8">
            <h2 className="text-2xl font-bold  text-[#0a2540]">
              {evidence.title}
            </h2>
            <p className="text-[#0a2540]/80 mb-4">{evidence.description}</p>
          </Card>
          <EvidenceDetails evidence={evidence} />
        </div>
      </main>
    </div>
  );
}
