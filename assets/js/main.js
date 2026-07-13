const footerYearEl = document.getElementById("footer-year");
if (footerYearEl) footerYearEl.textContent = String(new Date().getFullYear());

// Interactive Simulated Workspace List
const workspaces = [
    { name: "Acme Agency", earnings: "$428.50", rate: "$125/hr" },
    { name: "Global Dev Corp", earnings: "$652.10", rate: "$150/hr" },
    { name: "Personal Work", earnings: "$0.00", rate: "In-House" }
];
const workspaceProjects = {
    "Acme Agency": [
        { title: "Client Portal Revamp", status: "In Progress", statusClass: "bg-indigo-500/10 text-indigo-300", progress: 68, tasks: 12, done: 4, earned: "$820", barClass: "bg-indigo-500" },
        { title: "Billing Automation", status: "Review", statusClass: "bg-amber-500/10 text-amber-300", progress: 82, tasks: 9, done: 7, earned: "$540", barClass: "bg-amber-500" }
    ],
    "Global Dev Corp": [
        { title: "Data Pipeline Upgrade", status: "In Progress", statusClass: "bg-indigo-500/10 text-indigo-300", progress: 54, tasks: 15, done: 6, earned: "$960", barClass: "bg-indigo-500" },
        { title: "Ops Dashboard", status: "Done", statusClass: "bg-emerald-500/10 text-emerald-300", progress: 100, tasks: 8, done: 8, earned: "$700", barClass: "bg-emerald-500" }
    ],
    "Personal Work": [
        { title: "Product Roadmap", status: "In Progress", statusClass: "bg-indigo-500/10 text-indigo-300", progress: 46, tasks: 10, done: 3, earned: "$0", barClass: "bg-indigo-500" },
        { title: "Learning Sprint", status: "Backlog", statusClass: "bg-zinc-700/80 text-zinc-300", progress: 15, tasks: 6, done: 1, earned: "$0", barClass: "bg-zinc-500" }
    ]
};
const workspaceTasks = {
    "Acme Agency": {
        project: "Client Portal Revamp",
        backlog: [
            { title: "Define API validation schema", id: "#TSK-101", tag: "Backend" },
            { title: "Draft onboarding checklist", id: "#TSK-104", tag: "Docs" }
        ],
        inProgress: { title: "Build workspace switch transition", id: "#TSK-108", tag: "Active" },
        done: ["Create task labels set", "Set initial kanban columns"]
    },
    "Global Dev Corp": {
        project: "Data Pipeline Upgrade",
        backlog: [
            { title: "Profile slow query batch", id: "#TSK-211", tag: "Data" },
            { title: "Prepare rollback plan", id: "#TSK-214", tag: "Ops" }
        ],
        inProgress: { title: "Refactor sync worker retries", id: "#TSK-218", tag: "Active" },
        done: ["Review queue metrics", "Patch ETL timeout handling"]
    },
    "Personal Work": {
        project: "Product Roadmap",
        backlog: [
            { title: "Write Q4 planning draft", id: "#TSK-301", tag: "Plan" },
            { title: "Collect feature notes", id: "#TSK-304", tag: "Notes" }
        ],
        inProgress: { title: "Organize backlog priorities", id: "#TSK-308", tag: "Active" },
        done: ["Define MVP milestones", "Archive old roadmap items"]
    }
};
const workspaceLogs = {
    "Acme Agency": {
        project: "Client Portal Revamp",
        rows: [
            { date: "Jul 01", time: "09:00 - 11:30", duration: "2h 30m", earnings: "$315", project: "Client Portal Revamp", task: "Switch flow" },
            { date: "Jul 01", time: "12:15 - 14:00", duration: "1h 45m", earnings: "$220", project: "Client Portal Revamp", task: "Validation schema" }
        ]
    },
    "Global Dev Corp": {
        project: "Data Pipeline Upgrade",
        rows: [
            { date: "Jul 01", time: "08:30 - 10:20", duration: "1h 50m", earnings: "$275", project: "Data Pipeline Upgrade", task: "Policy refactor" },
            { date: "Jul 01", time: "10:45 - 13:15", duration: "2h 30m", earnings: "$377", project: "Data Pipeline Upgrade", task: "Metrics review" }
        ]
    },
    "Personal Work": {
        project: "Product Roadmap",
        rows: [
            { date: "Jul 01", time: "19:00 - 20:10", duration: "1h 10m", earnings: "$0", project: "Product Roadmap", task: "Milestones planning" },
            { date: "Jul 01", time: "20:20 - 21:30", duration: "1h 10m", earnings: "$0", project: "Product Roadmap", task: "Backlog cleanup" }
        ]
    }
};
const workspaceResources = {
    "Acme Agency": [
        { name: "Contracts", type: "Folder", modified: "Jul 01, 2026", size: "—" },
        { name: "API Docs", type: "Folder", modified: "Jun 29, 2026", size: "—" },
        { name: "Scope.md", type: "Markdown", modified: "Jun 27, 2026", size: "24 KB" },
        { name: "Requirements.pdf", type: "PDF", modified: "Jun 24, 2026", size: "1.2 MB" }
    ],
    "Global Dev Corp": [
        { name: "Architecture", type: "Folder", modified: "Jul 02, 2026", size: "—" },
        { name: "Runbooks", type: "Folder", modified: "Jun 30, 2026", size: "—" },
        { name: "Incident-2026-07-01.md", type: "Markdown", modified: "Jul 01, 2026", size: "18 KB" },
        { name: "SLA-v3.pdf", type: "PDF", modified: "Jun 28, 2026", size: "860 KB" }
    ],
    "Personal Work": [
        { name: "Notes", type: "Folder", modified: "Jul 01, 2026", size: "—" },
        { name: "Ideas", type: "Folder", modified: "Jun 30, 2026", size: "—" },
        { name: "roadmap-draft.md", type: "Markdown", modified: "Jun 29, 2026", size: "9 KB" },
        { name: "weekly-review.pdf", type: "PDF", modified: "Jun 26, 2026", size: "420 KB" }
    ]
};
const workspaceReports = {
    "Acme Agency": { period: "Current Month (July 2026)", regularHours: "152.0 hrs", overtimeHours: "14.5 hrs", earnings: "$8,560.00" },
    "Global Dev Corp": { period: "Current Month (July 2026)", regularHours: "138.5 hrs", overtimeHours: "9.0 hrs", earnings: "$9,220.00" },
    "Personal Work": { period: "Current Month (July 2026)", regularHours: "42.0 hrs", overtimeHours: "0.0 hrs", earnings: "$0.00" }
};
const workspaceOvertime = {
    "Acme Agency": {
        month: "Jul 2026", from: "Jul 01, 2026", to: "Jul 31, 2026",
        daily: "2.9h", weekly: "8.7h", monthly: "21.0h",
        weeks: [35, 56, 30, 23], weekLabels: ["2.1h", "3.4h", "1.8h", "1.4h"],
        days: [
            { date: "Jul 01", worked: "9.2h", overtime: "1.2h" },
            { date: "Jul 02", worked: "8.7h", overtime: "0.7h" },
            { date: "Jul 03", worked: "9.0h", overtime: "1.0h" }
        ]
    },
    "Global Dev Corp": {
        month: "Jul 2026", from: "Jul 01, 2026", to: "Jul 31, 2026",
        daily: "1.8h", weekly: "5.1h", monthly: "14.2h",
        weeks: [28, 42, 33, 19], weekLabels: ["1.6h", "2.4h", "1.9h", "1.1h"],
        days: [
            { date: "Jul 01", worked: "8.8h", overtime: "0.8h" },
            { date: "Jul 02", worked: "8.3h", overtime: "0.3h" },
            { date: "Jul 03", worked: "9.1h", overtime: "1.1h" }
        ]
    },
    "Personal Work": {
        month: "Jul 2026", from: "Jul 01, 2026", to: "Jul 31, 2026",
        daily: "0.0h", weekly: "0.0h", monthly: "0.0h",
        weeks: [0, 0, 0, 0], weekLabels: ["0.0h", "0.0h", "0.0h", "0.0h"],
        days: [
            { date: "Jul 01", worked: "2.1h", overtime: "0.0h" },
            { date: "Jul 02", worked: "1.8h", overtime: "0.0h" },
            { date: "Jul 03", worked: "2.3h", overtime: "0.0h" }
        ]
    }
};
let currentWorkspaceIndex = 0;

