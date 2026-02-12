import { useState, useEffect } from 'react';
import { ExternalLink, BookOpen, FileText, Award } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: string;
  volume?: string;
  pages?: string;
  doi?: string;
  type: 'journal' | 'book' | 'conference';
  citations: number;
  scholarLink?: string;
}

// Publications data from Google Scholar - ordered by year (newest to oldest)
const publicationsData: Publication[] = [
  {
    id: 1,
    title: 'Velvet: An alternative high-yielding peppermint clone for oil production',
    authors: 'N Kippes, D Culp, RG Wilson, E Dowd, L Comai, IM Henry',
    journal: 'Crop Science',
    year: '2025',
    volume: '65',
    pages: 'e21421',
    doi: '10.1002/csc2.21421',
    type: 'journal',
    citations: 0,
    scholarLink: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-m5FPboAAAAJ&citation_for_view=-m5FPboAAAAJ:2SFquFhkCoYC'
  },
  {
    id: 2,
    title: 'Chromosome-scale assembly of apple mint (Mentha suaveolens)',
    authors: 'A Firl, MC Lieberman, N Kippes, H Tsai, E Dowd, L Comai, IM Henry',
    journal: 'BMC Genomic Data',
    year: '2024',
    volume: '25',
    pages: '96',
    doi: '10.1186/s12863-024-01278-y',
    type: 'journal',
    citations: 3,
    scholarLink: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-m5FPboAAAAJ&citation_for_view=-m5FPboAAAAJ:yL7DKRohVA8C'
  },
  {
    id: 3,
    title: 'Diploid mint (M. longifolia) can produce spearmint type oil with a high yield potential',
    authors: 'N Kippes, H Tsai, M Lieberman, D Culp, B McCormack, RG Wilson, E Dowd, L Comai, IM Henry',
    journal: 'Scientific Reports',
    year: '2021',
    volume: '11',
    pages: '23521',
    doi: '10.1038/s41598-021-02835-6',
    type: 'journal',
    citations: 10,
    scholarLink: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-m5FPboAAAAJ&citation_for_view=-m5FPboAAAAJ:rCzfLUpcSPoC'
  },
  {
    id: 4,
    title: 'Efficient construction of a linkage map and haplotypes for Mentha suaveolens using sequence capture',
    authors: 'H Tsai, N Kippes, A Firl, M Lieberman, L Comai, IM Henry',
    journal: 'G3: Genes, Genomes, Genetics',
    year: '2021',
    volume: '11',
    pages: 'jkab232',
    doi: '10.1093/g3journal/jkab232',
    type: 'journal',
    citations: 3,
    scholarLink: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-m5FPboAAAAJ&citation_for_view=-m5FPboAAAAJ:FwTEoIZreccC'
  },
  {
    id: 5,
    title: 'Effect of phyB and phyC loss-of-function mutations on the wheat transcriptome under short and long day photoperiods',
    authors: 'N Kippes, C VanGessel, J Hamilton, A Akpinar, H Budak, J Dubcovsky, J Debernardi',
    journal: 'BMC Plant Biology',
    year: '2020',
    volume: '20',
    pages: '297',
    doi: '10.1186/s12870-020-02479-2',
    type: 'journal',
    citations: 44,
    scholarLink: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-m5FPboAAAAJ&citation_for_view=-m5FPboAAAAJ:LNjCCq68lIgC'
  },
  {
    id: 6,
    title: 'Single nucleotide polymorphisms in a regulatory site of VRN-A1 first intron are associated with differences in vernalization requirement in winter wheat',
    authors: 'N Kippes, M Guedira, L Lin, MA Alvarez, GL Brown-Guedira, J Dubcovsky',
    journal: 'Molecular Genetics and Genomics',
    year: '2018',
    volume: '293',
    pages: '1231-1243',
    doi: '10.1007/s00438-018-1455-0',
    type: 'journal',
    citations: 51,
    scholarLink: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-m5FPboAAAAJ&citation_for_view=-m5FPboAAAAJ:it4f3qIuXWYC'
  },
  {
    id: 7,
    title: 'RNA-seq studies using wheat PHYTOCHROME B and PHYTOCHROME C mutants reveal shared and specific functions in the regulation of flowering and shade-avoidance pathways',
    authors: 'S Pearce, N Kippes, A Chen, JM Debernardi, J Dubcovsky',
    journal: 'BMC Plant Biology',
    year: '2016',
    volume: '16',
    pages: '141',
    doi: '10.1186/s12870-016-0831-3',
    type: 'journal',
    citations: 103,
    scholarLink: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-m5FPboAAAAJ&citation_for_view=-m5FPboAAAAJ:rqnDXT1GswoC'
  },
  {
    id: 8,
    title: 'Identification of the VERNALIZATION 4 gene reveals the origin of spring growth habit in ancient wheats from South Asia',
    authors: 'N Kippes, JM Debernardi, HA Vasquez-Gross, BA Akpinar, H Budak, M Alpinar, J Dubcovsky',
    journal: 'Proceedings of the National Academy of Sciences',
    year: '2015',
    volume: '112',
    pages: 'E5401-E5410',
    doi: '10.1073/pnas.1514883112',
    type: 'journal',
    citations: 196,
    scholarLink: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-m5FPboAAAAJ&citation_for_view=-m5FPboAAAAJ:sgsej9ZJWHMC'
  },
  {
    id: 9,
    title: 'Genetic and physical mapping of the earliness per se locus Eps-Am1 in Triticum monococcum identifies EARLY FLOWERING 3 (ELF3) as a candidate gene',
    authors: 'MA Alvarez, G Tranquilli, S Lewis, N Kippes, J Dubcovsky',
    journal: 'Functional & Integrative Genomics',
    year: '2016',
    volume: '16',
    pages: '365-382',
    doi: '10.1007/s10142-016-0480-3',
    type: 'journal',
    citations: 126,
    scholarLink: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-m5FPboAAAAJ&citation_for_view=-m5FPboAAAAJ:w2UhwfzvF0QC'
  },
  {
    id: 10,
    title: 'Fine mapping and epistatic interactions of the vernalization gene VRN-D4 in hexaploid wheat',
    authors: 'N Kippes, J Zhu, A Chen, L Vanzetti, A Lukaszewski, H Nishida, K Kato, J Dubcovsky',
    journal: 'Molecular Genetics and Genomics',
    year: '2014',
    volume: '289',
    pages: '47-62',
    doi: '10.1007/s00438-013-0784-y',
    type: 'journal',
    citations: 87,
    scholarLink: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-m5FPboAAAAJ&citation_for_view=-m5FPboAAAAJ:l6Q3WhenKVUC'
  },
  {
    id: 11,
    title: 'Development and characterization of a spring hexaploid wheat line with no functional VRN2 genes',
    authors: 'N Kippes, A Chen, X Zhang, AJ Lukaszewski, J Dubcovsky',
    journal: 'Theoretical and Applied Genetics',
    year: '2016',
    volume: '129',
    pages: '1417-1428',
    doi: '10.1007/s00122-016-2714-3',
    type: 'journal',
    citations: 62,
    scholarLink: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-m5FPboAAAAJ&citation_for_view=-m5FPboAAAAJ:AFmTUeZ1pmEC'
  },
  {
    id: 12,
    title: 'Lack of the matricellular protein SPARC (secreted protein, acidic and rich in cysteine) attenuates liver fibrogenesis in mice',
    authors: 'C Atorrasagasti, E Peixoto, JB Aquino, N Kippes, M Malvicini, L Alaniz, M Garcia, G Mazzolini',
    journal: 'PloS One',
    year: '2013',
    volume: '8',
    pages: 'e54962',
    doi: '10.1371/journal.pone.0054962',
    type: 'journal',
    citations: 72,
    scholarLink: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-m5FPboAAAAJ&citation_for_view=-m5FPboAAAAJ:EBV337fEn3EC'
  },
  {
    id: 13,
    title: 'Antitumor effects of hyaluronic acid inhibitor 4-methylumbelliferone in an orthotopic hepatocellular carcinoma model in mice',
    authors: 'F Piccioni, M Malvicini, MG Garcia, A Rodriguez, C Atorrasagasti, N Kippes, M Alaniz, M Bayo, J Aquino, M Garcia, G Mazzolini',
    journal: 'Glycobiology',
    year: '2012',
    volume: '22',
    pages: '400-410',
    doi: '10.1093/glycob/cwr140',
    type: 'journal',
    citations: 130,
    scholarLink: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-m5FPboAAAAJ&citation_for_view=-m5FPboAAAAJ:SrKkpNFED5gC'
  },
  {
    id: 14,
    title: 'Chromosome-scale assembly of a polyploid mint (Mentha aquatica var citrata 14)',
    authors: 'M Lieberman, N Kippes, L Comai, IM Henry',
    journal: 'Figshare',
    year: '2025',
    doi: '10.6084/m9.figshare.28372607',
    type: 'journal',
    citations: 0,
    scholarLink: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-m5FPboAAAAJ&citation_for_view=-m5FPboAAAAJ:TewouNez5YAC'
  },
  {
    id: 15,
    title: 'Clonado posicional del gen VRN-D4 en trigo hexaploide (Triticum aestivum)',
    authors: 'J Dubcovsky, GE Tranquilli, ML Appendino, NF Kippes',
    journal: 'XIV Latin American Plant Breeding Congress',
    year: '2015',
    type: 'conference',
    citations: 0,
    scholarLink: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-m5FPboAAAAJ&citation_for_view=-m5FPboAAAAJ:dJ_BR67V0s4C'
  },
  {
    id: 16,
    title: 'Attenuated Liver Fibrogenesis In SPARC deficient Mice',
    authors: 'C Atorrasagasti, JB Aquino, N Kippes, M Malvicini, L Alaniz, MG Garcia, G Mazzolini',
    journal: 'Hepatology',
    year: '2011',
    volume: '54',
    pages: '743A',
    type: 'journal',
    citations: 0,
    scholarLink: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-m5FPboAAAAJ&citation_for_view=-m5FPboAAAAJ:DQNrXyjhriIC'
  },
  {
    id: 17,
    title: 'Clonado posicional del gen VRN-D4 en trigo hexaploide (Triticum aestivum)',
    authors: 'NF Kippes',
    journal: 'Universidad de Buenos Aires',
    year: '2010',
    type: 'book',
    citations: 0,
    scholarLink: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-m5FPboAAAAJ&citation_for_view=-m5FPboAAAAJ:nbnL2fqDbzcC'
  },
  {
    id: 18,
    title: 'Using a Combination of Sequencing Methods for Improved de novo Genome Assembly',
    authors: 'AJ Firl, N Kippes, E Dowd, L Comai, IM Henry',
    journal: 'Plant and Animal Genome XXVI Conference',
    year: '2018',
    type: 'conference',
    citations: 0,
    scholarLink: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-m5FPboAAAAJ&citation_for_view=-m5FPboAAAAJ:GdZ7R06HQM4C'
  }
];

