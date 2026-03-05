// States covered
export const STATES = ['Louisiana', 'Mississippi', 'Arkansas', 'Tennessee', 'Georgia'] as const;
export type CoveredState = typeof STATES[number];
export const STATE_ABBR: Record<CoveredState, string> = {
  Louisiana: 'LA', Mississippi: 'MS', Arkansas: 'AR', Tennessee: 'TN', Georgia: 'GA'
};

// Projects
export const projects = [
  { id: 'P-001', name: 'Baton Rouge Water AMI', client: 'Baton Rouge Water Company', state: 'Louisiana' as CoveredState, status: 'Active', metersDeployed: 12450, metersTotal: 18000, collectors: 45, networkHealth: 97, aldStatus: 'Monitoring', startDate: '2025-06-15', endDate: '2026-03-30', budget: 4200000, spent: 2850000, progress: 69 },
  { id: 'P-002', name: 'Jackson Municipal AMI', client: 'Jackson Municipal Water', state: 'Mississippi' as CoveredState, status: 'Active', metersDeployed: 8200, metersTotal: 15000, collectors: 38, networkHealth: 94, aldStatus: 'Monitoring', startDate: '2025-08-01', endDate: '2026-06-15', budget: 3500000, spent: 1900000, progress: 55 },
  { id: 'P-003', name: 'Little Rock Utility AMI', client: 'Little Rock Water Utility', state: 'Arkansas' as CoveredState, status: 'Planning', metersDeployed: 0, metersTotal: 22000, collectors: 0, networkHealth: 0, aldStatus: 'Pending', startDate: '2026-01-15', endDate: '2027-01-30', budget: 5100000, spent: 150000, progress: 3 },
  { id: 'P-004', name: 'Memphis Regional AMI', client: 'Memphis Light Gas & Water', state: 'Tennessee' as CoveredState, status: 'Active', metersDeployed: 18500, metersTotal: 25000, collectors: 62, networkHealth: 98, aldStatus: 'Monitoring', startDate: '2025-03-01', endDate: '2026-02-28', budget: 6000000, spent: 4400000, progress: 74 },
  { id: 'P-005', name: 'Savannah Water AMI', client: 'City of Savannah Water', state: 'Georgia' as CoveredState, status: 'Completed', metersDeployed: 9800, metersTotal: 9800, collectors: 28, networkHealth: 99, aldStatus: 'Active', startDate: '2024-11-01', endDate: '2025-09-30', budget: 2800000, spent: 2650000, progress: 100 },
  { id: 'P-006', name: 'Atlanta Metro AMI Phase 1', client: 'Atlanta Department of Watershed', state: 'Georgia' as CoveredState, status: 'Active', metersDeployed: 5200, metersTotal: 35000, collectors: 15, networkHealth: 96, aldStatus: 'Monitoring', startDate: '2025-10-01', endDate: '2027-06-30', budget: 8500000, spent: 1200000, progress: 15 },
];

// Bids & RFPs
export const bids = [
  { id: 'B-001', title: 'Monroe Water District AMI Upgrade', agency: 'Monroe Water District', state: 'Louisiana' as CoveredState, dueDate: '2026-03-25', scope: 'Full AMI deployment', meters: 8500, status: 'In Progress', estimator: 'John Davis', pricingReview: 'Pending', estimatedValue: 2100000 },
  { id: 'B-002', title: 'Tupelo Municipal AMI', agency: 'City of Tupelo', state: 'Mississippi' as CoveredState, dueDate: '2026-04-10', scope: 'AMI + ALD monitoring', meters: 12000, status: 'Draft', estimator: 'Sarah Miller', pricingReview: 'Not Started', estimatedValue: 3200000 },
  { id: 'B-003', title: 'Hot Springs Water AMI', agency: 'Hot Springs Utilities', state: 'Arkansas' as CoveredState, dueDate: '2026-03-15', scope: 'Collector network + meters', meters: 6000, status: 'Submitted', estimator: 'John Davis', pricingReview: 'Approved', estimatedValue: 1500000 },
  { id: 'B-004', name: 'Chattanooga AMI Phase 2', title: 'Chattanooga AMI Phase 2', agency: 'Chattanooga Public Works', state: 'Tennessee' as CoveredState, dueDate: '2026-05-01', scope: 'Phase 2 expansion', meters: 20000, status: 'Reviewing', estimator: 'Mike Chen', pricingReview: 'In Review', estimatedValue: 4800000 },
  { id: 'B-005', title: 'Macon Water Authority AMI', agency: 'Macon Water Authority', state: 'Georgia' as CoveredState, dueDate: '2026-04-20', scope: 'Full AMI + NaaS', meters: 15000, status: 'In Progress', estimator: 'Sarah Miller', pricingReview: 'Pending', estimatedValue: 3900000 },
];