function renderMockProjects(workspaceName) {
    const projects = workspaceProjects[workspaceName] ?? [];
    const p1 = projects[0];
    const p2 = projects[1];

    const setProject = (idx, project) => {
        if (!project) return;
        document.getElementById(`mock-project-${idx}-title`).innerText = project.title;
        document.getElementById(`mock-project-${idx}-workspace`).innerText = workspaceName;
        const statusEl = document.getElementById(`mock-project-${idx}-status`);
        statusEl.innerText = project.status;
        statusEl.className = `px-1.5 py-0.5 rounded text-[9px] ${project.statusClass}`;
        document.getElementById(`mock-project-${idx}-progress-label`).innerText = `${project.progress}%`;
        const barEl = document.getElementById(`mock-project-${idx}-progress-bar`);
        barEl.style.width = `${project.progress}%`;
        barEl.className = `h-full ${project.barClass}`;
        document.getElementById(`mock-project-${idx}-tasks`).innerText = String(project.tasks);
        document.getElementById(`mock-project-${idx}-done`).innerText = String(project.done);
        document.getElementById(`mock-project-${idx}-earned`).innerText = project.earned;
    };

    setProject(1, p1);
    setProject(2, p2);
    document.getElementById('mock-projects-count').innerText = String(projects.length);
    document.getElementById('mock-projects-active-workspace').innerText = workspaceName;
}

