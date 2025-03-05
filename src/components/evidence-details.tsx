"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { EvidenceType } from "@/types/evidence";
import { Microscope } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
export function EvidenceDetails({ evidence }: { evidence: EvidenceType }) {
  const [selectedAnalysis, setSelectedAnalysis] = useState<string | null>(null);

  // Get the details for the selected analysis type
  const getAnalysisDetails = (analysisType: string) => {
    console.log(analysisType);
    // Find the step that matches the analysis type
    const step = evidence.steps.find((s) =>
      analysisType.toLowerCase().includes(s.title.toLowerCase())
    );
    return step?.details || [];
  };

  // Get appropriate icon for analysis type
  const getAnalysisIcon = (type: string) => {
    if (type.toLowerCase().includes("microscop")) return "micro.svg";
    if (
      type.toLowerCase().includes("chemical") ||
      type.toLowerCase().includes("spectroscop")
    )
      return "flask.svg";
    if (type.toLowerCase().includes("dna")) return "dna.svg";
    if (type.toLowerCase().includes("isotope")) return "Isotope.svg";
    if (type.toLowerCase().includes("ftir")) return "FTIR.svg";
    if (type.toLowerCase().includes("tga")) return "TGA.svg";
    if (type.toLowerCase().includes("dsc")) return "DSC.svg";
    if (type.toLowerCase().includes("additives")) return "GC.svg";
    return "db.svg";
  };

  return (
    <div className="grid md:grid-cols-[300px_1fr] gap-6">
      {/* Analysis Types Selection Panel */}
      <Card className="bg-[#e7fcfb] p-4 h-fit col-span-1">
        <h2 className="text-xl font-bold text-[#14273d] mb-4 px-2">
          Select Analysis Type
        </h2>
        <div className="grid gap-2">
          {evidence.analysisTypes.map((type, index) => {
            const Icon = getAnalysisIcon(type);
            return (
              <Button
                variant={selectedAnalysis === type ? "secondary" : "outline"}
                key={index}
                className={`w-full cursor-pointer flex gap-2 justify-start text-start  whitespace-break-spaces`}
                onClick={() => setSelectedAnalysis(type)}
              >
                <Image
                  quality={100}
                  src={"/icons/" + Icon}
                  width={20}
                  height={20}
                  alt={"type icon"}
                />
                {type}
              </Button>
            );
          })}
        </div>
      </Card>
      {/* Analysis Details Panel */}
      <Card className="bg-[#e7fcfb] p-6">
        {selectedAnalysis ? (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              {/* Get the icon */}
              {(() => {
                const Icon = getAnalysisIcon(selectedAnalysis);
                return (
                  <Image
                    quality={100}
                    src={"/icons/" + Icon}
                    width={8}
                    height={8}
                    alt={"type icon"}
                  />
                );
              })()}
              <h2 className="text-2xl font-bold text-[#14273d]">
                {selectedAnalysis}
              </h2>
            </div>

            <Accordion type="single" collapsible>
              {/* Collection Methods */}
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-[#14273d] mb-3 flex items-center gap-2 cursor-pointer">
                  <span className="bg-[#33FF99] text-[#14273d] w-7 h-7 rounded-full flex items-center justify-center text-sm">
                    C
                  </span>
                  Collection Methods
                </AccordionTrigger>
                <AccordionContent className=" rounded-md border border-[#33FF99]/20 p-4">
                  <ol className="list-decimal pl-6 space-y-2 text-[#14273d]">
                    {evidence.collection.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>
              {/* Analysis Steps */}
              <AccordionItem value="item-2">
                <AccordionTrigger
                  disabled={getAnalysisDetails(selectedAnalysis).length === 0}
                  className="text-lg font-semibold text-[#14273d] mb-3 flex items-center gap-2 cursor-pointer"
                >
                  <span className="bg-[#33FF99] text-[#14273d] w-7 h-7 rounded-full flex items-center justify-center text-sm">
                    A
                  </span>
                  Analysis Steps
                </AccordionTrigger>
                <AccordionContent className=" rounded-md border border-[#33FF99]/20 p-4">
                  <ol className="list-decimal pl-6 space-y-2 text-[#14273d]">
                    {getAnalysisDetails(selectedAnalysis).map(
                      (detail, index) => (
                        <li
                          key={index}
                          dangerouslySetInnerHTML={{ __html: detail }}
                        />
                      )
                    )}
                  </ol>
                </AccordionContent>
              </AccordionItem>

              {/* Data Interpretation */}
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-[#14273d] mb-3 flex items-center gap-2 cursor-pointer">
                  <span className="bg-[#33FF99] text-[#14273d] w-7 h-7 rounded-full flex items-center justify-center text-sm">
                    I
                  </span>
                  Data Interpretation
                </AccordionTrigger>
                <AccordionContent className="rounded-md border border-[#33FF99]/20 p-4">
                  <ul className="list-disc pl-6 space-y-2 text-[#14273d]">
                    {evidence.interpretation.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {evidence.id === "hair" && (
              <div className="flex flex-wrap justify-between f">
                <Image
                  quality={100}
                  src={"/hair_sample1.png"}
                  className="w-[100%] object-contain"
                  width={100}
                  height={100}
                  alt={"hair samples"}
                />
                <Image
                  quality={100}
                  src={"/hair_sample5.png"}
                  className="md:w-[45%] w-full object-contain"
                  width={100}
                  height={100}
                  alt={"hair samples"}
                />
                <Image
                  quality={100}
                  src={"/hair_sample6.png"}
                  className="md:w-[45%] w-full object-contain"
                  width={100}
                  height={100}
                  alt={"hair samples"}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[600px] text-[#14273d]">
            <Microscope className="h-16 w-16 text-[#33FF99] mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Select an Analysis Type
            </h2>
            <p className="text-[#14273d]/70">
              Choose an analysis type from the left panel to view its details
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
