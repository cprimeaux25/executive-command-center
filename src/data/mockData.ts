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

// Task management data
export interface TaskSubtask {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskComment {
  id: string;
  author: string;
  text: string;
  timestamp: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  project: string;
  projectId: string;
  status: 'Backlog' | 'To Do' | 'In Progress' | 'In Review' | 'Done';
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  assignee: string;
  assigneeInitials: string;
  dueDate: string;
  createdDate: string;
  subtasks: TaskSubtask[];
  comments: TaskComment[];
  tags: string[];
  timeEstimate: number; // hours
  timeSpent: number; // hours
}

export const tasks: Task[] = [
  { id: 'TK-001', title: 'Configure collector network topology', description: 'Design and configure the network topology for 45 collectors in the Baton Rouge deployment zone. Include redundancy paths and failover configuration.', project: 'Baton Rouge Water AMI', projectId: 'P-001', status: 'In Progress', priority: 'High', assignee: 'David Park', assigneeInitials: 'DP', dueDate: '2026-03-15', createdDate: '2026-02-20', subtasks: [{ id: 'st-1', title: 'Map coverage zones', completed: true }, { id: 'st-2', title: 'Configure failover paths', completed: true }, { id: 'st-3', title: 'Run signal strength tests', completed: false }, { id: 'st-4', title: 'Document final topology', completed: false }], comments: [{ id: 'c-1', author: 'David Park', text: 'Coverage analysis complete for zones 1-3', timestamp: '2026-03-05T10:30:00' }], tags: ['Network', 'Critical Path'], timeEstimate: 40, timeSpent: 28 },
  { id: 'TK-002', title: 'Submit Monroe bid documentation', description: 'Compile and submit all required documentation for the Monroe Water District AMI bid including technical specifications, pricing, and references.', project: 'Monroe Water District AMI', projectId: 'B-001', status: 'To Do', priority: 'Critical', assignee: 'John Davis', assigneeInitials: 'JD', dueDate: '2026-03-20', createdDate: '2026-03-01', subtasks: [{ id: 'st-5', title: 'Complete pricing schedule', completed: false }, { id: 'st-6', title: 'Attach reference letters', completed: true }, { id: 'st-7', title: 'Final review & sign-off', completed: false }], comments: [], tags: ['Bid', 'Deadline'], timeEstimate: 16, timeSpent: 4 },
  { id: 'TK-003', title: 'Resolve Collector #23 outage', description: 'Investigate and resolve the offline collector unit #23 in the Baton Rouge network. Check power supply, antenna connection, and firmware status.', project: 'Baton Rouge Water AMI', projectId: 'P-001', status: 'In Progress', priority: 'Critical', assignee: 'Mike Torres', assigneeInitials: 'MT', dueDate: '2026-03-08', createdDate: '2026-03-03', subtasks: [{ id: 'st-8', title: 'Diagnose power supply', completed: true }, { id: 'st-9', title: 'Check antenna alignment', completed: true }, { id: 'st-10', title: 'Flash firmware update', completed: false }], comments: [{ id: 'c-2', author: 'Mike Torres', text: 'Power supply confirmed working. Antenna misaligned after storm.', timestamp: '2026-03-04T14:15:00' }, { id: 'c-3', author: 'David Park', text: 'Remote firmware push available once antenna is fixed.', timestamp: '2026-03-04T16:00:00' }], tags: ['Urgent', 'Field Service'], timeEstimate: 8, timeSpent: 5 },
  { id: 'TK-004', title: 'Prepare Jackson Zone 5 deployment plan', description: 'Create detailed deployment plan for Zone 5 of the Jackson Municipal AMI project including route planning, equipment allocation, and crew scheduling.', project: 'Jackson Municipal AMI', projectId: 'P-002', status: 'To Do', priority: 'High', assignee: 'John Davis', assigneeInitials: 'JD', dueDate: '2026-03-22', createdDate: '2026-03-02', subtasks: [{ id: 'st-11', title: 'Survey Zone 5 routes', completed: false }, { id: 'st-12', title: 'Allocate meter inventory', completed: false }, { id: 'st-13', title: 'Schedule installation crews', completed: false }], comments: [], tags: ['Planning', 'Deployment'], timeEstimate: 24, timeSpent: 0 },
  { id: 'TK-005', title: 'QA testing - Inventory Management System', description: 'Run comprehensive QA testing on the Inventory Management System including unit tests, integration tests, and user acceptance testing.', project: 'Inventory Management System', projectId: 'D-002', status: 'In Review', priority: 'High', assignee: 'Chris Lee', assigneeInitials: 'CL', dueDate: '2026-03-14', createdDate: '2026-02-25', subtasks: [{ id: 'st-14', title: 'Unit test coverage > 80%', completed: true }, { id: 'st-15', title: 'Integration test suite', completed: true }, { id: 'st-16', title: 'UAT with warehouse team', completed: false }, { id: 'st-17', title: 'Performance load testing', completed: true }], comments: [{ id: 'c-4', author: 'Chris Lee', text: 'Unit tests at 87% coverage. Integration suite passing.', timestamp: '2026-03-06T09:00:00' }], tags: ['QA', 'Software'], timeEstimate: 32, timeSpent: 26 },
  { id: 'TK-006', title: 'Order Kamstrup flowIQ 3100 restock', description: 'Place emergency reorder for Kamstrup flowIQ 3100 meters. Current stock below reorder point.', project: 'Baton Rouge Water AMI', projectId: 'P-001', status: 'Done', priority: 'High', assignee: 'Sarah Miller', assigneeInitials: 'SM', dueDate: '2026-03-05', createdDate: '2026-03-01', subtasks: [{ id: 'st-18', title: 'Get quote from supplier', completed: true }, { id: 'st-19', title: 'Submit PO', completed: true }, { id: 'st-20', title: 'Confirm delivery date', completed: true }], comments: [{ id: 'c-5', author: 'Sarah Miller', text: 'PO submitted. ETA March 12.', timestamp: '2026-03-02T11:30:00' }], tags: ['Inventory', 'Urgent'], timeEstimate: 4, timeSpent: 3 },
  { id: 'TK-007', title: 'Design NaaS pricing model', description: 'Develop pricing model for the Network-as-a-Service offering including tiered pricing, SLA levels, and margin analysis.', project: 'Managed Service Program Launch', projectId: 'SI-001', status: 'In Progress', priority: 'High', assignee: 'Robert Wilson', assigneeInitials: 'RW', dueDate: '2026-03-25', createdDate: '2026-02-15', subtasks: [{ id: 'st-21', title: 'Market research & benchmarks', completed: true }, { id: 'st-22', title: 'Draft tier structure', completed: true }, { id: 'st-23', title: 'Margin analysis spreadsheet', completed: false }, { id: 'st-24', title: 'Review with leadership', completed: false }], comments: [{ id: 'c-6', author: 'Robert Wilson', text: 'Competitor analysis shows 3-tier model is standard.', timestamp: '2026-03-01T13:00:00' }], tags: ['Strategy', 'Pricing'], timeEstimate: 20, timeSpent: 12 },
  { id: 'TK-008', title: 'Update sales presentation deck', description: 'Update the 2026 sales presentation deck with latest project metrics, case studies, and service offerings.', project: 'Sales Presentation Deck 2026', projectId: 'MA-004', status: 'In Review', priority: 'Medium', assignee: 'Amanda Brooks', assigneeInitials: 'AB', dueDate: '2026-03-12', createdDate: '2026-02-28', subtasks: [{ id: 'st-25', title: 'Update project metrics', completed: true }, { id: 'st-26', title: 'Add Savannah case study', completed: true }, { id: 'st-27', title: 'Refresh visual design', completed: true }, { id: 'st-28', title: 'Peer review', completed: false }], comments: [], tags: ['Marketing', 'Sales'], timeEstimate: 12, timeSpent: 10 },
  { id: 'TK-009', title: 'Memphis MLGW quarterly report', description: 'Prepare the quarterly progress report for Memphis Light Gas & Water including deployment metrics, network health, and ALD monitoring results.', project: 'Memphis Regional AMI', projectId: 'P-004', status: 'To Do', priority: 'Medium', assignee: 'Mike Torres', assigneeInitials: 'MT', dueDate: '2026-03-12', createdDate: '2026-03-05', subtasks: [{ id: 'st-29', title: 'Compile deployment stats', completed: false }, { id: 'st-30', title: 'Network health summary', completed: false }, { id: 'st-31', title: 'ALD monitoring report', completed: false }], comments: [], tags: ['Reporting', 'Client'], timeEstimate: 8, timeSpent: 0 },
  { id: 'TK-010', title: 'Evaluate FL/SC market entry strategy', description: 'Research and evaluate market conditions for expanding into Florida and South Carolina including regulatory landscape, competition, and potential partners.', project: 'Southeast Market Expansion', projectId: 'SI-002', status: 'Backlog', priority: 'Medium', assignee: 'Linda Taylor', assigneeInitials: 'LT', dueDate: '2026-04-15', createdDate: '2026-03-01', subtasks: [{ id: 'st-32', title: 'Regulatory research', completed: false }, { id: 'st-33', title: 'Competitive landscape', completed: false }, { id: 'st-34', title: 'Partner identification', completed: false }], comments: [], tags: ['Strategy', 'Research'], timeEstimate: 30, timeSpent: 0 },
  { id: 'TK-011', title: 'Fix meter read failures Zone 4', description: 'Diagnose and resolve meter read failures in Zone 4 of the Jackson deployment. Possible communication interference.', project: 'Jackson Municipal AMI', projectId: 'P-002', status: 'In Progress', priority: 'High', assignee: 'Chris Lee', assigneeInitials: 'CL', dueDate: '2026-03-10', createdDate: '2026-03-02', subtasks: [{ id: 'st-35', title: 'Signal analysis in Zone 4', completed: true }, { id: 'st-36', title: 'Identify interference sources', completed: false }, { id: 'st-37', title: 'Implement mitigation', completed: false }], comments: [{ id: 'c-7', author: 'Chris Lee', text: 'Possible RF interference from nearby construction site.', timestamp: '2026-03-03T15:45:00' }], tags: ['Field Service', 'Troubleshooting'], timeEstimate: 12, timeSpent: 6 },
  { id: 'TK-012', title: 'Onboard Atlanta field crew', description: 'Complete onboarding for the new Atlanta Metro AMI field installation crew including safety training, equipment training, and system access.', project: 'Atlanta Metro AMI Phase 1', projectId: 'P-006', status: 'Done', priority: 'Medium', assignee: 'Mike Torres', assigneeInitials: 'MT', dueDate: '2026-03-01', createdDate: '2026-02-15', subtasks: [{ id: 'st-38', title: 'Safety certification', completed: true }, { id: 'st-39', title: 'Equipment training', completed: true }, { id: 'st-40', title: 'System access setup', completed: true }, { id: 'st-41', title: 'Field shadowing complete', completed: true }], comments: [{ id: 'c-8', author: 'Mike Torres', text: 'All 6 crew members certified and ready.', timestamp: '2026-03-01T17:00:00' }], tags: ['HR', 'Training'], timeEstimate: 20, timeSpent: 20 },
  { id: 'TK-013', title: 'Develop AI leak detection prototype', description: 'Build initial prototype for ML-powered leak detection using ALD monitoring data from existing deployments.', project: 'AI-Powered Leak Detection', projectId: 'SI-003', status: 'Backlog', priority: 'Low', assignee: 'David Park', assigneeInitials: 'DP', dueDate: '2026-05-01', createdDate: '2026-03-01', subtasks: [{ id: 'st-42', title: 'Data pipeline setup', completed: false }, { id: 'st-43', title: 'Feature engineering', completed: false }, { id: 'st-44', title: 'Model training', completed: false }, { id: 'st-45', title: 'Validation against known leaks', completed: false }], comments: [], tags: ['Innovation', 'AI/ML'], timeEstimate: 60, timeSpent: 0 },
  { id: 'TK-014', title: 'Hot Springs bid follow-up', description: 'Follow up on the submitted Hot Springs Water AMI bid. Schedule demo and address any technical questions.', project: 'Hot Springs Water AMI', projectId: 'B-003', status: 'To Do', priority: 'Medium', assignee: 'Robert Wilson', assigneeInitials: 'RW', dueDate: '2026-03-18', createdDate: '2026-03-05', subtasks: [{ id: 'st-46', title: 'Schedule demo meeting', completed: false }, { id: 'st-47', title: 'Prepare technical Q&A doc', completed: false }], comments: [], tags: ['Sales', 'Follow-up'], timeEstimate: 6, timeSpent: 0 },
  { id: 'TK-015', title: 'Setup dev environment for Field Service App', description: 'Configure React Native development environment and CI/CD pipeline for the new Field Service mobile application.', project: 'Field Service App', projectId: 'D-004', status: 'Done', priority: 'Medium', assignee: 'David Park', assigneeInitials: 'DP', dueDate: '2026-02-28', createdDate: '2026-02-10', subtasks: [{ id: 'st-48', title: 'Configure React Native', completed: true }, { id: 'st-49', title: 'Setup CI/CD pipeline', completed: true }, { id: 'st-50', title: 'Configure test framework', completed: true }], comments: [], tags: ['DevOps', 'Setup'], timeEstimate: 12, timeSpent: 11 },
  { id: 'TK-016', title: 'Negotiate Shreveport utility contract terms', description: 'Review and negotiate contract terms for the Shreveport Water AMI opportunity. Focus on payment schedule and warranty terms.', project: 'Shreveport Water AMI', projectId: 'S-001', status: 'Backlog', priority: 'Low', assignee: 'Linda Taylor', assigneeInitials: 'LT', dueDate: '2026-04-01', createdDate: '2026-03-06', subtasks: [{ id: 'st-51', title: 'Review draft contract', completed: false }, { id: 'st-52', title: 'Legal review', completed: false }], comments: [], tags: ['Sales', 'Legal'], timeEstimate: 8, timeSpent: 0 },
  { id: 'TK-017', title: 'Savannah project close-out documentation', description: 'Complete all close-out documentation for the Savannah Water AMI project including as-built drawings, warranty documentation, and training materials.', project: 'Savannah Water AMI', projectId: 'P-005', status: 'In Review', priority: 'Low', assignee: 'John Davis', assigneeInitials: 'JD', dueDate: '2026-03-20', createdDate: '2026-02-20', subtasks: [{ id: 'st-53', title: 'As-built drawings', completed: true }, { id: 'st-54', title: 'Warranty documentation', completed: true }, { id: 'st-55', title: 'Training materials', completed: true }, { id: 'st-56', title: 'Client sign-off', completed: false }], comments: [{ id: 'c-9', author: 'John Davis', text: 'All docs submitted to client for review.', timestamp: '2026-03-04T10:00:00' }], tags: ['Close-out', 'Documentation'], timeEstimate: 16, timeSpent: 14 },
  { id: 'TK-018', title: 'Install antenna assemblies - Memphis Zone 8', description: 'Install 12 antenna assembly kits in Memphis Zone 8 for network expansion.', project: 'Memphis Regional AMI', projectId: 'P-004', status: 'To Do', priority: 'Medium', assignee: 'Mike Torres', assigneeInitials: 'MT', dueDate: '2026-03-16', createdDate: '2026-03-06', subtasks: [{ id: 'st-57', title: 'Pre-install site survey', completed: false }, { id: 'st-58', title: 'Install antennas', completed: false }, { id: 'st-59', title: 'Signal verification', completed: false }], comments: [], tags: ['Installation', 'Field Work'], timeEstimate: 16, timeSpent: 0 },
  { id: 'TK-019', title: 'Subcontractor portal requirements', description: 'Define and document requirements for the subcontractor onboarding portal as part of the network optimization initiative.', project: 'Subcontractor Network Optimization', projectId: 'SI-004', status: 'In Progress', priority: 'Medium', assignee: 'Sarah Miller', assigneeInitials: 'SM', dueDate: '2026-03-28', createdDate: '2026-02-20', subtasks: [{ id: 'st-60', title: 'Stakeholder interviews', completed: true }, { id: 'st-61', title: 'Requirements document', completed: false }, { id: 'st-62', title: 'Wireframes', completed: false }], comments: [{ id: 'c-10', author: 'Sarah Miller', text: 'Completed interviews with 5 subcontractor leads.', timestamp: '2026-03-03T09:30:00' }], tags: ['Operations', 'Requirements'], timeEstimate: 20, timeSpent: 8 },
  { id: 'TK-020', title: 'Network latency optimization - Atlanta', description: 'Investigate and resolve network latency issues in the Atlanta Metro deployment. Optimize gateway configurations.', project: 'Atlanta Metro AMI Phase 1', projectId: 'P-006', status: 'In Progress', priority: 'High', assignee: 'David Park', assigneeInitials: 'DP', dueDate: '2026-03-11', createdDate: '2026-03-01', subtasks: [{ id: 'st-63', title: 'Latency profiling', completed: true }, { id: 'st-64', title: 'Gateway config review', completed: true }, { id: 'st-65', title: 'Apply optimizations', completed: false }, { id: 'st-66', title: 'Verify improvements', completed: false }], comments: [{ id: 'c-11', author: 'David Park', text: 'Root cause: suboptimal routing in gateway cluster 3.', timestamp: '2026-03-02T16:30:00' }], tags: ['Network', 'Performance'], timeEstimate: 16, timeSpent: 10 },
];
