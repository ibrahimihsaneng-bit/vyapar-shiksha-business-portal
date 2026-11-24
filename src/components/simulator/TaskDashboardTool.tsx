'use client';

import React, { useState } from 'react';
import {
  Kanban,
  CheckCircle2,
  Clock,
  Plus,
  ArrowRight,
  Sparkles,
  AlertCircle,
  Tag,
  RotateCcw
} from 'lucide-react';

interface KanbanTask {
  id: string;
  title: string;
  department: string;
  hours: number;
  priority: 'Urgent & Important' | 'Important Not Urgent' | 'Delegate' | 'Backlog';
  status: 'backlog' | 'in_progress' | 'review' | 'completed';
}

const INITIAL_TASKS: KanbanTask[] = [
  { id: 't-1', title: 'Complete October Corporate Bank Reconciliation', department: 'Accounting', hours: 4, priority: 'Urgent & Important', status: 'in_progress' },
  { id: 't-2', title: 'Audit Shopify 50-Item Catalog for Broken SKUs', department: 'E-commerce', hours: 3, priority: 'Important Not Urgent', status: 'in_progress' },
  { id: 't-3', title: 'De-escalate Anniversary Gift Ticket #1042', department: 'Customer Support', hours: 1, priority: 'Urgent & Important', status: 'completed' },
  { id: 't-4', title: 'Design 5-Slide Instagram Educational Carousel', department: 'Design Studio', hours: 3, priority: 'Important Not Urgent', status: 'review' },
  { id: 't-5', title: 'Configure Zapier Webhook Order-to-Slack Automation', department: 'Technology', hours: 3, priority: 'Backlog', status: 'backlog' },
  { id: 't-6', title: 'Reorganize Client Onboarding KYC Tracker', department: 'Virtual Office', hours: 2, priority: 'Backlog', status: 'backlog' }
];

export default function TaskDashboardTool() {
  const [tasks, setTasks] = useState<KanbanTask[]>(INITIAL_TASKS);
  const [newTitle, setNewTitle] = useState('');
  const [newDept, setNewDept] = useState('Accounting');

  const moveTask = (id: string, newStatus: KanbanTask['status']) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newTask: KanbanTask = {
      id: `t-${Date.now()}`,
      title: newTitle,
      department: newDept,
      hours: 2,
      priority: 'Urgent & Important',
      status: 'in_progress'
    };
    setTasks([...tasks, newTask]);
    setNewTitle('');
  };

  const columns: Array<{ id: KanbanTask['status']; label: string; countColor: string }> = [
    { id: 'backlog', label: 'Backlog Tasks', countColor: 'bg-slate-200 text-slate-800' },
    { id: 'in_progress', label: 'In Progress (Active)', countColor: 'bg-blue-100 text-blue-800' },
    { id: 'review', label: 'Under Review / QA', countColor: 'bg-amber-100 text-amber-800' },
    { id: 'completed', label: 'Completed (Done)', countColor: 'bg-emerald-100 text-emerald-800' }
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-6">
      {/* Top Banner */}
      <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-2">
            <Kanban className="w-3.5 h-3.5" />
            <span>Interactive Workflow Kanban Simulator</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            Workplace Task Dashboard & Priority Board
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Practice sprint task management, moving deliverables across workflow states (Trello & Jira Kanban style).
          </p>
        </div>

        <button
          onClick={() => setTasks(INITIAL_TASKS)}
          className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all border border-slate-700 inline-flex items-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Board</span>
        </button>
      </div>

      {/* Add Task Quick Bar */}
      <form onSubmit={handleAddTask} className="mx-6 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center gap-3">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Add a new workplace deliverable..."
          className="flex-1 w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-emerald-500"
        />
        <select
          value={newDept}
          onChange={(e) => setNewDept(e.target.value)}
          className="bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700"
        >
          <option value="Accounting">Accounting</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Virtual Office">Virtual Office</option>
          <option value="Customer Support">Customer Support</option>
          <option value="Design Studio">Design Studio</option>
          <option value="Technology">Technology</option>
        </select>
        <button
          type="submit"
          disabled={!newTitle.trim()}
          className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white text-xs font-bold transition-all shadow-xs shrink-0"
        >
          Add Task
        </button>
      </form>

      {/* Kanban Board Grid */}
      <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map(col => {
          const colTasks = tasks.filter(t => t.status === col.id);

          return (
            <div key={col.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col min-h-[350px]">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-900">{col.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${col.countColor}`}>
                  {colTasks.length}
                </span>
              </div>

              <div className="space-y-2.5 flex-1">
                {colTasks.map(task => (
                  <div
                    key={task.id}
                    className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2 hover:border-slate-300 transition-all"
                  >
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-semibold">
                        {task.department}
                      </span>
                      <span className="text-slate-400 font-mono">{task.hours}h</span>
                    </div>

                    <h4 className="text-xs font-bold text-slate-900 leading-snug">
                      {task.title}
                    </h4>

                    {/* Progress Controls */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px]">
                      {col.id !== 'backlog' && (
                        <button
                          onClick={() => {
                            const prevStatus = col.id === 'completed' ? 'review' : col.id === 'review' ? 'in_progress' : 'backlog';
                            moveTask(task.id, prevStatus);
                          }}
                          className="text-slate-400 hover:text-slate-700 transition-colors"
                          title="Move back"
                        >
                          ←
                        </button>
                      )}

                      {col.id !== 'completed' && (
                        <button
                          onClick={() => {
                            const nextStatus = col.id === 'backlog' ? 'in_progress' : col.id === 'in_progress' ? 'review' : 'completed';
                            moveTask(task.id, nextStatus);
                          }}
                          className="text-emerald-600 hover:text-emerald-700 font-semibold ml-auto flex items-center gap-1 transition-colors"
                        >
                          <span>Advance</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
