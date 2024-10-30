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
        size?: number;
        locations?: string[];
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
        company: 'Mineo Minerals',
        description: 'A pet wellness brand creating all-natural, sustainable supplements for four-legged friends.',
        longDescription: `Nutrified is a brand that develops innovative and sustainable all-natural pet supplements. Their flagship "Pure Goodness" product line includes two main products: "For Happy Tummies" (a natural zeolite supplement for digestive health) and "For Healthy Minds" (a 2% CBD oil for mental wellbeing). The brand emphasizes natural ingredients, sustainability, and has been awarded both Zoology Diamonds and Zoology Diamonds for Nature certifications in 2023 for their commitment to quality and environmental responsibility.`,
        status: 'Growing',
        metrics: 'Expanding across European markets, shipping to over 32 countries.',
        logo: '/companies/nutrified.png',
        website: 'www.nutrified.com',
        industry: 'E-Commerce',
        founded: '2021',
        impact: [
            { metric: 'Donations', value: '10.000€ +' },
            { metric: 'Environmental Impact', value: 'CO2 reduction, all-natural products' },
            { metric: 'Return Customers', value: '83%' },
        ],
        team: {
            locations: ["Limassol (CY), Kraków (PL)"]
        }
    },
    {
        id: 'thecodeerogroup',
        name: 'The Codeero Group',
        type: 'Founded',
        company: 'Startup',
        description: 'Creative Agency creating immersive experiences off- and on-line.',
        longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra molestie ipsum, sed pretium turpis. Vestibulum facilisis, justo consectetur fermentum feugiat, nunc dolor sollicitudin sem, sit amet porta magna lectus in magna. Integer id elementum enim, vel rhoncus lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Nullam eget turpis semper, aliquet mauris vel, mollis tellus. Mauris malesuada tortor vel eros maximus ultricies.`,
        status: 'Operating',
        metrics: '120+ projects completed',
        logo: '/companies/tcg.png',
        website: 'www.codeero.com',
        industry: 'Creative Agency',
        founded: '2014',
        impact: [
            { metric: 'Clients', value: '75' },
            { metric: 'International Events', value: '32' },
            { metric: 'Projects Completed', value: '120+' }
        ]
    },
    {
        id: 'tinypaws',
        name: 'Tiny Paws',
        type: 'Brand',
        company: 'Nutrified',
        description: 'The app & community for making pawsome memories.',
        longDescription: `Proin convallis sodales tempor. Nullam ultrices risus non ullamcorper bibendum. Donec eget magna vitae nisl tristique convallis. Nam consectetur sed nibh sed pharetra. Nam nec velit bibendum, convallis odio nec, venenatis nulla. Fusce accumsan quis lectus eu porta. Etiam quis vestibulum risus. Sed lobortis arcu vitae leo aliquam, ac semper odio tempus.`,
        status: 'MVP',
        metrics: '100k+ consultations delivered',
        logo: '/companies/tinypaws.png',
        website: 'tinypaws.com',
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
        company: 'Experiments',
        description: 'Easily share recommendations on a memorable link.',
        longDescription: `Sed aliquet sed mi sit amet vulputate. Proin facilisis fermentum orci, quis porttitor lacus porta a. Nullam eleifend elementum purus non hendrerit. Aliquam vitae aliquam massa, id hendrerit odio. Curabitur non rhoncus libero. Morbi nulla odio, aliquam non velit non, ullamcorper porta diam. Nam pretium interdum efficitur. Fusce auctor lorem tellus, ac pulvinar odio dapibus in. Curabitur sed volutpat nunc. Duis pharetra consequat mauris ut sodales. Proin finibus dictum iaculis. Ut sed dolor mollis, mollis risus vel, rutrum neque. Sed feugiat ante ut lacus sollicitudin tincidunt. Fusce risus nulla, aliquet at cursus a, vestibulum in ipsum.`,
        status: 'MVP',
        metrics: '250k+ pipelines automated',
        logo: '/companies/recommendedby.png',
        website: 'recommended.by',
        industry: 'SaaS',
        founded: '2023',
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
        company: 'Startup',
        description: 'Research and Development Startup bringing all natural products to the consumer market.',
        longDescription: `Etiam elit ex, consectetur et elementum sed, fermentum id libero. Vestibulum vel ornare tellus, eu posuere neque. Etiam eu porta arcu. Nam vitae fringilla lorem, et scelerisque ipsum. Aliquam erat volutpat. Nunc id pretium velit, vel hendrerit velit. In tristique quam velit. Quisque ligula risus, imperdiet vitae congue quis, mollis eu mauris. Nunc nec eros volutpat, convallis tortor id, interdum lacus. Quisque pretium maximus mattis. Aliquam sit amet ligula eget sem consectetur vulputate. Sed vel nunc euismod, imperdiet nunc ut, tincidunt quam. Etiam tincidunt non lectus eget sagittis. Vivamus tortor purus, fermentum in malesuada eget, iaculis non elit. Vivamus vitae massa enim. Nullam auctor dignissim auctor.`,
        status: 'MVP',
        metrics: '250k+ pipelines automated',
        logo: '/companies/mineo.png',
        website: 'mineo.cy',
        industry: 'Research & Development',
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
        company: 'Experiments',
        description: 'Get inspired by the stories behind the largest domain acquisitions.',
        longDescription: `Nullam ullamcorper in dolor eget eleifend. Vivamus tincidunt malesuada felis, id posuere massa accumsan eget. Nam at felis nulla. Proin eu quam id enim tincidunt volutpat. Aenean eu faucibus diam, eget tincidunt leo. Duis euismod justo sit amet mauris finibus ultricies. Proin venenatis, velit nec cursus fringilla, magna tellus posuere odio, nec iaculis ex nunc ornare nulla. Donec tellus ante, pulvinar et semper in, imperdiet vel eros. Vivamus rutrum nulla non euismod ullamcorper. Pellentesque eu hendrerit augue. Suspendisse ac accumsan justo. Etiam vel nibh ornare, sollicitudin nunc sit amet, posuere eros. Integer eu imperdiet elit, eget suscipit est. Nam tempor eros odio, vel rhoncus nibh tempus ut.`,
        status: 'MVP',
        metrics: '250k+ pipelines automated',
        logo: '/companies/domainstories.png',
        website: 'domain-stories.com',
        industry: 'Blog',
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
        company: 'Nutrified',
        description: 'You know Podcasts. You love your friends on Paws. The best of both worlds.',
        longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra molestie ipsum, sed pretium turpis. Vestibulum facilisis, justo consectetur fermentum feugiat, nunc dolor sollicitudin sem, sit amet porta magna lectus in magna. Integer id elementum enim, vel rhoncus lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Nullam eget turpis semper, aliquet mauris vel, mollis tellus. Mauris malesuada tortor vel eros maximus ultricies.`,
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
        id: 'domain-details',
        name: 'DomainDetails.io',
        type: 'Project',
        company: 'Experiments',
        description: 'Next generation domain information lookup using RDAP.',
        longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra molestie ipsum, sed pretium turpis. Vestibulum facilisis, justo consectetur fermentum feugiat, nunc dolor sollicitudin sem, sit amet porta magna lectus in magna. Integer id elementum enim, vel rhoncus lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Nullam eget turpis semper, aliquet mauris vel, mollis tellus. Mauris malesuada tortor vel eros maximus ultricies.`,
        status: 'MVP',
        metrics: '250k+ pipelines automated',
        logo: '/companies/dataflow-logo.svg',
        website: 'https://dataflow.dev',
        industry: 'SaaA',
        founded: '2024',
        impact: [
            { metric: 'Pipelines Automated', value: '250k+' },
            { metric: 'Data Processing Time', value: '-65%' },
            { metric: 'Engineer Productivity', value: '+40%' }
        ]
    },
    {
        id: 'ampawssadors',
        name: 'Ampawssadors',
        type: 'Brand',
        company: 'Nutrified',
        description: 'Four Legged Brand Ambassadors who love the Nutrified brand.',
        longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra molestie ipsum, sed pretium turpis. Vestibulum facilisis, justo consectetur fermentum feugiat, nunc dolor sollicitudin sem, sit amet porta magna lectus in magna. Integer id elementum enim, vel rhoncus lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Nullam eget turpis semper, aliquet mauris vel, mollis tellus. Mauris malesuada tortor vel eros maximus ultricies.`,
        status: 'MVP',
        metrics: '100k+ consultations delivered',
        logo: '/companies/healthbridge-logo.svg',
        website: 'https://healthbridge.care',
        industry: 'Healthcare',
        founded: '2023',
        impact: [
            { metric: 'Consultations', value: '100k+' },
            { metric: 'Patient Satisfaction', value: '4.8/5' },
            { metric: 'Average Wait Time', value: '< 24h' }
        ]
    },
    {
        id: 'impactofcom',
        name: 'impactof.com',
        type: 'Founded',
        company: 'Brokerage',
        description: 'Premium .com domain names for sale and LTO.',
        longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra molestie ipsum, sed pretium turpis. Vestibulum facilisis, justo consectetur fermentum feugiat, nunc dolor sollicitudin sem, sit amet porta magna lectus in magna. Integer id elementum enim, vel rhoncus lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Nullam eget turpis semper, aliquet mauris vel, mollis tellus. Mauris malesuada tortor vel eros maximus ultricies.`,
        status: 'Operating',
        metrics: '100k+ consultations delivered',
        logo: '/companies/impactofcom.png',
        website: 'impactof.com',
        industry: 'Premium Domains',
        founded: '2023',
        impact: [
            { metric: 'Premium Domains', value: '120+' },
            { metric: 'Portfolio Value', value: '1.300.000 USD' },
            { metric: 'Sales Volume', value: '1.000.000+ USD' }
        ]
    }
];