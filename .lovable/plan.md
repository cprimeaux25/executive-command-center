

# Advanced Task Management Module

## Overview
Add a full-featured task management page with expert-level UX, positioned above "Projects" in the sidebar navigation. The page will feature a multi-view task board (Kanban, List, Calendar), inline editing, filtering, priority/status management, subtasks, and progress analytics.

## Sidebar Change
- Add "Task Management" with `CheckSquare` icon at position 2 (between Executive Dashboard and Projects)
- Route: `/tasks`

## Task Management Page — Features

### Multi-View Layout (Tabs)
1. **Board View** — Kanban columns: Backlog, To Do, In Progress, In Review, Done. Draggable-style cards with priority indicators, assignee avatars, due dates, and project tags.
2. **List View** — Sortable table with columns: Task, Project, Priority, Status, Assignee, Due Date, Progress. Inline status/priority toggles.
3. **Calendar View** — Month grid showing tasks by due date with color-coded priority dots.

### Task Cards (Board View)
- Priority stripe (left border color: red/orange/blue/gray)
- Title, project tag, assignee initials avatar
- Due date with overdue highlighting
- Subtask progress indicator (e.g., "2/4 subtasks")
- Comment count badge

### Top Controls Bar
- KPI summary row: Total Tasks, Overdue, Completed This Week, In Progress
- Search/filter bar with dropdowns: Status, Priority, Project, Assignee, State
- View toggle (Board / List / Calendar)
- "+ New Task" button

### Task Detail Panel (Sheet/Drawer)
- Opens on task click as a right-side sheet
- Full task details: title, description, status, priority, assignee, due date, project link
- Subtask checklist with add/complete
- Activity log / comments section
- Time tracking indicator

### Analytics Section
- Small charts at bottom: Tasks by status (donut), Tasks by priority (bar), Completion trend (line)

## Mock Data
Add ~20 tasks linked to existing projects, with varied statuses, priorities, assignees, due dates, and subtasks.

## Files to Create/Modify
1. **`src/data/mockData.ts`** — Add tasks mock data
2. **`src/pages/TaskManagement.tsx`** — Main page with all views
3. **`src/components/AppSidebar.tsx`** — Add nav item
4. **`src/App.tsx`** — Add route
5. **`src/components/StatusBadge.tsx`** — Add new task statuses (Backlog, To Do, In Review, Done, Overdue)

