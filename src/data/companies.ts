export interface Company {
    id: string;
    name: string;
    description: string;
    longDescription?: string;
    status: 'Early Growth' | 'Growing' | 'Scaling';
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

export const companies: Company[] = [
    {
        id: 'techventure',
        name: 'TechVenture',
        description: 'AI-powered business intelligence platform helping SMEs make data-driven decisions.',
        longDescription: `TechVenture is revolutionizing how small and medium enterprises approach data analytics. 
    Our AI-powered platform democratizes access to sophisticated business intelligence tools, making them 
    accessible and actionable for businesses of all sizes.`,
        status: 'Growing',
        metrics: '500k+ monthly active users',
        logo: '/companies/techventure-logo.svg',
        website: 'https://techventure.com',
        industry: 'Enterprise Software',
        founded: '2022',
        team: {
            size: 45,
            locations: ['San Francisco', 'London', 'Singapore']
        },
        impact: [
            { metric: 'Data Points Analyzed', value: '1B+' },
            { metric: 'Average Revenue Increase', value: '27%' },
            { metric: 'Time Saved per Week', value: '12 hours' }
        ]
    },
    {
        id: 'greenflow',
        name: 'GreenFlow',
        description: 'Sustainable logistics solution reducing carbon footprint in last-mile delivery.',
        longDescription: `GreenFlow is transforming last-mile delivery with our innovative approach to 
    sustainable logistics. By combining route optimization, electric vehicles, and carbon offsetting, 
    we're making urban delivery environmentally responsible.`,
        status: 'Scaling',
        metrics: '45% CO2 reduction achieved',
        logo: '/companies/greenflow-logo.svg',
        website: 'https://greenflow.com',
        industry: 'Logistics',
        founded: '2021',
        team: {
            size: 120,
            locations: ['Amsterdam', 'Berlin', 'Paris']
        },
        impact: [
            { metric: 'CO2 Reduction', value: '45%' },
            { metric: 'Deliveries Optimized', value: '2M+' },
            { metric: 'Cities Covered', value: '15' }
        ]
    },
    {
        id: 'healthbridge',
        name: 'HealthBridge',
        description: 'Telemedicine platform connecting patients with mental health professionals.',
        longDescription: `HealthBridge is making mental healthcare accessible to everyone through our 
    innovative telemedicine platform. We're bridging the gap between patients and mental health 
    professionals, ensuring quality care is just a click away.`,
        status: 'Early Growth',
        metrics: '100k+ consultations delivered',
        logo: '/companies/healthbridge-logo.svg',
        website: 'https://healthbridge.care',
        industry: 'Healthcare',
        founded: '2023',
        team: {
            size: 28,
            locations: ['Boston', 'Toronto']
        },
        impact: [
            { metric: 'Consultations', value: '100k+' },
            { metric: 'Patient Satisfaction', value: '4.8/5' },
            { metric: 'Average Wait Time', value: '< 24h' }
        ]
    },
    {
        id: 'dataflow',
        name: 'DataFlow',
        description: 'Next-generation data pipeline orchestration for modern data teams.',
        longDescription: `DataFlow is revolutionizing how data teams work with our intelligent pipeline 
    orchestration platform. We're making data workflows more reliable, observable, and efficient 
    through automation and AI-powered optimization.`,
        status: 'Growing',
        metrics: '250k+ pipelines automated',
        logo: '/companies/dataflow-logo.svg',
        website: 'https://dataflow.dev',
        industry: 'Data Infrastructure',
        founded: '2022',
        team: {
            size: 35,
            locations: ['Seattle', 'Vancouver']
        },
        impact: [
            { metric: 'Pipelines Automated', value: '250k+' },
            { metric: 'Data Processing Time', value: '-65%' },
            { metric: 'Engineer Productivity', value: '+40%' }
        ]
    }
];