// Sales pipeline
export const salesPipeline = [
  { id: 'S-001', opportunity: 'Shreveport Water AMI', state: 'Louisiana' as CoveredState, stage: 'Qualification', value: 3200000, probability: 25, salesperson: 'Robert Wilson', nextMeeting: '2026-03-12' },
  { id: 'S-002', opportunity: 'Biloxi Coastal AMI', state: 'Mississippi' as CoveredState, stage: 'Proposal', value: 2100000, probability: 60, salesperson: 'Linda Taylor', nextMeeting: '2026-03-18' },
  { id: 'S-003', opportunity: 'Fort Smith Water Upgrade', state: 'Arkansas' as CoveredState, stage: 'Negotiation', value: 1800000, probability: 75, salesperson: 'Robert Wilson', nextMeeting: '2026-03-10' },
  { id: 'S-004', opportunity: 'Nashville Metro Water', state: 'Tennessee' as CoveredState, stage: 'Discovery', value: 7500000, probability: 15, salesperson: 'Amanda Brooks', nextMeeting: '2026-03-20' },
  { id: 'S-005', opportunity: 'Augusta Utility AMI', state: 'Georgia' as CoveredState, stage: 'Closed Won', value: 2800000, probability: 100, salesperson: 'Linda Taylor', nextMeeting: null },
  { id: 'S-006', opportunity: 'New Orleans East AMI', state: 'Louisiana' as CoveredState, stage: 'Proposal', value: 4100000, probability: 50, salesperson: 'Amanda Brooks', nextMeeting: '2026-03-15' },
];

// Software development projects
export const devProjects = [
  { id: 'D-001', name: 'ETEC Project Tracker', description: 'Internal project management tool', status: 'In Development', progress: 65, techStack: 'React, Supabase', deployStatus: 'Staging' },
  { id: 'D-002', name: 'Inventory Management System', description: 'Warehouse and equipment tracking', status: 'Testing', progress: 85, techStack: 'React, PostgreSQL', deployStatus: 'QA' },
  { id: 'D-003', name: 'Bid Automation Tool', description: 'Automated proposal generation', status: 'Planning', progress: 15, techStack: 'React, AI/LLM', deployStatus: 'Not Deployed' },
  { id: 'D-004', name: 'Field Service App', description: 'Mobile app for technicians', status: 'In Development', progress: 40, techStack: 'React Native', deployStatus: 'Dev' },
  { id: 'D-005', name: 'Analytics Dashboard', description: 'Executive reporting and insights', status: 'Deployed', progress: 100, techStack: 'React, Recharts', deployStatus: 'Production' },
];

// Service tickets
export const serviceTickets = [
  { id: 'ST-001', title: 'Collector #23 offline - Baton Rouge', project: 'P-001', priority: 'High', status: 'Open', assignee: 'Mike Torres', created: '2026-03-03', utility: 'Baton Rouge Water Company' },
  { id: 'ST-002', title: 'Meter read failures - Zone 4', project: 'P-002', priority: 'Medium', status: 'In Progress', assignee: 'Chris Lee', created: '2026-03-02', utility: 'Jackson Municipal Water' },
  { id: 'ST-003', title: 'ALD false positive alerts', project: 'P-004', priority: 'Low', status: 'Open', assignee: 'Mike Torres', created: '2026-03-04', utility: 'Memphis Light Gas & Water' },
  { id: 'ST-004', title: 'Network latency issues', project: 'P-006', priority: 'High', status: 'In Progress', assignee: 'David Park', created: '2026-03-01', utility: 'Atlanta Department of Watershed' },
  { id: 'ST-005', title: 'Warranty replacement - meters batch 12', project: 'P-005', priority: 'Medium', status: 'Resolved', assignee: 'Chris Lee', created: '2026-02-28', utility: 'City of Savannah Water' },
];