function renderMockTasks(workspaceName) {
    const data = workspaceTasks[workspaceName];
    if (!data) return;
    document.getElementById('mock-tasks-project-name').innerText = data.project;

    document.getElementById('mock-task-backlog-1-title').innerText = data.backlog[0].title;
    document.getElementById('mock-task-backlog-1-id').innerText = data.backlog[0].id;
    document.getElementById('mock-task-backlog-1-tag').innerText = data.backlog[0].tag;
    document.getElementById('mock-task-backlog-2-title').innerText = data.backlog[1].title;
    document.getElementById('mock-task-backlog-2-id').innerText = data.backlog[1].id;
    document.getElementById('mock-task-backlog-2-tag').innerText = data.backlog[1].tag;

    document.getElementById('mock-task-progress-title').innerText = data.inProgress.title;
    document.getElementById('mock-task-progress-id').innerText = data.inProgress.id;
    document.getElementById('mock-task-progress-tag').innerText = data.inProgress.tag;

    document.getElementById('mock-task-done-1-title').innerText = data.done[0];
    document.getElementById('mock-task-done-2-title').innerText = data.done[1];

    document.getElementById('mock-task-count-backlog').innerText = String(data.backlog.length);
    document.getElementById('mock-task-count-progress').innerText = "1";
    document.getElementById('mock-task-count-done').innerText = String(data.done.length);
}
function renderMockLogs(workspaceName) {
    const data = workspaceLogs[workspaceName];
    if (!data) return;
    data.rows.forEach((row, i) => {
        const idx = i + 1;
        document.getElementById(`mock-log-${idx}-date`).innerText = row.date;
        document.getElementById(`mock-log-${idx}-time`).innerText = row.time;
        document.getElementById(`mock-log-${idx}-duration`).innerText = row.duration;
        document.getElementById(`mock-log-${idx}-earnings`).innerText = row.earnings;
        document.getElementById(`mock-log-${idx}-project`).innerText = row.project;
        document.getElementById(`mock-log-${idx}-task`).innerText = row.task;
    });
}
function renderMockResources(workspaceName) {
    const rows = workspaceResources[workspaceName];
    if (!rows) return;
    document.getElementById('mock-resources-workspace').innerText = workspaceName;
    document.getElementById('mock-resources-count').innerText = String(rows.length);
    rows.forEach((row, i) => {
        const idx = i + 1;
        document.getElementById(`mock-resource-${idx}-name`).innerText = row.name;
        document.getElementById(`mock-resource-${idx}-type`).innerText = row.type;
        document.getElementById(`mock-resource-${idx}-modified`).innerText = row.modified;
        document.getElementById(`mock-resource-${idx}-size`).innerText = row.size;
    });
}
function renderMockReports(workspaceName) {
    const data = workspaceReports[workspaceName];
    if (!data) return;
    document.getElementById('mock-report-workspace').innerText = workspaceName;
    document.getElementById('mock-report-period').innerText = data.period;
    document.getElementById('mock-report-regular-hours').innerText = data.regularHours;
    document.getElementById('mock-report-overtime-hours').innerText = data.overtimeHours;
    document.getElementById('mock-report-earnings').innerText = data.earnings;
}
function renderMockOvertime(workspaceName) {
    const data = workspaceOvertime[workspaceName];
    if (!data) return;
    document.getElementById('mock-overtime-month').innerText = data.month;
    document.getElementById('mock-overtime-from').innerText = data.from;
    document.getElementById('mock-overtime-to').innerText = data.to;
    document.getElementById('mock-overtime-daily').innerText = data.daily;
    document.getElementById('mock-overtime-weekly').innerText = data.weekly;
    document.getElementById('mock-overtime-monthly').innerText = data.monthly;
    for (let i = 0; i < 4; i++) {
        const idx = i + 1;
        document.getElementById(`mock-overtime-w${idx}`).innerText = data.weekLabels[i];
        document.getElementById(`mock-overtime-w${idx}-bar`).style.width = `${data.weeks[i]}%`;
    }
    for (let i = 0; i < 3; i++) {
        const idx = i + 1;
        document.getElementById(`mock-overtime-day-${idx}-date`).innerText = data.days[i].date;
        document.getElementById(`mock-overtime-day-${idx}-worked`).innerText = data.days[i].worked;
        document.getElementById(`mock-overtime-day-${idx}-ot`).innerText = data.days[i].overtime;
    }
}

function toggleSimulatedWorkspace() {
    currentWorkspaceIndex = (currentWorkspaceIndex + 1) % workspaces.length;
    const ws = workspaces[currentWorkspaceIndex];
    
    // Apply DOM changes to Simulated App mockup
    document.getElementById('simulated-workspace-name').innerText = ws.name;
    document.getElementById('simulated-earnings').innerText = ws.earnings;
    renderMockProjects(ws.name);
    renderMockTasks(ws.name);
    renderMockLogs(ws.name);
    renderMockResources(ws.name);
    renderMockReports(ws.name);
    renderMockOvertime(ws.name);
    
    showNotification(`Simulated workspace switched to ${ws.name} (${ws.rate})`);
}
renderMockProjects(workspaces[currentWorkspaceIndex].name);
renderMockTasks(workspaces[currentWorkspaceIndex].name);
renderMockLogs(workspaces[currentWorkspaceIndex].name);
renderMockResources(workspaces[currentWorkspaceIndex].name);
renderMockReports(workspaces[currentWorkspaceIndex].name);
renderMockOvertime(workspaces[currentWorkspaceIndex].name);

// Active Timer Simulation
let timerSeconds = 8085; // 02:14:45
let timerRunning = true;
let originalEarnings = 428.50;

function updateMockLocalTime() {
    const el = document.getElementById('mock-local-time');
    if (!el) return;
    const now = new Date();
    el.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
}
updateMockLocalTime();
setInterval(updateMockLocalTime, 30000);

setInterval(() => {
    if (timerRunning) {
        timerSeconds++;
        // Update time strings
        const formatted = formatTime(timerSeconds);
        const elTime = document.getElementById('simulated-time');
        const elTimeLarge = document.getElementById('simulated-time-large');
        if (elTime) elTime.innerText = formatted;
        if (elTimeLarge) elTimeLarge.innerText = formatted;

        // Micro earnings increment (simulate billing in action)
        originalEarnings += 0.035; // increments live
        const elEarnings = document.getElementById('simulated-earnings');
        const elTimerEarnings = document.getElementById('simulated-timer-earnings');
        if (currentWorkspaceIndex === 0) {
            if (elEarnings) elEarnings.innerText = `$${originalEarnings.toFixed(2)}`;
            if (elTimerEarnings) elTimerEarnings.innerText = `+$${originalEarnings.toFixed(2)}`;
        }
    }
}, 1000);

