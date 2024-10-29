export type CompanyType = 'Founded' | 'Invested' | 'Brand' | 'Project';

export interface Project {
    id: string;
    name: string;
    description: string;
    longDescription?: string;
    status: 'MVP' | 'Growing' | 'Scaling' | 'Operating' | 'Exited';
    type: CompanyType;
    company?: string;
    metrics: string;
    logo: string;
    website?: string;
    industry: string;
    founded: string;
    team?: {
        size: number;
        locations: string[];
    };
    impact?: {
        metric: string;
        value: string;
    }[];
}

export const projects: Project[] = [
    {
        id: 'nutrified',
        name: 'Nutrified',
        type: 'Brand',
        company: 'Mineo',
        description: 'Sustainable logistics solution reducing carbon footprint in last-mile delivery.',
        longDescription: `GreenFlow is transforming last-mile delivery with our innovative approach to 
    sustainable logistics. By combining route optimization, electric vehicles, and carbon offsetting, 
    we're making urban delivery environmentally responsible.`,
        status: 'Growing',
        metrics: '45% CO2 reduction achieved',
        logo: '/companies/greenflow-logo.svg',
        website: 'https://greenflow.com',
        industry: 'Logistics',
        founded: '2021',
        impact: [
            { metric: 'CO2 Reduction', value: '45%' },
            { metric: 'Deliveries Optimized', value: '2M+' },
            { metric: 'Cities Covered', value: '15' }
        ]
    },
    {
        id: 'thecodeerogroup',
        name: 'The Codeero Group',
        type: 'Founded',
        description: 'AI-powered business intelligence platform helping SMEs make data-driven decisions.',
        longDescription: `TechVenture is revolutionizing how small and medium enterprises approach data analytics. 
    Our AI-powered platform democratizes access to sophisticated business intelligence tools, making them 
    accessible and actionable for businesses of all sizes.`,
        status: 'Operating',
        metrics: '120+ projects completed',
        logo: '/companies/techventure-logo.svg',
        website: 'https://www.codeero.com',
        industry: 'Creative Agency',
        founded: '2014',
        impact: [
            { metric: 'Data Points Analyzed', value: '1B+' },
            { metric: 'Average Revenue Increase', value: '27%' },
            { metric: 'Time Saved per Week', value: '12 hours' }
        ]
    },
    {
        id: 'tinypaws',
        name: 'Tiny Paws',
        type: 'Brand',
        description: 'Telemedicine platform connecting patients with mental health professionals.',
        longDescription: `HealthBridge is making mental healthcare accessible to everyone through our 
    innovative telemedicine platform. We're bridging the gap between patients and mental health 
    professionals, ensuring quality care is just a click away.`,
        status: 'MVP',
        metrics: '100k+ consultations delivered',
        logo: '/companies/healthbridge-logo.svg',
        website: 'https://healthbridge.care',
        industry: 'Healthcare',
        founded: '2024',
        impact: [
            { metric: 'Consultations', value: '100k+' },
            { metric: 'Patient Satisfaction', value: '4.8/5' },
            { metric: 'Average Wait Time', value: '< 24h' }
        ]
    },
    {
        id: 'recommended.by',
        name: 'recommended.by',
        type: 'Project',
        description: 'Next-generation data pipeline orchestration for modern data teams.',
        longDescription: `DataFlow is revolutionizing how data teams work with our intelligent pipeline 
    orchestration platform. We're making data workflows more reliable, observable, and efficient 
    through automation and AI-powered optimization.`,
        status: 'MVP',
        metrics: '250k+ pipelines automated',
        logo: '/companies/dataflow-logo.svg',
        website: 'https://dataflow.dev',
        industry: 'Data Infrastructure',
        founded: '2024',
        impact: [
            { metric: 'Pipelines Automated', value: '250k+' },
            { metric: 'Data Processing Time', value: '-65%' },
            { metric: 'Engineer Productivity', value: '+40%' }
        ]
    },
    {
        id: 'mineo',
        name: 'Mineo Minerals',
        type: 'Invested',
        description: 'Next-generation data pipeline orchestration for modern data teams.',
        longDescription: `DataFlow is revolutionizing how data teams work with our intelligent pipeline 
    orchestration platform. We're making data workflows more reliable, observable, and efficient 
    through automation and AI-powered optimization.`,
        status: 'MVP',
        metrics: '250k+ pipelines automated',
        logo: '/companies/dataflow-logo.svg',
        website: 'https://dataflow.dev',
        industry: 'Data Infrastructure',
        founded: '2024',
        impact: [
            { metric: 'Pipelines Automated', value: '250k+' },
            { metric: 'Data Processing Time', value: '-65%' },
            { metric: 'Engineer Productivity', value: '+40%' }
        ]
    },
    {
        id: 'domain-stories',
        name: 'Domain  Stories',
        type: 'Project',
        description: 'Next-generation data pipeline orchestration for modern data teams.',
        longDescription: `DataFlow is revolutionizing how data teams work with our intelligent pipeline 
    orchestration platform. We're making data workflows more reliable, observable, and efficient 
    through automation and AI-powered optimization.`,
        status: 'MVP',
        metrics: '250k+ pipelines automated',
        logo: '/companies/dataflow-logo.svg',
        website: 'https://dataflow.dev',
        industry: 'Data Infrastructure',
        founded: '2024',
        impact: [
            { metric: 'Pipelines Automated', value: '250k+' },
            { metric: 'Data Processing Time', value: '-65%' },
            { metric: 'Engineer Productivity', value: '+40%' }
        ]
    },
    {
        id: 'pawdcast',
        name: 'The Pawdcast',
        type: 'Brand',
        description: 'Next-generation data pipeline orchestration for modern data teams.',
        longDescription: `DataFlow is revolutionizing how data teams work with our intelligent pipeline 
    orchestration platform. We're making data workflows more reliable, observable, and efficient 
    through automation and AI-powered optimization.`,
        status: 'MVP',
        metrics: '250k+ pipelines automated',
        logo: '/companies/dataflow-logo.svg',
        website: 'https://dataflow.dev',
        industry: 'Data Infrastructure',
        founded: '2024',
        impact: [
            { metric: 'Pipelines Automated', value: '250k+' },
            { metric: 'Data Processing Time', value: '-65%' },
            { metric: 'Engineer Productivity', value: '+40%' }
        ]
    }
];