// Inventory
export const inventory = [
  { id: 'INV-001', item: 'Kamstrup flowIQ 2200', category: 'Meters', inStock: 2450, allocated: 1800, reorderPoint: 500, warehouse: 'Main - Baton Rouge', status: 'Adequate' },
  { id: 'INV-002', item: 'Kamstrup flowIQ 3100', category: 'Meters', inStock: 180, allocated: 150, reorderPoint: 200, warehouse: 'Main - Baton Rouge', status: 'Low Stock' },
  { id: 'INV-003', item: 'READy Collector Unit', category: 'Collectors', inStock: 85, allocated: 62, reorderPoint: 30, warehouse: 'Main - Baton Rouge', status: 'Adequate' },
  { id: 'INV-004', item: 'Antenna Assembly Kit', category: 'Equipment', inStock: 120, allocated: 95, reorderPoint: 50, warehouse: 'Secondary - Memphis', status: 'Adequate' },
  { id: 'INV-005', item: 'Meter Installation Kit', category: 'Equipment', inStock: 45, allocated: 40, reorderPoint: 60, warehouse: 'Main - Baton Rouge', status: 'Low Stock' },
  { id: 'INV-006', item: 'Network Gateway Module', category: 'Collectors', inStock: 22, allocated: 18, reorderPoint: 15, warehouse: 'Secondary - Memphis', status: 'Adequate' },
];

// Team members
export const team = [
  { id: 'T-001', name: 'John Davis', role: 'Senior Estimator', projects: ['P-001', 'P-003'], workload: 85 },
  { id: 'T-002', name: 'Sarah Miller', role: 'Estimator', projects: ['P-002'], workload: 60 },
  { id: 'T-003', name: 'Mike Torres', role: 'Field Service Lead', projects: ['P-001', 'P-004'], workload: 90 },
  { id: 'T-004', name: 'Chris Lee', role: 'Service Technician', projects: ['P-002', 'P-005'], workload: 75 },
  { id: 'T-005', name: 'David Park', role: 'Network Engineer', projects: ['P-004', 'P-006'], workload: 95 },
  { id: 'T-006', name: 'Robert Wilson', role: 'Sales Director', projects: [], workload: 70 },
  { id: 'T-007', name: 'Linda Taylor', role: 'Account Manager', projects: [], workload: 65 },
  { id: 'T-008', name: 'Amanda Brooks', role: 'Business Development', projects: [], workload: 55 },
];

// Meetings
export const meetings = [
  { id: 'M-001', title: 'Weekly Operations Review', type: 'Internal', date: '2026-03-09', time: '09:00 AM', attendees: ['John Davis', 'Mike Torres', 'David Park'], status: 'Scheduled', notes: '' },
  { id: 'M-002', title: 'Baton Rouge Progress Update', type: 'Project', date: '2026-03-10', time: '02:00 PM', attendees: ['John Davis', 'Client Rep'], status: 'Scheduled', project: 'P-001', notes: '' },
  { id: 'M-003', title: 'Memphis MLGW Quarterly Review', type: 'Project', date: '2026-03-12', time: '10:00 AM', attendees: ['Mike Torres', 'David Park', 'Client Rep'], status: 'Scheduled', project: 'P-004', notes: '' },
  { id: 'M-004', title: 'Sales Pipeline Review', type: 'Internal', date: '2026-03-11', time: '11:00 AM', attendees: ['Robert Wilson', 'Linda Taylor', 'Amanda Brooks'], status: 'Scheduled', notes: '' },
  { id: 'M-005', title: 'Fort Smith Negotiation Call', type: 'Sales', date: '2026-03-10', time: '03:30 PM', attendees: ['Robert Wilson'], status: 'Scheduled', notes: '' },
];