function formatTime(totalSecs) {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return [
        hrs.toString().padStart(2, '0'),
        mins.toString().padStart(2, '0'),
        secs.toString().padStart(2, '0')
    ].join(':');
}

function toggleMockTimerState() {
    timerRunning = !timerRunning;
    const btn = document.getElementById('mock-timer-btn');
    const headerBtn = document.getElementById('mock-timer-btn-header');
    const pingEl = document.getElementById('mock-timer-ping');
    const dotEl = document.getElementById('mock-timer-dot');
    if (timerRunning) {
        if (btn) {
            btn.className = "bg-red-500 hover:bg-red-600 text-white text-xs px-4 py-1.5 rounded-lg font-bold transition-colors";
            btn.innerHTML = '<i class="fa-solid fa-stop mr-1"></i> Stop Timer';
        }
        if (headerBtn) headerBtn.innerHTML = '<i class="fa-solid fa-pause text-[10px]"></i>';
        if (pingEl) pingEl.classList.remove('hidden');
        if (dotEl) dotEl.className = 'relative inline-flex rounded-full h-2 w-2 bg-purple-400';
        showNotification("Simulated workflow session resumed.");
    } else {
        if (btn) {
            btn.className = "bg-emerald-500 hover:bg-emerald-600 text-white text-xs px-4 py-1.5 rounded-lg font-bold transition-colors";
            btn.innerHTML = '<i class="fa-solid fa-play mr-1"></i> Start Timer';
        }
        if (headerBtn) headerBtn.innerHTML = '<i class="fa-solid fa-play text-[10px]"></i>';
        if (pingEl) pingEl.classList.add('hidden');
        if (dotEl) dotEl.className = 'relative inline-flex rounded-full h-2 w-2 bg-zinc-500';
        showNotification("Simulated workflow session paused.");
    }
}

// Sidebar Navigation simulation
function switchMockupTab(tabName) {
    const tabs = ['dashboard', 'workspaces', 'projects', 'kanban', 'time', 'resources', 'reports', 'overtime'];
    tabs.forEach(t => {
        const elBody = document.getElementById(`mock-tab-${t}`);
        const elBtn = document.getElementById(`mock-tab-${t}-btn`);
        
        if (t === tabName) {
            elBody.classList.remove('hidden');
            elBtn.className = "w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-xs font-medium bg-zinc-800/80 text-white transition-all";
        } else {
            elBody.classList.add('hidden');
            elBtn.className = "w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-zinc-400 hover:bg-zinc-800/40 hover:text-white transition-all";
        }
    });
}

