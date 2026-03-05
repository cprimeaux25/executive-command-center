

# ETEC Personal Executive Management Portal

## Overview
A unified executive command center for managing multi-state infrastructure deployments (Kamstrup AMI water meters), sales, bids, software development, and business operations. Built as a frontend prototype with mock data, designed for incremental backend integration later.

## Design System
- **Theme**: Light professional — soft white (`#FAFBFC`), light gray (`#F1F3F5`), steel blue (`#4A7FB5`) as primary accent
- **Typography**: Clean sans-serif, clear hierarchy
- **Style**: Hybrid of Notion/Linear/SaaS dashboard — minimal chrome, cards-based layout, subtle shadows

## Navigation
Left sidebar with collapsible icon mode, organized into 14 sections with icons. Global search bar in the header. State/project/client filter controls.

## Modules (All 14)

### 1. Executive Dashboard
- KPI tiles: active deployments, open bids, pipeline value, service tickets, inventory alerts
- Project health cards with status indicators
- Charts: revenue by state, deployment progress, sales pipeline funnel
- State map visualization (LA, MS, AR, TN, GA) showing project locations
- Upcoming meetings and deadlines feed

### 2. Project Management
- Project list with filtering by state, client, status
- Project detail view: overview, meters deployed, installation progress bar, collector locations, network health, ALD monitoring, schedule milestones, risk log, change orders, meeting notes, document links
- Status dashboards and progress charts

### 3. Bid & RFP Management
- RFP tracking table: agency, due date, state, scope, meter quantities, status, estimator, pricing review
- Bid calendar with deadline visualization
- Template management for T&Cs, maintenance contracts, NaaS agreements, ALD service agreements

### 4. Sales Operations
- Sales pipeline funnel visualization (CRM-style stages)
- Territory tracking by state
- Salesperson performance metrics and leaderboard
- Utility meeting tracker, forecasted revenue

### 5. Software Development Oversight
- Development project cards with feature roadmaps
- Status tracking (planning → development → testing → deployed)
- Technical notes and deployment status per project

### 6. Service & Maintenance
- Service ticket table with status, priority, technician assignment
- Maintenance requests and warranty claims tracking
- Site visit reports and service history by utility

### 7. Warehouse & Inventory
- Stock level dashboard: meters, collectors, equipment
- Visual indicators for low stock and reorder alerts
- Equipment allocation by project view

### 8. Resource Planning
- Staff allocation matrix across projects
- Workload charts and capacity indicators
- Subcontractor coordination list
- Manpower forecasting

### 9. Financial Analytics
- Budget tracking by project, profit margins
- Revenue breakdowns: by project, state, salesperson
- Financial charts and forecasting tools

### 10. Document Control
- Organized folder structure: contracts, proposals, specs, SOPs
- Search and version control indicators
- Document cards with metadata

### 11. Meetings & Communications
- Meeting list by type (weekly status, internal, project)
- Meeting detail: notes, action items, attendees
- Meeting history and action item tracking

### 12. Marketing & Presentations
- Marketing asset repository: flyers, brochures, templates
- Project-specific marketing resources
- Strategy ideas workspace

### 13. IT Support & Help Desk
- Support ticket management with status tracking
- Knowledgebase articles list
- Technical documentation repository

### 14. Strategic Planning
- Strategy workspace with initiative cards
- Business development tracking
- New service offering planning
- Market opportunity notes

## Cross-Cutting Features
- **Global search** across all modules
- **Filtering** by state (LA/MS/AR/TN/GA), project, client
- **Cross-module linking** (e.g., project links to its bids, service tickets, documents)
- **Responsive layout** optimized for desktop

## Data Approach
All modules will use realistic mock data representing Kamstrup AMI deployments across the five states. Data structures will be designed for easy Supabase integration later.