// Documents
export const documents = [
  { id: 'DOC-001', name: 'ETEC Master Services Agreement', category: 'Contracts', project: null, version: '3.2', modified: '2026-02-15', author: 'Legal' },
  { id: 'DOC-002', name: 'Baton Rouge SOW', category: 'Contracts', project: 'P-001', version: '1.1', modified: '2025-06-10', author: 'John Davis' },
  { id: 'DOC-003', name: 'Kamstrup AMI Installation Guide', category: 'Specifications', project: null, version: '4.0', modified: '2025-12-01', author: 'Engineering' },
  { id: 'DOC-004', name: 'ETEC Terms & Conditions', category: 'Templates', project: null, version: '2.5', modified: '2026-01-20', author: 'Legal' },
  { id: 'DOC-005', name: 'Network-as-a-Service Agreement Template', category: 'Templates', project: null, version: '1.3', modified: '2026-02-01', author: 'Legal' },
  { id: 'DOC-006', name: 'Memphis Project Close-out Report', category: 'Reports', project: 'P-004', version: '1.0', modified: '2026-03-01', author: 'Mike Torres' },
];

// Support tickets
export const supportTickets = [
  { id: 'HLP-001', title: 'Portal login issues', category: 'Access', priority: 'High', status: 'Open', submitter: 'Field Team', created: '2026-03-04' },
  { id: 'HLP-002', title: 'Report generation timeout', category: 'Bug', priority: 'Medium', status: 'In Progress', submitter: 'Sarah Miller', created: '2026-03-03' },
  { id: 'HLP-003', title: 'New user setup request', category: 'Request', priority: 'Low', status: 'Open', submitter: 'HR', created: '2026-03-05' },
];

// Strategic initiatives
export const initiatives = [
  { id: 'SI-001', title: 'Managed Service Program Launch', category: 'New Service', status: 'In Progress', priority: 'High', description: 'Develop and launch NaaS offering for municipal utilities', target: 'Q3 2026' },
  { id: 'SI-002', title: 'Southeast Market Expansion', category: 'Business Development', status: 'Planning', priority: 'High', description: 'Expand operations into Florida and South Carolina', target: 'Q1 2027' },
  { id: 'SI-003', title: 'AI-Powered Leak Detection', category: 'Innovation', status: 'Research', priority: 'Medium', description: 'Integrate ML models with ALD monitoring for predictive analytics', target: 'Q4 2026' },
  { id: 'SI-004', title: 'Subcontractor Network Optimization', category: 'Operations', status: 'In Progress', priority: 'Medium', description: 'Streamline subcontractor onboarding and coordination process', target: 'Q2 2026' },
];

// Revenue by state
export const revenueByState = [
  { state: 'Louisiana', revenue: 4200000, projects: 1 },
  { state: 'Mississippi', revenue: 3500000, projects: 1 },
  { state: 'Arkansas', revenue: 5100000, projects: 1 },
  { state: 'Tennessee', revenue: 6000000, projects: 1 },
  { state: 'Georgia', revenue: 11300000, projects: 2 },
];

// Monthly revenue trend
export const monthlyRevenue = [
  { month: 'Oct', revenue: 1200000 },
  { month: 'Nov', revenue: 1450000 },
  { month: 'Dec', revenue: 1100000 },
  { month: 'Jan', revenue: 1650000 },
  { month: 'Feb', revenue: 1800000 },
  { month: 'Mar', revenue: 1950000 },
];

// Marketing assets
export const marketingAssets = [
  { id: 'MA-001', name: 'ETEC Company Overview Brochure', type: 'Brochure', project: null, modified: '2026-02-10', status: 'Current' },
  { id: 'MA-002', name: 'Kamstrup AMI Solutions Flyer', type: 'Flyer', project: null, modified: '2026-01-15', status: 'Current' },
  { id: 'MA-003', name: 'Water Utility Case Study - Savannah', type: 'Case Study', project: 'P-005', modified: '2025-11-20', status: 'Current' },
  { id: 'MA-004', name: 'Sales Presentation Deck 2026', type: 'Presentation', project: null, modified: '2026-02-28', status: 'Draft' },
  { id: 'MA-005', name: 'NaaS Service Offering One-Pager', type: 'Flyer', project: null, modified: '2026-03-01', status: 'In Review' },
];