// Release notes modal — update manually on new releases (copy from context/tracking/releases.md)
const releaseNotes = {
    "1.2.0": {
        version: "v1.2.0",
        title: "TaskFlow v1.2.0",
        date: "Jul 13, 2026",
        status: "LATEST STABLE",
        body: `
            <p class="text-zinc-300 mb-6"><strong class="text-white">New in this release:</strong> project collections with dependencies, task dependencies, milestones, in-app releases, Help updates, and Kanban/task UI polish.</p>

            <h4 class="text-base font-bold text-white mt-6 mb-3">Downloads</h4>
            <div class="overflow-x-auto rounded-lg border border-zinc-800 mb-4">
                <table class="w-full text-left text-xs border-collapse">
                    <thead class="bg-zinc-900/60 text-zinc-400 uppercase tracking-wider text-[10px]">
                        <tr>
                            <th class="p-3 border-b border-zinc-800 font-semibold">Platform</th>
                            <th class="p-3 border-b border-zinc-800 font-semibold">File</th>
                            <th class="p-3 border-b border-zinc-800 font-semibold">Notes</th>
                        </tr>
                    </thead>
                    <tbody class="text-zinc-300 divide-y divide-zinc-800">
                        <tr>
                            <td class="p-3 font-semibold text-white">Windows (64-bit)</td>
                            <td class="p-3 font-mono text-[11px]">TaskFlow_1.2.0_x64-setup.exe</td>
                            <td class="p-3">Recommended installer (NSIS)</td>
                        </tr>
                        <tr>
                            <td class="p-3 font-semibold text-white">macOS (Apple Silicon)</td>
                            <td class="p-3 font-mono text-[11px]">TaskFlow_1.2.0_aarch64.dmg</td>
                            <td class="p-3">M-series Macs</td>
                        </tr>
                        <tr>
                            <td class="p-3 font-semibold text-white">macOS (Intel)</td>
                            <td class="p-3 font-mono text-[11px]">TaskFlow_1.2.0_x64.dmg</td>
                            <td class="p-3">Intel-based Macs</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-base font-bold text-white mt-6 mb-3">What's new</h4>
            <ul class="list-disc list-inside space-y-1.5 text-zinc-400 mb-6">
                <li><strong class="text-zinc-300">Collections</strong> — group related work inside a project; General holds unassigned tasks; sidebar by status with Kanban per collection</li>
                <li><strong class="text-zinc-300">Collection &amp; task dependencies</strong> — plan what blocks what (collections across the project; tasks within a collection)</li>
                <li><strong class="text-zinc-300">Milestones</strong> — planning targets that group collections; progress derived from collection status</li>
                <li><strong class="text-zinc-300">Releases</strong> — draft → publish with notes, optional milestone link, and product-agnostic build assets</li>
            </ul>

            <h4 class="text-base font-bold text-white mt-6 mb-3">Fixes</h4>
            <ul class="list-disc list-inside space-y-1.5 text-zinc-400 mb-6">
                <li>Workspace switcher no longer flashes the Tasks board</li>
                <li>Kanban rename, within-list card order, and list height polish</li>
                <li>Task drawer / full editor layout and confirm dialogs</li>
            </ul>

            <h4 class="text-base font-bold text-white mt-6 mb-3">Upgrade notes</h4>
            <ul class="list-disc list-inside space-y-1.5 text-zinc-400 mb-6">
                <li>Install over an existing install; database and settings are preserved</li>
                <li>Migrations add collections, dependencies, milestones, and releases automatically on desktop launch</li>
                <li>Existing tasks remain on General until you assign a collection</li>
                <li>Encrypted backup available before upgrading (Settings → Backup &amp; Restore, desktop only)</li>
                <li>Newer versions: Settings → Desktop → Updates, or download from <a href="https://github.com/ShehabSalah/taskflow/releases/latest" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:text-indigo-300 transition-colors">Releases</a></li>
            </ul>

            <h4 class="text-base font-bold text-white mt-6 mb-3">Links</h4>
            <ul class="list-disc list-inside space-y-1.5 text-zinc-400 mb-6">
                <li><a href="https://shehabsalah.github.io/taskflow/" class="text-indigo-400 hover:text-indigo-300 transition-colors">Website</a></li>
                <li><a href="https://shehabsalah.github.io/taskflow/docs.html" class="text-indigo-400 hover:text-indigo-300 transition-colors">User guide</a></li>
            </ul>

            <h4 class="text-base font-bold text-white mt-6 mb-3">Support</h4>
            <p class="text-zinc-400 mb-6">Questions, bug reports, or feedback? Contact <strong class="text-zinc-300">Shehab Salah</strong> on <a href="https://www.linkedin.com/in/shehabsalah/" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:text-indigo-300 transition-colors">LinkedIn</a>.</p>

            <p class="text-zinc-500 text-xs pt-4 border-t border-zinc-800"><strong class="text-zinc-400">TaskFlow v1.2.0</strong> — Track time. Manage work. Measure progress.</p>
        `
    },
    "1.1.0": {
        version: "v1.1.0",
        title: "TaskFlow v1.1.0",
        date: "Jul 10, 2026",
        status: "PREVIOUS",
        body: `
            <p class="text-zinc-300 mb-6"><strong class="text-white">New in this release:</strong> encrypted backup &amp; restore, in-app and OS notifications, custom resource categories, desktop soft update check, and post–v1.0.0 fixes.</p>

            <h4 class="text-base font-bold text-white mt-6 mb-3">Downloads</h4>
            <div class="overflow-x-auto rounded-lg border border-zinc-800 mb-4">
                <table class="w-full text-left text-xs border-collapse">
                    <thead class="bg-zinc-900/60 text-zinc-400 uppercase tracking-wider text-[10px]">
                        <tr>
                            <th class="p-3 border-b border-zinc-800 font-semibold">Platform</th>
                            <th class="p-3 border-b border-zinc-800 font-semibold">File</th>
                            <th class="p-3 border-b border-zinc-800 font-semibold">Notes</th>
                        </tr>
                    </thead>
                    <tbody class="text-zinc-300 divide-y divide-zinc-800">
                        <tr>
                            <td class="p-3 font-semibold text-white">Windows (64-bit)</td>
                            <td class="p-3 font-mono text-[11px]">TaskFlow_1.1.0_x64-setup.exe</td>
                            <td class="p-3">Recommended installer (NSIS)</td>
                        </tr>
                        <tr>
                            <td class="p-3 font-semibold text-white">macOS (Apple Silicon)</td>
                            <td class="p-3 font-mono text-[11px]">TaskFlow_1.1.0_aarch64.dmg</td>
                            <td class="p-3">M-series Macs</td>
                        </tr>
                        <tr>
                            <td class="p-3 font-semibold text-white">macOS (Intel)</td>
                            <td class="p-3 font-mono text-[11px]">TaskFlow_1.1.0_x64.dmg</td>
                            <td class="p-3">Intel-based Macs</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-base font-bold text-white mt-6 mb-3">What's new</h4>
            <ul class="list-disc list-inside space-y-1.5 text-zinc-400 mb-6">
                <li>Encrypted full backup and restore (desktop)</li>
                <li>Task schedule notifications (in-app + optional OS alerts) and due-soon badges</li>
                <li>Custom workspace file categories with category manager on Resources; colors on file tags, icons, and filter chips</li>
                <li>Desktop soft update check — Settings shows latest release; download opens GitHub release page (manual install)</li>
            </ul>

            <h4 class="text-base font-bold text-white mt-6 mb-3">Fixes</h4>
            <ul class="list-disc list-inside space-y-1.5 text-zinc-400 mb-6">
                <li>Workspace card overflow menu actions on the dashboard</li>
                <li>Resource category filter includes files nested in folders</li>
                <li>Drag-and-drop file upload in the desktop app</li>
            </ul>

            <h4 class="text-base font-bold text-white mt-6 mb-3">Upgrade notes</h4>
            <ul class="list-disc list-inside space-y-1.5 text-zinc-400 mb-6">
                <li>Install over an existing install; database and settings are preserved</li>
                <li>Encrypted backup available before upgrading (Settings → Backup &amp; Restore, desktop only)</li>
                <li>Newer versions: Settings → Desktop → Updates, or download from <a href="https://github.com/ShehabSalah/taskflow/releases/latest" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:text-indigo-300 transition-colors">Releases</a></li>
            </ul>

            <h4 class="text-base font-bold text-white mt-6 mb-3">Links</h4>
            <ul class="list-disc list-inside space-y-1.5 text-zinc-400 mb-6">
                <li><a href="https://shehabsalah.github.io/taskflow/" class="text-indigo-400 hover:text-indigo-300 transition-colors">Website</a></li>
                <li><a href="https://shehabsalah.github.io/taskflow/docs.html" class="text-indigo-400 hover:text-indigo-300 transition-colors">User guide</a></li>
            </ul>

            <h4 class="text-base font-bold text-white mt-6 mb-3">Support</h4>
            <p class="text-zinc-400 mb-6">Questions, bug reports, or feedback? Contact <strong class="text-zinc-300">Shehab Salah</strong> on <a href="https://www.linkedin.com/in/shehabsalah/" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:text-indigo-300 transition-colors">LinkedIn</a>.</p>

            <p class="text-zinc-500 text-xs pt-4 border-t border-zinc-800"><strong class="text-zinc-400">TaskFlow v1.1.0</strong> — Track time. Manage work. Measure progress.</p>
        `
    },
    "1.0.0": {
        version: "v1.0.0",
        title: "TaskFlow v1.0.0 — First public release",
        date: "Jul 3, 2026",
        status: "PREVIOUS",
        body: `
            <p class="text-zinc-300 mb-6"><strong class="text-white">Local-first work management for professionals</strong> — track time, earnings, projects, and tasks in one desktop app. Your data stays on your machine.</p>

            <h4 class="text-base font-bold text-white mt-6 mb-3">Downloads</h4>
            <div class="overflow-x-auto rounded-lg border border-zinc-800 mb-4">
                <table class="w-full text-left text-xs border-collapse">
                    <thead class="bg-zinc-900/60 text-zinc-400 uppercase tracking-wider text-[10px]">
                        <tr>
                            <th class="p-3 border-b border-zinc-800 font-semibold">Platform</th>
                            <th class="p-3 border-b border-zinc-800 font-semibold">File</th>
                            <th class="p-3 border-b border-zinc-800 font-semibold">Notes</th>
                        </tr>
                    </thead>
                    <tbody class="text-zinc-300 divide-y divide-zinc-800">
                        <tr>
                            <td class="p-3 font-semibold text-white">Windows (64-bit)</td>
                            <td class="p-3 font-mono text-[11px]">TaskFlow_1.0.0_x64-setup.exe</td>
                            <td class="p-3">Recommended installer (NSIS)</td>
                        </tr>
                        <tr>
                            <td class="p-3 font-semibold text-white">macOS (Apple Silicon)</td>
                            <td class="p-3 font-mono text-[11px]">TaskFlow_1.0.0_aarch64.dmg</td>
                            <td class="p-3">M1 / M2 / M3 / M4 Macs</td>
                        </tr>
                        <tr>
                            <td class="p-3 font-semibold text-white">macOS (Intel)</td>
                            <td class="p-3 font-mono text-[11px]">TaskFlow_1.0.0_x64.dmg</td>
                            <td class="p-3">Intel-based Macs</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="text-xs text-zinc-500 border-l-2 border-zinc-700 pl-3 mb-6">Optional on Windows: <code class="text-zinc-400">TaskFlow_1.0.0_x64_en-US.msi</code> (MSI installer).</p>

            <h4 class="text-base font-bold text-white mt-6 mb-3">What’s included</h4>
            <p class="font-semibold text-white mt-4 mb-2">Time &amp; money</p>
            <ul class="list-disc list-inside space-y-1.5 text-zinc-400 mb-4">
                <li>Workspaces (full-time, part-time, freelance, project-based)</li>
                <li>Start/stop timers at workspace, project, or task level</li>
                <li>Real-time earnings from salary and recorded seconds</li>
                <li>Daily, weekly, and monthly progress and overtime views</li>
                <li>Work logs with filters and exports</li>
            </ul>
            <p class="font-semibold text-white mt-4 mb-2">Projects &amp; tasks (Trello-style)</p>
            <ul class="list-disc list-inside space-y-1.5 text-zinc-400 mb-4">
                <li>Dynamic Kanban lists per project</li>
                <li>Labels, start/end dates, checklists, custom fields</li>
                <li>Rich-text descriptions, comments, and activity feed</li>
                <li>Attachments and mark-complete checkbox</li>
                <li>Start a timer directly from a task card</li>
            </ul>
            <p class="font-semibold text-white mt-4 mb-2">Reports &amp; insights</p>
            <ul class="list-disc list-inside space-y-1.5 text-zinc-400 mb-4">
                <li>Report builder with date ranges, preview, and scope filters</li>
                <li>Excel / CSV exports (timesheets, attendance, overtime)</li>
                <li>Work insights — time allocation and period comparison</li>
            </ul>
            <p class="font-semibold text-white mt-4 mb-2">Desktop &amp; privacy</p>
            <ul class="list-disc list-inside space-y-1.5 text-zinc-400 mb-4">
                <li>Native installers — no separate Node, npm, or PostgreSQL setup required</li>
                <li><strong class="text-zinc-300">Easy mode:</strong> bundled PostgreSQL on first run</li>
                <li><strong class="text-zinc-300">Advanced mode:</strong> connect your own PostgreSQL</li>
                <li>App lock with username/password, lock screen, and auto-lock</li>
                <li>In-app help (<code class="text-zinc-400">/help</code>)</li>
                <li>Optional launch at login (Settings → Desktop)</li>
            </ul>
            <p class="text-zinc-400 mb-6"><strong class="text-zinc-300">Local-first:</strong> core features work offline. No cloud account required.</p>

            <h4 class="text-base font-bold text-white mt-6 mb-3">First-time setup</h4>
            <ol class="list-decimal list-inside space-y-1.5 text-zinc-400 mb-6">
                <li>Download and run the installer for your platform.</li>
                <li>Complete the setup wizard (choose Easy or Advanced database mode).</li>
                <li>Create your local account (username + password).</li>
                <li>Add a workspace and start tracking.</li>
            </ol>

            <h4 class="text-base font-bold text-white mt-6 mb-3">System requirements</h4>
            <ul class="list-disc list-inside space-y-1.5 text-zinc-400 mb-6">
                <li><strong class="text-zinc-300">Windows:</strong> Windows 10 or later (64-bit)</li>
                <li><strong class="text-zinc-300">macOS:</strong> macOS 11 (Big Sur) or later</li>
                <li>Disk space for app + database (Easy mode downloads PostgreSQL on first run)</li>
            </ul>

            <h4 class="text-base font-bold text-white mt-6 mb-3">Upgrading</h4>
            <p class="text-zinc-400 mb-6">Install the new version over an existing install. Your database and settings are preserved; migrations run automatically on launch.</p>

            <h4 class="text-base font-bold text-white mt-6 mb-3">Known limitations (v1.0.0)</h4>
            <ul class="list-disc list-inside space-y-1.5 text-zinc-400 mb-6">
                <li>Single user per install (local auth)</li>
                <li>No calendar, Slack, email, or cloud integrations yet (planned for future releases)</li>
                <li>macOS builds may show Gatekeeper warnings</li>
                <li>Windows may show SmartScreen for installers</li>
            </ul>

            <h4 class="text-base font-bold text-white mt-6 mb-3">Links</h4>
            <ul class="list-disc list-inside space-y-1.5 text-zinc-400 mb-6">
                <li><a href="https://shehabsalah.github.io/taskflow/" class="text-indigo-400 hover:text-indigo-300 transition-colors">Website</a></li>
                <li><a href="https://shehabsalah.github.io/taskflow/docs.html" class="text-indigo-400 hover:text-indigo-300 transition-colors">User guide</a></li>
            </ul>

            <h4 class="text-base font-bold text-white mt-6 mb-3">Support</h4>
            <p class="text-zinc-400 mb-6">Questions, bug reports, or feedback? Contact <strong class="text-zinc-300">Shehab Salah</strong> on <a href="https://www.linkedin.com/in/shehabsalah/" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:text-indigo-300 transition-colors">LinkedIn</a>.</p>

            <p class="text-zinc-500 text-xs pt-4 border-t border-zinc-800"><strong class="text-zinc-400">TaskFlow v1.0.0</strong> — Track time. Manage work. Measure progress.</p>
        `
    }
};

