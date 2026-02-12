import { Download, MapPin, Mail, Globe, Calendar, Award, Users, BookOpen } from 'lucide-react';

interface Experience {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  thesis?: string;
}

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
}

const experience: Experience[] = [
  {
    title: 'Director of Breeding',
    organization: 'NuCicer Inc.',
    location: 'Davis, CA',
    period: 'May 2022 - April 2025',
    description: [
      'Directed all aspects of breeding program development, from strategic roadmap creation to large-scale field validation.',
      'Managed multi-location research, ensuring robust data collection under variable field conditions.',
      'Oversaw operational logistics, including client partnerships and testing infrastructure.',
      'Integrated advanced phenotyping tools and data-driven approaches to accelerate varietal deployment.',
      'Built and mentored cross-functional teams of scientists, field staff, and technical collaborators.'
    ]
  },
  {
    title: 'Project Scientist',
    organization: 'UC Davis Genome Center',
    location: 'Davis, CA',
    period: 'Nov 2016 - April 2022',
    description: [
      'Led program development for genomic resources and tools, specifically within the context of private-public collaborations for perennial crop improvement.',
      'Focused research on enhancing key traits in agricultural crops, contributing to global food quality and production.',
      'Applied advanced genomic techniques to accelerate crop breeding cycles and identify valuable genetic traits.'
    ]
  },
  {
    title: 'Research Scientist',
    organization: 'UC Davis Plant Sciences Department',
    location: 'Davis, CA',
    period: 'Dec 2010 - Oct 2016',
    description: [
      'Led field and controlled-environment experiments focused on crop physiology and stress adaptation.',
      'Coordinated molecular markers development and deployment for trait architecture characterization.',
      'Designed and implemented research strategies to identify underlying genetic variation controlling flowering time in spring wheat, contributing to improved crop management.'
    ]
  }
];

const education: Education[] = [
  {
    degree: 'PhD in Agricultural Sciences, School of Agronomy',
    institution: 'University of Buenos Aires',
    location: 'Argentina',
    year: 'Nov 2015',
    thesis: 'Gene identification and validation through functional genomics.'
  },
  {
    degree: 'BS/MS of Science, Biotechnology',
    institution: 'University of San Martin',
    location: 'Buenos Aires, Argentina',
    year: 'Nov 2010',
    thesis: 'Liver Fibrosis at the Gene Therapy Laboratory, Austral University Hospital, Argentina.'
  }
];

const selectedPublications: Publication[] = [
  {
    title: 'Layer-specific genetic variation unlocks secondary metabolite diversity in long-lived clonal peppermint',
    authors: 'Kippes N et al.',
    journal: 'In Press',
    year: '2025'
  },
  {
    title: 'Velvet: a peppermint type mint for oil production',
    authors: 'Kippes N et al.',
    journal: 'CSSA Crop Science',
    year: '2024'
  },
  {
    title: 'Diploid mint (M. longifolia) can produce spearmint type oil with a high yield potential',
    authors: 'Kippes N et al.',
    journal: 'Nature Sci Rep',
    year: '2021'
  },
  {
    title: 'Efficient construction of a linkage map and haplotypes for Mentha suaveolens using sequence capture',
    authors: 'Tsai H et al.',
    journal: 'G3',
    year: '2021'
  },
  {
    title: 'Effect of phyB and phyC loss-of-function mutations on the wheat transcriptome under short and long day photoperiods',
    authors: 'Kippes N et al.',
    journal: 'BMC Plant Biol',
    year: '2020'
  },
  {
    title: 'Single Nucleotide Polymorphisms in a regulatory site of VRN-A1 first intron are associated with differences in vernalization requirement length of winter wheat',
    authors: 'Kippes N et al.',
    journal: 'Mol Genet Genomics',
    year: '2018'
  },
  {
    title: 'RNA-seq studies using wheat PHYB and PHYC mutants reveal shared and specific functions in the regulation of flowering and shade-avoidance pathways',
    authors: 'Pearce S et al.',
    journal: 'BMC Plant Biol',
    year: '2016'
  },
  {
    title: 'Identification of the VERNALIZATION 4 gene reveals the origin of spring growth habit in ancient wheats from South Asia',
    authors: 'Kippes N et al.',
    journal: 'Proc Natl Acad Sci USA',
    year: '2015'
  }
];

const technicalSkills = [
  'Strong Molecular Biology background and laboratory experience',
  'Extensive Class II A2 Biosafety hands-on experience',
  'Project management platforms (GoodDay.work and customized solutions)',
  'Bash, R, R statistical packages',
  'Data Visualization',
  'Python',
  'LaTeX'
];

const leadershipCompetencies = [
  'Strategic Planning and Execution',
  'Project Scheduling and Coordination',
  'Stakeholder Relationship Management',
  'Risk Management and Problem Solving',
  'Team Leadership and Mentoring',
  'Cross-Functional Collaboration',
  'Resource Allocation and Budget Management',
  'Effective Communication Across Audiences'
];

