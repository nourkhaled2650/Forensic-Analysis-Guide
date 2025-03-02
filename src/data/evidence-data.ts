import type { EvidenceType } from "@/types/evidence";

export const evidenceData: Record<string, EvidenceType> = {
  hair: {
    id: `hair`,
    title: `Hair Evidence`,
    description: `Hair analysis includes microscopic, DNA, and chemical analysis to determine origin, racial classification, and chemical composition.`,
    analysisTypes: [
      `Microscopic Analysis`,
      `DNA Analysis (Mitochondrial & Nuclear DNA)`,
      `Chemical Composition Analysis (FTIR, GC-MS)`,
      `Isotope Ratio Analysis`,
    ],
    collection: [
      `Use tweezers or a specialized vacuum to collect hair samples.`,
      `Store in paper envelopes to avoid contamination.`,
    ],

    steps: [
      {
        title: `Microscopic Analysis`,
        details: [
          `Place hair sample under a stereomicroscope.`,
          `Examine cuticle, cortex, and medulla for color, shape, and patterns.`,
          `Cuticle Analysis: Check scale pattern and thickness. Human hair has an imbricate scale pattern, while animal hair may have coronal or spinous patterns.`,
          `Cortex Analysis: Observe pigment granules. Human hair has evenly distributed pigment, while animal hair often has banded pigmentation.`,
          `Medulla Analysis: Measure medulla width. In humans, the medulla index ratio is typically less than 1/3, while in animals, it is often 1/2 or greater. Human hair generally has a fragmented or absent medulla, whereas animal hair often has a continuous medulla.`,
          `Race Determination: <br>Hair characteristics can provide clues about ancestry.<br>
              • Asian Hair: Typically straight, round cross-section, thick cuticle, and a continuous medulla.<br>
              • Caucasian Hair: Usually wavy or straight, oval cross-section, finer texture, and a fragmented or absent medulla.<br>
              • African Hair: Typically curly or coiled, flattened cross-section, dense pigment granules, and an often absent medulla.`,
          `Determining Cut Marks:<br>
              • If the hair is cut by scissors, the end will appear clean and straight under a microscope.  <br> 
              • If the hair is cut by a razor, the end will appear tapered and finer, often showing microscopic fraying. <br>
              • If the hair is broken or pulled, the tip will appear frayed or irregular with a natural, non-uniform break.`,
        ],
      },
      {
        title: `DNA Analysis (Mitochondrial & Nuclear DNA)`,
        details: [
          `Sample Preparation: <br>
              • If the hair contains a root, it can be used for nuclear DNA analysis.<br> 
              • If no root is present, mitochondrial DNA can still be analyzed, but it provides only maternal lineage.`,
          `Extraction Process: <br> 
              • Clean the hair sample using sterile buffers to remove contaminants. <br>
              • Use a lysis buffer to break open cells and release DNA.<br>
              • Apply Proteinase K to digest proteins surrounding the DNA.<br>
              • Perform organic extraction (Phenol-Chloroform method) or Silica-based extraction to purify DNA.<br>
              `,
          `DNA Quantification: <br>
              • Use spectrophotometry (Nanodrop) or qPCR to determine DNA quantity and quality. <br>`,
          `PCR Amplification: <br>
              • Amplify specific DNA regions using STR (Short Tandem Repeat) analysis for nuclear DNA.<br>
              • For mitochondrial DNA, amplify hypervariable regions (HV1 & HV2).<br>`,
          `Sequencing & Analysis: <br>
              • Analyze STR markers for individual identification.<br>
              • Compare mtDNA sequences with databases to determine maternal ancestry.<br>`,
        ],
      },
      {
        title: `Chemical Composition Analysis (FTIR, GC-MS)`,
        details: [
          `FTIR and GC-MS can be used to identify chemical treatments, dyes, or contaminants in the sample.`,
          `Analysis can determine if substances such as hair dyes, environmental pollutants, or drug residues are present in the hair shaft.`,
          `Results can provide insight into lifestyle, environmental exposure, or potential chemical alterations.`,
          `Use FTIR or GC-MS to analyze chemical composition and detect treatments or contaminants.`,
        ],
      },
      {
        title: `Isotope Ratio Analysis`,
        details: [],
      },
    ],
    interpretation: [
      `Findings from different tests are compared against forensic databases and known samples.`,
      `Results from DNA, chemical, and microscopic analysis help determine the origin, possible racial classification, and whether the sample matches a suspect or location.`,
      `Conclusions are drawn based on consistency with other evidence in the forensic investigation.`,
      `Compare findings with known hair samples from databases.`,
      `Determine if the hair source is human or animal and if it matches a suspect.`,
    ],
  },
  fiber: {
    id: `fiber`,
    title: `Fiber Evidence`,
    description: `This guide provides forensic investigators with step-by-step methods for analyzing fiber evidence efficiently.`,
    analysisTypes: [
      `Microscopic Examination`,
      `FTIR Spectroscopy`,
      `Burn Test`,
      `UV-Vis Spectrophotometry`,
    ],
    collection: [
      `Use forceps to collect fibers.`,
      `Store in clean paper envelopes.`,
    ],

    steps: [
      {
        title: `Microscopic Examination`,
        details: [`Identify fiber morphology and structure.`],
      },
      {
        title: `FTIR Spectroscopy`,
        details: [`Compare light absorption patterns.`],
      },
      {
        title: `Burn Test`,
        details: [`Observe burning characteristics and smell.`],
      },
      {
        title: `UV-Vis Spectrophotometry`,
        details: [],
      },
    ],
    interpretation: [`Compare findings with textile databases.`],
  },
  glass: {
    id: `glass`,
    title: `Glass Evidence`,
    description: `This guide provides forensic investigators with step-by-step methods for analyzing glass evidence efficiently.`,
    analysisTypes: [
      `Refractive Index Measurement (GRIM 3)`,
      `Density Measurement`,
      `Elemental Analysis (SEM-EDS, XRF)`,
      `Fracture Pattern Analysis`,
    ],

    collection: [
      `Use gloves and tweezers to collect fragments.`,
      `Store in rigid containers.`,
    ],
    steps: [
      {
        title: `Refractive Index Measurement (GRIM 3)`,
        details: [
          `Use GRIM system to determine light bending properties.`,
          `Helps determine if the glass fragment matches a particular source.`,
          `Can differentiate between types of glass, such as window glass, automotive glass, and container glass.`,
        ],
      },
      {
        title: `Density Measurement`,
        details: [
          `Compare density with known samples using floatation or gradient column methods.`,
          `Different types of glass have unique density values, aiding in classification.`,
          `Useful for distinguishing tempered glass from standard glass.`,
        ],
      },
      {
        title: `Elemental Analysis (SEM-EDS, XRF)`,
        details: [
          `Use SEM-EDS and XRF to determine elemental composition.`,
          `Identifies trace elements that can link glass fragments to specific manufacturers or locations.`,
          `Can differentiate soda-lime glass from borosilicate glass or leaded glass based on elemental presence.`,
        ],
      },
      {
        title: `Fracture Pattern Analysis`,
        details: [
          `Examines the breakage patterns in glass to determine the force and direction of impact.`,
          `Helps distinguish between primary and secondary fractures, especially in cases involving bullets or blunt force trauma.`,
          `Primary Fractures: <br>
           • Radial fractures form first, radiating outward from the point of impact. <br>
           • These lines start on the side opposite to the force. `,
          `Secondary Fractures: <br>
           • Concentric (circular) fractures form after radial fractures and occur on the same side as the force impact. <br>
           • These help confirm the direction and sequence of impact`,
          `Bullet Impact Analysis: <br>
          • The entrance hole is typically smaller and smoother, while the exit hole is larger and more irregular due to glass expansion and pressure. <br>
          • The 3R Rule: Radial cracks form a Right angle on the Reverse side of force, helping determine the bullet's entry and exit direction. `,
        ],
      },
    ],
    interpretation: [`Compare with glass database records.`],
  },
  paint: {
    id: `paint`,
    title: `Paint Evidence`,
    description: `This guide provides forensic investigators with step-by-step methods for analyzing paint evidence efficiently.`,
    analysisTypes: [
      `Microscopic Layer Examination`,
      `SEM-EDS for Elemental Analysis`,
      `Pyrolysis Gas Chromatography (Py-GC-MS)`,
      `FTIR & Raman Spectroscopy`,
    ],
    collection: [`Scrape paint fragments carefully.`, `Store in vials.`],
    steps: [
      {
        title: `Microscopic Layer Examination`,
        details: [`Identify layer structures.`],
      },
      {
        title: `SEM-EDS for Elemental Analysis`,
        details: [`Determine paint binder and pigment composition.`],
      },
      {
        title: `Pyrolysis Gas Chromatography (Py-GC-MS)`,
        details: [`Identify complex organic compounds.`],
      },
    ],
    interpretation: [`Match with known paint databases of (suspect) . `],
  },
  soil: {
    id: `soil`,
    title: `Soil Evidence`,
    description: `This guide provides forensic investigators with step-by-step methods for analyzing soil evidence efficiently.`,
    analysisTypes: [
      `Color & Texture Examination`,
      `pH and Mineral Composition Analysis`,
      `XRD and SEM Analysis for Elemental Composition`,
    ],
    collection: [
      `Use clean tools to collect soil.`,
      `Store in sterile containers. `,
    ],
    steps: [
      {
        title: `Color & Texture Examination`,
        details: [`Assess grain size and composition.`],
      },
      {
        title: `pH and Mineral Composition Analysis`,
        details: [`Determine pH and mineral content.`],
      },
      {
        title: `XRD and SEM Analysis`,
        details: [`Identify mineralogical and elemental composition.`],
      },
    ],
    interpretation: [`Compare with regional soil samples.`],
  },
  polymer: {
    id: `polymer`,
    title: `Polymer Evidence`,
    description: `This guide provides forensic investigators with step-by-step methods for analyzing polymer evidence efficiently.`,
    analysisTypes: [
      `FTIR Spectroscopy`,
      `DSC (Differential Scanning Calorimetry)`,
      `TGA (Thermogravimetric Analysis)`,
      `GC-MS for Additives Analysis`,
    ],
    collection: [
      `Use tweezers to collect polymer fragments.`,
      `Store in sealed containers.`,
    ],
    steps: [
      {
        title: `FTIR Spectroscopy`,
        details: [
          `Identifies polymer functional groups by analyzing infrared absorption spectra.`,
          `Can differentiate between different types of synthetic and natural polymers.`,
          `Helps determine if the sample has undergone chemical modifications or degradation. <br> 
          • Identify polymer functional groups.  `,
        ],
      },
      {
        title: `DSC (Differential Scanning Calorimetry)`,
        details: [
          `Measures thermal transitions such as melting, crystallization, and glass transition temperature.`,
          `Helps identify polymer types based on their thermal behavior.`,
        ],
      },
      {
        title: `TGA (Thermogravimetric Analysis)`,
        details: [
          `Measures weight loss as a function of temperature.`,
          `Detects decomposition temperatures and identifies polymer additives or fillers.`,
          `Determine thermal properties. `,
        ],
      },
      {
        title: `GC-MS for Additives Analysis`,
        details: [
          `Detects additives, plasticizers, and residual monomers in polymer samples.`,
          `Helps determine the origin of synthetic materials by comparing chemical composition.`,
          `Identifies degradation products that can provide information about the polymer's exposure to heat, light, or environmental factors.`,
          `Detect additives and plasticizers.`,
          `additives and plasticizers. `,
        ],
      },
    ],
    interpretation: [`Compare with polymer reference databases.`],
  },
};