function openReleaseModal(version) {
    const data = releaseNotes[version];
    if (!data) return;

    document.getElementById("release-modal-version").textContent = data.version;
    document.getElementById("release-modal-title").textContent = data.title;
    document.getElementById("release-modal-meta").textContent = `${data.date} · ${data.status}`;
    document.getElementById("release-modal-body").innerHTML = data.body;

    const modal = document.getElementById("release-modal");
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeReleaseModal() {
    const modal = document.getElementById("release-modal");
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeReleaseModal();
});

// Custom Notification Controller
let toastTimeout;
function showNotification(message, title = "TaskFlow Pro") {
    const toast = document.getElementById('custom-toast');
    document.getElementById('toast-title').innerText = title;
    document.getElementById('toast-msg').innerText = message;
    
    toast.classList.remove('translate-y-24', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
        toast.classList.remove('translate-y-0', 'opacity-100');
    }, 4000);
}

const RELEASE_DOWNLOADS = {
    windows: {
        label: "Windows (.exe)",
        sha256: "90eb4be7f1497d5a063aa095531d2150c9e7dd1fe6f1e3c6744a9b97749b5c48"
    },
    macIntel: {
        label: "macOS Intel (.dmg)",
        sha256: "1b12aba3c7f18e31a5afa7fcb5f5e6a1ba1d7c68bb614856d3ffead7a76ce824"
    },
    macArm: {
        label: "macOS M-series (.dmg)",
        sha256: "f2c7f5a4ae8b6486bdce989a0af5bab583a841b5edbfa4ca65737e2c4a77aa69"
    }
};