const serviceAndPeerReview = [
  'Reviewer Editor, Editorial Board of Plant Genomics, Specialty Section of the journal Frontiers in Genetics (2023 - present)',
  'External Grant Reviewer: FONCYT - Agencia Nacional de Promocion de la Investigacion, Ministry of Science, Technology and Innovation, Argentina (2021)',
  'Section Topical Advisory Panel Members for Genetics, Genomics, Breeding, and Biotechnology (G2B2) - Horticulturae [MDPI] (2021 - current)',
  'Reviewer Board - Agriculture [MDPI] (2021 - current)'
];

const managementExperience = [
  'Plan and manage PVP trials and collect high-quality phenotype characterization data',
  'Manage expenses, budgets, and budget forecasting for PVP/IP data collection trials',
  'Train and develop field crews for high-quality data collection',
  'Perform accurate quality control, summarization, and storage of comparative trial data',
  'Manage seed movement related to IP workflows',
  'Coordinate with the IP group for timely data delivery for IP rights applications',
  'Drive process and technology improvements, including digital workflows',
  'Communicate with stakeholders on the status of phenotype trials and data quality',
  'Develop new processes and implement technologies for increased efficiency in PVP phenotyping activities'
];

export default function CV() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Curriculum Vitae
          </h1>
          
          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-1.5">
              <MapPin size={16} />
              <span>Woodland, California, 95695</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={16} />
              <span>nfkippes@gmail.com</span>
            </div>
          </div>

          {/* Nationality */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 bg-navy-50 text-navy-800 text-sm rounded-full">US Citizen</span>
            <span className="px-3 py-1 bg-navy-50 text-navy-800 text-sm rounded-full">Argentinean Citizen</span>
            <span className="px-3 py-1 bg-navy-50 text-navy-800 text-sm rounded-full">EU Citizen (Italian)</span>
          </div>

          {/* Professional Summary */}
          <div className="bg-navy-50 p-6 rounded-xl">
            <p className="text-gray-700 leading-relaxed">
              Dynamic, hands-on leader with over a decade of experience driving agricultural innovation from concept 
              to field deployment. Proven expertise in bridging R&D and technology validation to accelerate crop 
              improvement and enable real-world impact. Skilled at managing diverse teams, coordinating complex multi-
              disciplinary projects, and fostering partnerships with customers and technology developers. Passionate about 
              advancing scientific discoveries through robust testing infrastructure and translational research.
            </p>
          </div>

          <div className="mt-6">
            <button className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-3 rounded-full font-medium hover:bg-navy-800 transition-all duration-300 hover:shadow-lg">
              <Download size={18} />
              Download Resume
            </button>
          </div>
        </div>

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
            <Calendar size={22} />
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <h3 className="font-semibold text-navy-900 text-lg">{exp.title}</h3>
                    <p className="text-gray-700 font-medium">{exp.organization}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                  <span className="text-navy-700 font-medium text-sm bg-navy-50 px-3 py-1 rounded-full self-start">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-navy-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
            <BookOpen size={22} />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold text-navy-900">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.location}</p>
                  </div>
                  <span className="text-navy-700 font-medium text-sm bg-navy-50 px-3 py-1 rounded-full self-start">
                    {edu.year}
                  </span>
                </div>
                {edu.thesis && (
                  <p className="text-gray-600 text-sm italic">
                    Thesis: {edu.thesis}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
            <Award size={22} />
            Technical Skills
          </h2>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <ul className="space-y-2 text-gray-600">
              {technicalSkills.map((skill, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-navy-500 mt-1">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Selected Publications */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
            <BookOpen size={22} />
            Selected Publications
          </h2>
          <div className="space-y-4">
            {selectedPublications.map((pub, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-100">
                <p className="font-medium text-navy-900 text-sm">{pub.title}</p>
                <p className="text-gray-600 text-sm">{pub.authors}</p>
                <p className="text-navy-600 text-sm">{pub.journal}, {pub.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Competencies */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
            <Users size={22} />
            Leadership Competencies
          </h2>
          <div className="flex flex-wrap gap-2">
            {leadershipCompetencies.map((comp, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-navy-50 text-navy-800 text-sm font-medium rounded-full"
              >
                {comp}
              </span>
            ))}
          </div>
        </section>

        {/* Management Experience */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
            <Calendar size={22} />
            Management Experience
          </h2>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <ul className="space-y-3 text-gray-600">
              {managementExperience.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-navy-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Service and Peer Review */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
            <Award size={22} />
            Service and Peer Review
          </h2>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <ul className="space-y-3 text-gray-600 text-sm">
              {serviceAndPeerReview.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-navy-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
            <Globe size={22} />
            Languages
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white px-6 py-4 rounded-xl border border-gray-100 shadow-sm">
              <p className="font-medium text-navy-900">English</p>
              <p className="text-gray-500 text-sm">Full professional proficiency</p>
            </div>
            <div className="bg-white px-6 py-4 rounded-xl border border-gray-100 shadow-sm">
              <p className="font-medium text-navy-900">Spanish</p>
              <p className="text-gray-500 text-sm">Native</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
