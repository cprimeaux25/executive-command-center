import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { KpiCard } from "@/components/KpiCard";
import { StatusBadge } from "@/components/StatusBadge";
import { tasks, Task } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Search, Plus, LayoutGrid, List, CalendarDays, Clock, MessageSquare,
  CheckCircle2, AlertTriangle, Timer, TrendingUp, ChevronLeft, ChevronRight,
  Filter, User
} from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { format, parseISO, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isSameMonth, isToday, isBefore } from "date-fns";
import { cn } from "@/lib/utils";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

const STATUSES = ['Backlog', 'To Do', 'In Progress', 'In Review', 'Done'] as const;
const PRIORITIES = ['Critical', 'High', 'Medium', 'Low'] as const;

const priorityBorderColor: Record<string, string> = {
  Critical: "border-l-destructive",
  High: "border-l-warning",
  Medium: "border-l-primary",
  Low: "border-l-muted-foreground/30",
};

const priorityDotColor: Record<string, string> = {
  Critical: "bg-destructive",
  High: "bg-warning",
  Medium: "bg-primary",
  Low: "bg-muted-foreground",
};

const statusChartColors = [
  "hsl(var(--muted-foreground))",
  "hsl(var(--primary))",
  "hsl(var(--info))",
  "hsl(var(--warning))",
  "hsl(var(--success))",
];

const priorityChartColors = [
  "hsl(var(--destructive))",
  "hsl(var(--warning))",
  "hsl(var(--primary))",
  "hsl(var(--muted-foreground))",
];