function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    }
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    return Promise.resolve();
}

function copyBuildSHA(buildKey) {
    const build = RELEASE_DOWNLOADS[buildKey];
    if (!build) return;
    copyTextToClipboard(build.sha256).then(() => {
        showNotification(`${build.label} SHA-256 copied to clipboard.`, "Clipboard Success");
    });
}

// Global Adoption — GitHub Releases download stats (summed across all published releases)
const ADOPTION_REPO = "ShehabSalah/taskflow";
const ADOPTION_CACHE_KEY = "taskflow-adoption-stats-all-releases-v1";
const ADOPTION_CACHE_TTL_MS = 60 * 60 * 1000;

const ADOPTION_ASSET_PATTERNS = {
    windows: /x64-setup\.exe$/i,
    macArm: /aarch64\.dmg$/i,
    macIntel: /_x64\.dmg$/i
};

function readAdoptionCache() {
    try {
        const raw = localStorage.getItem(ADOPTION_CACHE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (!parsed || Date.now() - parsed.fetchedAt > ADOPTION_CACHE_TTL_MS) return null;
        return parsed.stats;
    } catch {
        return null;
    }
}

function writeAdoptionCache(stats) {
    try {
        localStorage.setItem(ADOPTION_CACHE_KEY, JSON.stringify({ fetchedAt: Date.now(), stats }));
    } catch {
        /* ignore quota / private mode */
    }
}

function accumulateAssetDownloads(counts, assets) {
    for (const asset of assets || []) {
        const n = asset.download_count || 0;
        const name = asset.name || "";
        if (ADOPTION_ASSET_PATTERNS.windows.test(name)) counts.windows += n;
        else if (ADOPTION_ASSET_PATTERNS.macArm.test(name)) counts.macArm += n;
        else if (ADOPTION_ASSET_PATTERNS.macIntel.test(name)) counts.macIntel += n;
    }
}

async function fetchAdoptionStats() {
    const cached = readAdoptionCache();
    if (cached) return { ...cached, fromCache: true };

    const releaseRes = await fetch(
        `https://api.github.com/repos/${ADOPTION_REPO}/releases?per_page=100`,
        { headers: { Accept: "application/vnd.github+json" } }
    );
    if (!releaseRes.ok) throw new Error(`Release fetch failed (${releaseRes.status})`);

    const releases = await releaseRes.json();
    const counts = { windows: 0, macIntel: 0, macArm: 0, total: 0 };

    for (const release of releases || []) {
        if (release.draft || release.prerelease) continue;
        accumulateAssetDownloads(counts, release.assets);
    }

    counts.total = counts.windows + counts.macIntel + counts.macArm;
    writeAdoptionCache(counts);
    return { ...counts, fromCache: false };
}

function animateAdoptionCounter(element, target, durationMs = 1400) {
    const start = performance.now();
    const from = 0;
    function frame(now) {
        const t = Math.min((now - start) / durationMs, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const value = Math.round(from + (target - from) * eased);
        element.textContent = value.toLocaleString();
        if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}

function setAdoptionPlatformBar(pctId, barId, count, total) {
    const pctEl = document.getElementById(pctId);
    const barEl = document.getElementById(barId);
    if (!pctEl || !barEl) return;

    if (total <= 0) {
        pctEl.textContent = count > 0 ? `${count.toLocaleString()} dl` : "0%";
        barEl.style.width = "0%";
        return;
    }

    const pct = Math.round((count / total) * 100);
    pctEl.textContent = `${pct}%`;
    barEl.style.width = `${pct}%`;
}

function renderAdoptionStats(stats, fromCache) {
    const counterEl = document.getElementById("live-counter");
    const metaEl = document.getElementById("adoption-sync-meta");
    const badgeEl = document.getElementById("adoption-live-badge");
    const dotEl = document.getElementById("adoption-live-dot");

    if (!counterEl) return;

    animateAdoptionCounter(counterEl, stats.total);

    setAdoptionPlatformBar("adoption-pct-windows", "adoption-bar-windows", stats.windows, stats.total);
    setAdoptionPlatformBar("adoption-pct-mac-intel", "adoption-bar-mac-intel", stats.macIntel, stats.total);
    setAdoptionPlatformBar("adoption-pct-mac-arm", "adoption-bar-mac-arm", stats.macArm, stats.total);

    if (metaEl) {
        const cacheNote = fromCache ? " · cached 1h" : "";
        metaEl.textContent = `Installer downloads${cacheNote}`;
    }

    if (badgeEl) {
        badgeEl.className = "text-xs font-bold text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full";
        badgeEl.innerHTML = '<i class="fa-solid fa-arrow-trend-up"></i> LIVE';
    }
    if (dotEl) dotEl.classList.remove("hidden");
}

function renderAdoptionError() {
    const counterEl = document.getElementById("live-counter");
    const metaEl = document.getElementById("adoption-sync-meta");
    const badgeEl = document.getElementById("adoption-live-badge");
    const dotEl = document.getElementById("adoption-live-dot");

    if (counterEl) counterEl.textContent = "—";
    if (metaEl) metaEl.textContent = "Could not load stats from GitHub. Try again later.";
    if (badgeEl) {
        badgeEl.className = "text-xs font-bold text-zinc-500 flex items-center gap-1 bg-zinc-800/80 px-2 py-0.5 rounded-full";
        badgeEl.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> OFFLINE';
    }
    if (dotEl) dotEl.classList.add("hidden");
}

(async function initAdoptionStats() {
    try {
        const stats = await fetchAdoptionStats();
        renderAdoptionStats(stats, stats.fromCache);
    } catch {
        renderAdoptionError();
    }
})();

// Accordion Toggle
const FAQ_COUNT = 11;
function toggleFaq(index) {
    const body = document.getElementById(`faq-body-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    
    if (body.style.maxHeight && body.style.maxHeight !== '0px') {
        body.style.maxHeight = '0px';
        icon.style.transform = 'rotate(0deg)';
    } else {
        for (let i = 1; i <= FAQ_COUNT; i++) {
            const otherBody = document.getElementById(`faq-body-${i}`);
            const otherIcon = document.getElementById(`faq-icon-${i}`);
            if (otherBody) otherBody.style.maxHeight = '0px';
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
        body.style.maxHeight = body.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
    }
}


