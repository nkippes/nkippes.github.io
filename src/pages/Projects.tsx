import { Microscope, FlaskConical } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Crop Wild Relatives Mining',
    description: `My research focuses on harnessing genetic diversity from crop wild relatives (CWR) to enhance traits for crop improvement, with an emphasis on wheat and mint. In wheat, I have explored vernalization genes to identify natural genetic variations in ancient wheats and wild relatives, enabling adaptations such as spring growth habits. A key finding, published in 2015 in Proceedings of the National Academy of Sciences, traced the origin of spring growth in ancient South Asian wheats to the VERNALIZATION 4 (VRN4) gene. By leveraging genetic diversity from wild and ancient accessions, I mapped alleles that reduce vernalization requirements, focusing on epistatic interactions and polymorphisms in loci like VRN-D4 and VRN-A1. This work supported the development of winter cereals adapted to diverse climates using germplasm collections.

In mint, an aromatic crop, I conducted surveys of the U.S. National Plant Germplasm System (NPGS) collection from 2018 to 2021, identifying novel peppermint-type oil sources from wild relatives such as Mentha longifolia. This research validated breeding strategies to boost oil yields by incorporating induced and natural genetic variation from wild accessions. The result was the development of varieties like 'Velvet' peppermint, which offers higher yields and is now commercially produced. My approach integrates germplasm characterization for traits like disease resistance and yield, utilizing field trials and mutant populations to develop pre-breeding materials adopted across thousands of acres for commercial use.`,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=500&fit=crop',
    tags: ['Wheat', 'Mint', 'Genetic Diversity', 'Germplasm', 'VRN4', 'Pre-breeding']
  },
  {
    id: 2,
    title: 'Genomic Tools Development in Orphan Crops',
    description: `I have played a key role in developing genomics tools for orphan crops—under-researched species like mint and chickpeas—facilitating accelerated breeding through molecular markers, genome assemblies, and genotyping platforms. At UC Davis, in collaboration with Mars Inc., I spearheaded genomics for perennial crops like mint, an orphan crop with limited prior tools. Notable achievements include the 2024 chromosome-scale assembly of apple mint (Mentha suaveolens), which integrated sequencing methods for improved de novo assembly, and the 2021 efficient linkage map for M. suaveolens using sequence capture to identify haplotypes. These tools enabled gene discovery for flavor, yield, and disease resistance, leading to diploid mint varieties producing spearmint-type oil with high yield potential.

My work also involved deploying SNP genotyping platforms and molecular markers in polyploid crops, optimizing assays for genome duplication and pre-breeding. At NuCicer Inc., as Plant Breeding Director, I advanced genomics for chickpeas (often classified as an orphan crop in breeding contexts), developing roadmaps for varietal selection, predictive breeding, and automated phenotyping. This included managing projects with external partners to enhance genetic diversity using tools like high-throughput sequencing and statistical analysis in R and SAS. My technical skills in DNA technologies, such as designing markers for diploid and polyploid species, have been instrumental in characterizing natural variation and producing pre-breeding materials.`,
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=500&fit=crop',
    tags: ['Genomics', 'Orphan Crops', 'Mint', 'Chickpeas', 'SNP Markers', 'Genome Assembly']
  },
  {
    id: 3,
    title: 'Environmental Fitness and Product Placement',
    description: `My career emphasizes enhancing environmental fitness—crop adaptation to abiotic and biotic stresses—and strategic product placement, ensuring varieties perform optimally in target environments through field-based evaluation and interdisciplinary breeding. In wheat, my research on phytochrome (phyB and phyC) mutations and vernalization pathways addressed environmental cues like photoperiod and temperature, revealing shared functions in flowering and shade-avoidance. RNA-seq studies under varying day lengths identified gene networks for reproductive fitness, enabling wheat lines with no functional VRN2 genes for better adaptation to short/long days and climate variability. This work supports product placement by tailoring varieties to specific latitudes and seasons, maximizing grain production.

In mint and chickpeas, I conducted field trials at sites like UCANR's Extension Centers (IREC) to test environmental performance under California conditions, replicating farming stresses like pests and variable climates. As Plant Breeding Lead at NuCicer, I developed strategies for product advancement, focusing on fitness traits like yield, disease resistance, and resource efficiency, while collaborating across analytics, bioinformatics, and R&D for market-aligned placement.`,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop',
    tags: ['Environmental Adaptation', 'Field Trials', 'Product Placement', 'Climate Resilience']
  }
];

const techniques = [
  'Colchicine whole chromosome doubling',
  'Tilling using EMS (Ethyl Methyl Sulfonate) in seed crops',
  'Gamma radiation to increase genetic diversity in clonal crops',
  'Speed Breeding',
  'Near-Infrared (NIR) Spectroscopy for quality traits',
  'Flow Cytometry Analysis for genome size estimations',
  'Hyperspectral Imaging (HSI) for phenotyping',
  'UAV phenotyping (for rapid assessment of aerial traits)',
  'Illumina High throughput Sequencing for variant discovery',
  'Illumina SNP arrays for trait discovery, mapping, and genomic prediction',
  'PacBio HiFi',
  'Transcriptomic analysis using Illumina Sequencing',
  'Transcripts database construction using PacBio IsoSeq',
  'KASP genotyping for rapid SNP detection',
  'Protoplast extraction',
  'Plasmid delivery for transient gene expression',
  'Gas Chromatography (GC) for trait quality',
  'Ultra High-Performance Liquid Chromatography for rapid phenotyping',
  'Lab-based methods for assay validation (such as Soxhlet for oil extraction)'
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Research Areas
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            My research spans crop wild relative mining, genomic tool development for orphan crops, 
            and environmental fitness optimization for strategic product placement.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-soft transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[21/9]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="prose prose-gray max-w-none">
                  {project.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-600 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Techniques Section */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
            <FlaskConical size={24} />
            Techniques
          </h2>
          <p className="text-gray-600 mb-6">
            Throughout the years I have implemented a variety of techniques in plant research and variety development:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {techniques.map((technique, index) => (
              <div
                key={index}
                className="flex items-start gap-2 p-3 bg-navy-50 rounded-lg"
              >
                <Microscope size={16} className="text-navy-600 mt-0.5 flex-shrink-0" />
                <span className="text-navy-800 text-sm">{technique}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