export default function TaskManagement() {
  const [view, setView] = useState<"board" | "list" | "calendar">("board");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterPriority, setFilterPriority] = useState<string>("all");
  const [filterAssignee, setFilterAssignee] = useState<string>("all");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [calendarMonth, setCalendarMonth] = useState(new Date(2026, 2, 1));
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const handleDragEnd = useCallback((result: DropResult) => {
    const { destination, draggableId } = result;
    if (!destination) return;
    const newStatus = destination.droppableId as Task["status"];
    setTaskList(prev =>
      prev.map(t => (t.id === draggableId ? { ...t, status: newStatus } : t))
    );
  }, []);

  const assignees = useMemo(() => [...new Set(taskList.map(t => t.assignee))].sort(), [taskList]);

  const filtered = useMemo(() => {
    return taskList.filter(t => {
      if (searchQuery && !t.title.toLowerCase().includes(searchQuery.toLowerCase()) && !t.project.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      if (filterStatus !== "all" && t.status !== filterStatus) return false;
      if (filterPriority !== "all" && t.priority !== filterPriority) return false;
      if (filterAssignee !== "all" && t.assignee !== filterAssignee) return false;
      return true;
    });
  }, [searchQuery, filterStatus, filterPriority, filterAssignee, taskList]);

  const now = new Date("2026-03-07");
  const overdueTasks = taskList.filter(t => t.status !== "Done" && isBefore(parseISO(t.dueDate), now));
  const completedThisWeek = taskList.filter(t => t.status === "Done");
  const inProgressCount = taskList.filter(t => t.status === "In Progress").length;

  const statusData = STATUSES.map(s => ({ name: s, value: taskList.filter(t => t.status === s).length }));
  const priorityData = PRIORITIES.map(p => ({ name: p, value: taskList.filter(t => t.priority === p).length }));

  return (
    <div className="space-y-6">
      <PageHeader title="Task Management" description="Track, prioritize, and manage all tasks across projects" />

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Total Tasks" value={tasks.length} icon={CheckCircle2} subtitle="Across all projects" />
        <KpiCard title="Overdue" value={overdueTasks.length} icon={AlertTriangle} subtitle="Need attention" trend={overdueTasks.length > 0 ? { value: `${overdueTasks.length} tasks`, positive: false } : { value: "None", positive: true }} />
        <KpiCard title="Completed" value={completedThisWeek.length} icon={TrendingUp} subtitle="This period" trend={{ value: `${completedThisWeek.length} done`, positive: true }} />
        <KpiCard title="In Progress" value={inProgressCount} icon={Timer} subtitle="Active work" />
      </div>

      {/* Controls */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
            <div className="flex flex-1 flex-wrap gap-2 items-center">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search tasks..." className="pl-8 h-9" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[140px] h-9"><Filter className="mr-1.5 h-3.5 w-3.5" /><SelectValue placeholder="Status" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  {STATUSES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={filterPriority} onValueChange={setFilterPriority}>
                <SelectTrigger className="w-[140px] h-9"><SelectValue placeholder="Priority" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  {PRIORITIES.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={filterAssignee} onValueChange={setFilterAssignee}>
                <SelectTrigger className="w-[150px] h-9"><User className="mr-1.5 h-3.5 w-3.5" /><SelectValue placeholder="Assignee" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Assignees</SelectItem>
                  {assignees.map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex border rounded-md overflow-hidden">
                <Button variant={view === "board" ? "default" : "ghost"} size="sm" className="rounded-none" onClick={() => setView("board")}><LayoutGrid className="h-4 w-4" /></Button>
                <Button variant={view === "list" ? "default" : "ghost"} size="sm" className="rounded-none" onClick={() => setView("list")}><List className="h-4 w-4" /></Button>
                <Button variant={view === "calendar" ? "default" : "ghost"} size="sm" className="rounded-none" onClick={() => setView("calendar")}><CalendarDays className="h-4 w-4" /></Button>
              </div>
              <Button size="sm" className="gap-1.5"><Plus className="h-4 w-4" />New Task</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Views */}
      {view === "board" && <BoardView tasks={filtered} onSelect={setSelectedTask} />}
      {view === "list" && <ListView tasks={filtered} onSelect={setSelectedTask} />}
      {view === "calendar" && <CalendarView tasks={filtered} onSelect={setSelectedTask} month={calendarMonth} setMonth={setCalendarMonth} />}

      {/* Analytics */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-muted-foreground">Tasks by Status</CardTitle></CardHeader>
          <CardContent className="flex items-center justify-center h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={statusData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={3} dataKey="value">
                  {statusData.map((_, i) => <Cell key={i} fill={statusChartColors[i]} />)}
                </Pie>
                <Tooltip formatter={(value: number, name: string) => [value, name]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-1.5 text-xs min-w-[100px]">
              {statusData.map((d, i) => (
                <div key={d.name} className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: statusChartColors[i] }} />
                  <span className="text-muted-foreground">{d.name}</span>
                  <span className="ml-auto font-medium">{d.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-muted-foreground">Tasks by Priority</CardTitle></CardHeader>
          <CardContent className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={priorityData} layout="vertical" margin={{ left: 10, right: 20 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" width={60} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {priorityData.map((_, i) => <Cell key={i} fill={priorityChartColors[i]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detail Sheet */}
      <Sheet open={!!selectedTask} onOpenChange={open => !open && setSelectedTask(null)}>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          {selectedTask && <TaskDetailPanel task={selectedTask} />}
        </SheetContent>
      </Sheet>
    </div>
  );
}

/* ─── Board View ─── */
function BoardView({ tasks, onSelect }: { tasks: Task[]; onSelect: (t: Task) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
      {STATUSES.map(status => {
        const col = tasks.filter(t => t.status === status);
        return (
          <div key={status} className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{status}</h3>
              <Badge variant="secondary" className="text-[10px] h-5">{col.length}</Badge>
            </div>
            <div className="space-y-2 min-h-[200px]">
              <AnimatePresence>
                {col.map(task => (
                  <motion.div key={task.id} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Card
                      className={cn("cursor-pointer border-l-[3px] hover:shadow-md transition-shadow", priorityBorderColor[task.priority])}
                      onClick={() => onSelect(task)}
                    >
                      <CardContent className="p-3 space-y-2">
                        <p className="text-sm font-medium leading-tight line-clamp-2">{task.title}</p>
                        <Badge variant="outline" className="text-[10px] h-5 font-normal">{task.project}</Badge>
                        <div className="flex items-center justify-between text-[11px]">
                          <div className="flex items-center gap-1.5">
                            <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[9px] font-bold">{task.assigneeInitials}</div>
                            <span className="text-muted-foreground">{format(parseISO(task.dueDate), "MMM d")}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            {task.subtasks.length > 0 && (
                              <span className="flex items-center gap-0.5">
                                <CheckCircle2 className="h-3 w-3" />
                                {task.subtasks.filter(s => s.completed).length}/{task.subtasks.length}
                              </span>
                            )}
                            {task.comments.length > 0 && (
                              <span className="flex items-center gap-0.5">
                                <MessageSquare className="h-3 w-3" />{task.comments.length}
                              </span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── List View ─── */
function ListView({ tasks, onSelect }: { tasks: Task[]; onSelect: (t: Task) => void }) {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Task</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Assignee</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead className="text-right">Progress</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map(task => {
              const subtaskPct = task.subtasks.length > 0 ? Math.round((task.subtasks.filter(s => s.completed).length / task.subtasks.length) * 100) : 0;
              const overdue = task.status !== "Done" && isBefore(parseISO(task.dueDate), new Date("2026-03-07"));
              return (
                <TableRow key={task.id} className="cursor-pointer hover:bg-muted/50" onClick={() => onSelect(task)}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={cn("h-2 w-2 rounded-full shrink-0", priorityDotColor[task.priority])} />
                      <span className="font-medium text-sm">{task.title}</span>
                    </div>
                  </TableCell>
                  <TableCell><span className="text-xs text-muted-foreground">{task.project}</span></TableCell>
                  <TableCell><StatusBadge status={task.priority} /></TableCell>
                  <TableCell><StatusBadge status={task.status} /></TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5">
                      <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[9px] font-bold">{task.assigneeInitials}</div>
                      <span className="text-xs">{task.assignee.split(" ")[0]}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={cn("text-xs", overdue && "text-destructive font-medium")}>
                      {format(parseISO(task.dueDate), "MMM d, yyyy")}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center gap-2 justify-end">
                      <Progress value={subtaskPct} className="w-16 h-1.5" />
                      <span className="text-xs text-muted-foreground w-8">{subtaskPct}%</span>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

/* ─── Calendar View ─── */
function CalendarView({ tasks, onSelect, month, setMonth }: { tasks: Task[]; onSelect: (t: Task) => void; month: Date; setMonth: (d: Date) => void }) {
  const start = startOfMonth(month);
  const end = endOfMonth(month);
  const days = eachDayOfInterval({ start, end });
  const startDay = getDay(start);
  const blanks = Array.from({ length: startDay }, (_, i) => i);

  const tasksByDate = useMemo(() => {
    const map: Record<string, Task[]> = {};
    tasks.forEach(t => {
      const key = t.dueDate;
      if (!map[key]) map[key] = [];
      map[key].push(t);
    });
    return map;
  }, [tasks]);

  return (
    <Card>
      <CardHeader className="pb-2 flex-row items-center justify-between">
        <CardTitle className="text-base">{format(month, "MMMM yyyy")}</CardTitle>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}><ChevronLeft className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}><ChevronRight className="h-4 w-4" /></Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-px bg-border rounded-lg overflow-hidden">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
            <div key={d} className="bg-muted p-2 text-center text-xs font-medium text-muted-foreground">{d}</div>
          ))}
          {blanks.map(i => <div key={`b-${i}`} className="bg-card p-2 min-h-[80px]" />)}
          {days.map(day => {
            const key = format(day, "yyyy-MM-dd");
            const dayTasks = tasksByDate[key] || [];
            return (
              <div key={key} className={cn("bg-card p-1.5 min-h-[80px] border-t border-border/30", isToday(day) && "bg-primary/5")}>
                <span className={cn("text-xs font-medium", !isSameMonth(day, month) && "text-muted-foreground/50", isToday(day) && "text-primary font-bold")}>{format(day, "d")}</span>
                <div className="mt-1 space-y-0.5">
                  {dayTasks.slice(0, 3).map(t => (
                    <div
                      key={t.id}
                      className={cn("text-[10px] px-1 py-0.5 rounded truncate cursor-pointer hover:opacity-80", priorityDotColor[t.priority] === "bg-destructive" ? "bg-destructive/10 text-destructive" : priorityDotColor[t.priority] === "bg-warning" ? "bg-warning/10 text-warning" : "bg-primary/10 text-primary")}
                      onClick={() => onSelect(t)}
                    >
                      {t.title}
                    </div>
                  ))}
                  {dayTasks.length > 3 && <span className="text-[10px] text-muted-foreground pl-1">+{dayTasks.length - 3} more</span>}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

/* ─── Task Detail Panel ─── */
function TaskDetailPanel({ task }: { task: Task }) {
  const subtaskPct = task.subtasks.length > 0 ? Math.round((task.subtasks.filter(s => s.completed).length / task.subtasks.length) * 100) : 0;
  const overdue = task.status !== "Done" && isBefore(parseISO(task.dueDate), new Date("2026-03-07"));

  return (
    <>
      <SheetHeader className="space-y-3 pb-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-[10px]">{task.id}</Badge>
          <StatusBadge status={task.priority} />
        </div>
        <SheetTitle className="text-lg leading-tight">{task.title}</SheetTitle>
      </SheetHeader>

      <div className="space-y-5">
        {/* Meta grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-xs text-muted-foreground block mb-1">Status</span>
            <StatusBadge status={task.status} />
          </div>
          <div>
            <span className="text-xs text-muted-foreground block mb-1">Priority</span>
            <StatusBadge status={task.priority} />
          </div>
          <div>
            <span className="text-xs text-muted-foreground block mb-1">Assignee</span>
            <div className="flex items-center gap-1.5">
              <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">{task.assigneeInitials}</div>
              <span>{task.assignee}</span>
            </div>
          </div>
          <div>
            <span className="text-xs text-muted-foreground block mb-1">Due Date</span>
            <span className={cn(overdue && "text-destructive font-medium")}>{format(parseISO(task.dueDate), "MMM d, yyyy")}{overdue && " (Overdue)"}</span>
          </div>
          <div className="col-span-2">
            <span className="text-xs text-muted-foreground block mb-1">Project</span>
            <Badge variant="outline" className="font-normal">{task.project}</Badge>
          </div>
        </div>

        <Separator />

        {/* Description */}
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Description</h4>
          <p className="text-sm text-foreground/80 leading-relaxed">{task.description}</p>
        </div>

        <Separator />

        {/* Time tracking */}
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Time Tracking</h4>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-muted-foreground" /><span>{task.timeSpent}h / {task.timeEstimate}h</span></div>
            <Progress value={task.timeEstimate > 0 ? (task.timeSpent / task.timeEstimate) * 100 : 0} className="flex-1 h-2" />
          </div>
        </div>

        <Separator />

        {/* Subtasks */}
        {task.subtasks.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subtasks</h4>
              <span className="text-xs text-muted-foreground">{subtaskPct}% complete</span>
            </div>
            <Progress value={subtaskPct} className="h-1.5 mb-3" />
            <div className="space-y-2">
              {task.subtasks.map(st => (
                <div key={st.id} className="flex items-center gap-2 text-sm">
                  <Checkbox checked={st.completed} disabled />
                  <span className={cn(st.completed && "line-through text-muted-foreground")}>{st.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <Separator />

        {/* Tags */}
        {task.tags.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tags</h4>
            <div className="flex flex-wrap gap-1.5">
              {task.tags.map(tag => <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>)}
            </div>
          </div>
        )}

        <Separator />

        {/* Activity / Comments */}
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Activity</h4>
          {task.comments.length === 0 ? (
            <p className="text-xs text-muted-foreground italic">No comments yet</p>
          ) : (
            <ScrollArea className="max-h-48">
              <div className="space-y-3">
                {task.comments.map(c => (
                  <div key={c.id} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold">{c.author}</span>
                      <span className="text-[10px] text-muted-foreground">{format(parseISO(c.timestamp), "MMM d, h:mm a")}</span>
                    </div>
                    <p className="text-sm text-foreground/80 pl-0">{c.text}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>
      </div>
    </>
  );
}
