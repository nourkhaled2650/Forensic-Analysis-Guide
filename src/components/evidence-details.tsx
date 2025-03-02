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
import { Database, FlaskRoundIcon as Flask, Microscope } from "lucide-react";
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
    if (type.toLowerCase().includes("microscop")) return Microscope;
    if (
      type.toLowerCase().includes("chemical") ||
      type.toLowerCase().includes("spectroscop")
    )
      return Flask;
    return Database;
  };

  return (
    <div className="grid md:grid-cols-[300px_1fr] gap-6">
      {/* Analysis Types Selection Panel */}
      <Card className="bg-[#e7fcfb] p-4 h-fit col-span-1">
        <h2 className="text-xl font-bold text-[#0a2540] mb-4 px-2">
          Select Analysis Type
        </h2>
        <div className="grid gap-2">
          {evidence.analysisTypes.map((type, index) => {
            const Icon = getAnalysisIcon(type);
            return (
              <Button
                variant={selectedAnalysis === type ? "default" : "outline"}
                key={index}
                className={`w-full cursor-pointer flex gap-2 justify-start text-start  whitespace-break-spaces`}
                onClick={() => setSelectedAnalysis(type)}
              >
                <Icon className="md:h-4 md:w-4 w-8 h-8" />
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
                return <Icon className="md:h-4 md:w-4 w-8 h-8" />;
              })()}
              <h2 className="text-2xl font-bold text-[#0a2540]">
                {selectedAnalysis}
              </h2>
            </div>

            <Accordion type="single" collapsible>
              {/* Analysis Steps */}
              <AccordionItem value="item-2">
                <AccordionTrigger
                  disabled={getAnalysisDetails(selectedAnalysis).length === 0}
                  className="text-lg font-semibold text-[#0a2540] mb-3 flex items-center gap-2 cursor-pointer"
                >
                  <span className="bg-[#33FF99] text-[#0a2540] w-7 h-7 rounded-full flex items-center justify-center text-sm">
                    A
                  </span>
                  Analysis Steps
                </AccordionTrigger>
                <AccordionContent className=" rounded-md border border-[#33FF99]/20 p-4">
                  <ol className="list-decimal pl-6 space-y-2 text-[#0a2540]">
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

              {/* Collection Methods */}
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-[#0a2540] mb-3 flex items-center gap-2 cursor-pointer">
                  <span className="bg-[#33FF99] text-[#0a2540] w-7 h-7 rounded-full flex items-center justify-center text-sm">
                    C
                  </span>
                  Collection Methods
                </AccordionTrigger>
                <AccordionContent className=" rounded-md border border-[#33FF99]/20 p-4">
                  <ol className="list-decimal pl-6 space-y-2 text-[#0a2540]">
                    {evidence.collection.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>
              {/* Data Interpretation */}
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-[#0a2540] mb-3 flex items-center gap-2 cursor-pointer">
                  <span className="bg-[#33FF99] text-[#0a2540] w-7 h-7 rounded-full flex items-center justify-center text-sm">
                    I
                  </span>
                  Data Interpretation
                </AccordionTrigger>
                <AccordionContent className="rounded-md border border-[#33FF99]/20 p-4">
                  <ul className="list-disc pl-6 space-y-2 text-[#0a2540]">
                    {evidence.interpretation.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[600px] text-[#0a2540]">
            <Microscope className="h-16 w-16 text-[#33FF99] mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Select an Analysis Type
            </h2>
            <p className="text-[#0a2540]/70">
              Choose an analysis type from the left panel to view its details
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