// Google Scholar metrics (as of last check)
const scholarMetrics = {
  totalCitations: 887,
  citationsSince2021: 461,
  hIndex: 10,
  hIndexSince2021: 10,
  i10Index: 10,
  i10IndexSince2021: 10,
  profileUrl: 'https://scholar.google.com/citations?user=-m5FPboAAAAJ&hl=en'
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'journal':
      return <FileText size={18} className="text-navy-600" />;
    case 'book':
      return <BookOpen size={18} className="text-navy-600" />;
    default:
      return <FileText size={18} className="text-navy-600" />;
  }
};

export default function Publications() {
  const [publications] = useState<Publication[]>(publicationsData);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    // Set last updated date
    const now = new Date();
    setLastUpdated(now.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }));
  }, []);

  // Get only the most cited publication
  const mostCitedPublication = publications.reduce((max, pub) => pub.citations > max.citations ? pub : max, publications[0]);
  // All other publications excluding the most cited one
  const otherPublications = publications.filter(p => p.id !== mostCitedPublication.id);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Peer-Reviewed Publications
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Peer-reviewed publications in leading scientific journals, focusing on wheat genetics, 
            molecular biology, and crop improvement.
          </p>
          
          {/* Scholar Stats */}
          <div className="mt-8 p-6 bg-gradient-to-r from-navy-50 to-white rounded-xl border border-navy-100">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <h3 className="font-semibold text-navy-900">Google Scholar Metrics</h3>
              <a 
                href={scholarMetrics.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-navy-600 hover:text-navy-800 flex items-center gap-1"
              >
                View Profile
                <ExternalLink size={14} />
              </a>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <span className="text-3xl font-bold text-navy-900">{scholarMetrics.totalCitations}</span>
                <p className="text-gray-500 text-sm">All Time Citations</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-navy-900">{scholarMetrics.citationsSince2021}</span>
                <p className="text-gray-500 text-sm">Since 2021</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-navy-900">{scholarMetrics.hIndex}</span>
                <p className="text-gray-500 text-sm">h-index</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-navy-900">{scholarMetrics.i10Index}</span>
                <p className="text-gray-500 text-sm">i10-index</p>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 mt-4 text-right">
              Last updated: {lastUpdated} from Google Scholar
            </p>
          </div>
        </div>

        {/* Most Cited Publication */}
        {mostCitedPublication && (
          <section className="mb-12">
            <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 flex items-center gap-2">
              <Award size={24} className="text-amber-500" />
              Most Cited Publication
            </h2>
            <article className="bg-gradient-to-r from-navy-50 to-white p-6 rounded-xl border border-navy-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getTypeIcon(mostCitedPublication.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-navy-900 text-lg mb-2 leading-snug">
                    {mostCitedPublication.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{mostCitedPublication.authors}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    <span className="font-medium text-navy-700">{mostCitedPublication.journal}</span>
                    <span className="text-gray-500">{mostCitedPublication.year}</span>
                    {mostCitedPublication.volume && <span className="text-gray-500">Vol. {mostCitedPublication.volume}</span>}
                    {mostCitedPublication.pages && <span className="text-gray-500">pp. {mostCitedPublication.pages}</span>}
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    {mostCitedPublication.doi && (
                      <a
                        href={`https://doi.org/${mostCitedPublication.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-navy-600 hover:text-navy-800 text-sm hover:underline"
                      >
                        DOI: {mostCitedPublication.doi}
                        <ExternalLink size={12} />
                      </a>
                    )}
                    {mostCitedPublication.scholarLink && (
                      <a
                        href={mostCitedPublication.scholarLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-navy-600 hover:text-navy-800 text-sm hover:underline"
                      >
                        Google Scholar
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex-shrink-0 text-right hidden sm:block">
                  <span className="text-2xl font-bold text-navy-900">{mostCitedPublication.citations}</span>
                  <p className="text-gray-500 text-xs">citations</p>
                </div>
              </div>
            </article>
          </section>
        )}

        {/* All Publications */}
        <section>
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6">
            All Publications
          </h2>
          <div className="space-y-4">
            {otherPublications.map((pub) => (
              <article
                key={pub.id}
                className="bg-white p-5 rounded-lg border border-gray-100 hover:border-navy-200 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {getTypeIcon(pub.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-navy-900 mb-1 leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">{pub.authors}</p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
                      <span className="font-medium text-navy-600">{pub.journal}</span>
                      <span>{pub.year}</span>
                      {pub.volume && <span>Vol. {pub.volume}</span>}
                      {pub.pages && <span>pp. {pub.pages}</span>}
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-navy-600 hover:text-navy-800 text-sm hover:underline"
                        >
                          {pub.doi}
                          <ExternalLink size={12} />
                        </a>
                      )}
                      {pub.scholarLink && (
                        <a
                          href={pub.scholarLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-navy-600 hover:text-navy-800 text-sm hover:underline"
                        >
                          Scholar
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                  {pub.citations > 0 && (
                    <div className="flex-shrink-0 text-right hidden sm:block">
                      <span className="text-lg font-semibold text-navy-800">{pub.citations}</span>
                      <p className="text-gray-400 text-xs">citations</p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Citation counts are dynamically retrieved from{' '}
            <a 
              href={scholarMetrics.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-600 hover:underline"
            >
              Google Scholar
            </a>
            . Last updated: {lastUpdated}
          </p>
        </div>
      </div>
    </div>
  );
}
