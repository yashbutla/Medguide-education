"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  BarChart3, 
  Settings, 
  LogOut, 
  Search, 
  Download, 
  MoreVertical,
  ArrowUpRight,
  UserCheck,
  Globe2,
  Bell,
  Calendar,
  Filter,
  Trash2,
  Plus
} from "lucide-react";
import { useRouter } from "next/navigation";

const mockRegistrations = [
  { id: 1, name: "Rahul Sharma", phone: "+91 98765 43210", country: "Russia", date: "Today, 10:30 AM", status: "New" },
  { id: 2, name: "Sneha Reddy", phone: "+91 87654 32109", country: "Georgia", date: "Today, 11:15 AM", status: "Community" },
  { id: 3, name: "Aditya Verma", phone: "+91 76543 21098", country: "Uzbekistan", date: "Yesterday, 12:00 PM", status: "New" },
  { id: 4, name: "Priya Singh", phone: "+91 65432 10987", country: "Kazakhstan", date: "Yesterday, 04:45 PM", status: "Follow-up" },
  { id: 5, name: "Amit Patel", phone: "+91 54321 09876", country: "Egypt", date: "7 May, 02:20 PM", status: "New" },
];

import { supabase } from "@/lib/supabase";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [webinars, setWebinars] = useState<any[]>([]);
  const [showAddWebinar, setShowAddWebinar] = useState(false);
  
  // Form State
  const [newWebinar, setNewWebinar] = useState({
    title: "",
    date: "",
    time: "",
    type: "Online"
  });

  const fetchWebinars = async () => {
    const { data } = await supabase
      .from('webinars')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setWebinars(data);
  };

  const deleteWebinar = async (id: string) => {
    await supabase.from('webinars').delete().eq('id', id);
    fetchWebinars();
  };

  const addWebinar = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('webinars').insert([newWebinar]);
    if (!error) {
      setNewWebinar({ title: "", date: "", time: "", type: "Online" });
      setShowAddWebinar(false);
      fetchWebinars();
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("medguide_admin_auth");
    if (!auth) {
      router.push("/admin/login");
    } else {
      setIsAuthorized(true);
      fetchLeads();
      fetchWebinars();
    }
  }, [router]);

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from('registrations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (error) {
      console.error("Error fetching leads:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("medguide_admin_auth");
    router.push("/admin/login");
  };

  const handleExport = () => {
    if (leads.length === 0) return;

    const headers = ["Name", "Phone", "Registration Date", "Status"];
    const csvContent = [
      headers.join(","),
      ...leads.map(lead => [
        `"${lead.name}"`,
        `"${lead.phone}"`,
        `"${new Date(lead.created_at).toLocaleString()}"`,
        `"${lead.status || 'New'}"`
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `medguide_leads_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-brand border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex text-primary font-sans">
      {/* Sidebar */}
      <aside className="w-80 border-r border-primary/5 flex flex-col p-8 hidden lg:flex bg-surface/30">
        <div className="mb-12 flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-2xl shadow-lg shadow-brand/20" />
          <h2 className="text-xl font-heading font-black tracking-tight">MedGuide <span className="text-brand">Hub</span></h2>
        </div>

        <nav className="flex-1 space-y-4">
          <button 
            onClick={() => setActiveTab("dashboard")}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${activeTab === 'dashboard' ? 'bg-[#0F172A] text-white shadow-xl' : 'text-text-muted hover:bg-surface'}`}
          >
            <BarChart3 className="w-5 h-5" /> Dashboard
          </button>
          <button 
            onClick={() => setActiveTab("leads")}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${activeTab === 'leads' ? 'bg-[#0F172A] text-white shadow-xl' : 'text-text-muted hover:bg-surface'}`}
          >
            <Users className="w-5 h-5" /> All Leads
          </button>
          <button 
            onClick={() => setActiveTab("webinars")}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${activeTab === 'webinars' ? 'bg-[#0F172A] text-white shadow-xl' : 'text-text-muted hover:bg-surface'}`}
          >
            <Calendar className="w-5 h-5" /> Webinars
          </button>
          <button 
            onClick={() => setActiveTab("settings")}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${activeTab === 'settings' ? 'bg-[#0F172A] text-white shadow-xl' : 'text-text-muted hover:bg-surface'}`}
          >
            <Settings className="w-5 h-5" /> Settings
          </button>
        </nav>

        <div className="mt-auto pt-8 border-t border-primary/5">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-red-50 text-red-500 transition-all font-black text-sm uppercase tracking-widest"
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-12 overflow-y-auto bg-white relative">
        <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none" />
        
        <header className="flex justify-between items-center mb-16 relative z-10">
          <div>
            <h1 className="text-4xl font-heading font-black mb-2 text-primary">
              {activeTab === 'dashboard' && "Performance Control"}
              {activeTab === 'leads' && "Student Leads"}
              {activeTab === 'webinars' && "Webinar Schedule"}
              {activeTab === 'settings' && "Admin Settings"}
            </h1>
            <p className="text-text-muted font-bold tracking-tight">
              {activeTab === 'dashboard' && "Your medical recruitment funnel overview."}
              {activeTab === 'leads' && "Manage and export your masterclass registrations."}
              {activeTab === 'webinars' && "Schedule and monitor your upcoming sessions."}
              {activeTab === 'settings' && "Configure your administrative preferences."}
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={fetchLeads}
              className="w-14 h-14 rounded-2xl bg-white border border-primary/5 flex items-center justify-center text-primary hover:bg-surface transition-all relative"
            >
              <Bell className={`w-6 h-6 ${loading ? 'animate-pulse' : ''}`} />
            </button>
            <button 
              onClick={handleExport}
              className="px-8 h-14 bg-[#0F172A] text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-primary/20"
            >
              <Download className="w-5 h-5" /> Export Data
            </button>
          </div>
        </header>


        {activeTab === 'dashboard' ? (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative z-10">
              {[
                { label: "Total Leads", value: leads.length.toString(), icon: Users, color: "bg-brand", trend: "+100%" },
                { label: "Conversion", value: "Real-time", icon: BarChart3, color: "bg-accent", trend: "Live" },
                { label: "WhatsApp", value: leads.length.toString(), icon: UserCheck, color: "bg-emerald-500", trend: "Live" },
                { label: "Database", value: "Online", icon: Globe2, color: "bg-purple-500", trend: "Secure" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-[40px] border border-primary/5 premium-shadow group hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white ${stat.color} shadow-lg`}>
                      <stat.icon className="w-7 h-7" />
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full uppercase tracking-widest">
                      {stat.trend}
                    </div>
                  </div>
                  <p className="text-text-muted text-[10px] uppercase font-black tracking-[0.2em] mb-2">{stat.label}</p>
                  <p className="text-4xl font-heading font-black text-primary leading-none">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-[48px] border border-primary/5 premium-shadow overflow-hidden relative z-10">
              <div className="p-10 border-b border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-surface/30">
                <h3 className="text-2xl font-heading font-black text-primary">Recent Aspirants</h3>
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div className="relative flex-1 md:w-80">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <input 
                      type="text" 
                      placeholder="Search by name or phone..." 
                      className="w-full bg-white border border-primary/5 rounded-2xl pl-14 pr-6 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                    />
                  </div>
                  <button className="w-14 h-14 bg-white border border-primary/5 rounded-2xl flex items-center justify-center text-primary hover:bg-surface transition-all">
                    <Filter className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-[10px] uppercase font-black tracking-[0.2em] text-text-muted bg-surface/10">
                      <th className="px-10 py-8">Aspirant Details</th>
                      <th className="px-10 py-8">Timestamp</th>
                      <th className="px-10 py-8">Lifecycle Status</th>
                      <th className="px-10 py-8 text-right">Options</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary/5">
                    {leads.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-10 py-20 text-center text-text-muted font-bold">
                          No registrations found yet.
                        </td>
                      </tr>
                    ) : (
                      leads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-surface/50 transition-colors group">
                          <td className="px-10 py-10">
                            <div className="flex items-center gap-5">
                              <div className="w-14 h-14 rounded-2xl bg-brand/5 flex items-center justify-center text-brand font-black text-xl">
                                {lead.name.charAt(0)}
                              </div>
                              <div>
                                <p className="text-lg font-black text-primary leading-tight mb-1">{lead.name}</p>
                                <p className="text-sm font-bold text-text-muted">{lead.phone}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-10 py-10">
                            <p className="text-sm font-bold text-text-muted">
                              {new Date(lead.created_at).toLocaleDateString()} at {new Date(lead.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </td>
                          <td className="px-10 py-10">
                            <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${
                              lead.status === 'New' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 
                              'bg-emerald-50 text-emerald-600 border border-emerald-100'
                            }`}>
                              {lead.status}
                            </span>
                          </td>
                          <td className="px-10 py-10 text-right">
                            <button className="w-12 h-12 rounded-xl hover:bg-brand/10 transition-all flex items-center justify-center text-text-muted hover:text-brand">
                              <MoreVertical className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : activeTab === 'leads' ? (
          <div className="bg-white rounded-[48px] border border-primary/5 premium-shadow overflow-hidden relative z-10">
            <div className="p-10 border-b border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-surface/30">
              <h3 className="text-2xl font-heading font-black text-primary">Full Database Export</h3>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-80">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                  <input 
                    type="text" 
                    placeholder="Search all students..." 
                    className="w-full bg-white border border-primary/5 rounded-2xl pl-14 pr-6 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                  />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-[10px] uppercase font-black tracking-[0.2em] text-text-muted bg-surface/10">
                    <th className="px-10 py-8">Full Name</th>
                    <th className="px-10 py-8">WhatsApp Number</th>
                    <th className="px-10 py-8">Registration Date</th>
                    <th className="px-10 py-8 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/5">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-surface/50">
                      <td className="px-10 py-8 font-black text-primary">{lead.name}</td>
                      <td className="px-10 py-8 font-bold text-text-muted">{lead.phone}</td>
                      <td className="px-10 py-8 font-bold text-text-muted">{new Date(lead.created_at).toLocaleString()}</td>
                      <td className="px-10 py-8 text-right">
                        <button className="text-brand font-black text-[10px] uppercase tracking-widest hover:underline">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : activeTab === 'webinars' ? (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-heading font-black text-primary uppercase tracking-tight">Active Masterclasses</h3>
              <button 
                onClick={() => setShowAddWebinar(!showAddWebinar)}
                className="px-8 py-4 bg-brand text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand/20 flex items-center gap-2"
              >
                {showAddWebinar ? "Cancel" : <><Plus className="w-4 h-4" /> Schedule New</>}
              </button>
            </div>

            {showAddWebinar && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-surface p-10 rounded-[40px] border border-brand/20 mb-12 shadow-2xl"
              >
                <form onSubmit={addWebinar} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">Session Title</label>
                      <input 
                        required
                        type="text" 
                        value={newWebinar.title}
                        onChange={(e) => setNewWebinar({...newWebinar, title: e.target.value})}
                        placeholder="Masterclass: MBBS in Russia"
                        className="w-full bg-white border border-primary/5 rounded-2xl px-6 py-4 text-sm font-bold text-primary focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">Type</label>
                      <select 
                        value={newWebinar.type}
                        onChange={(e) => setNewWebinar({...newWebinar, type: e.target.value})}
                        className="w-full bg-white border border-primary/5 rounded-2xl px-6 py-4 text-sm font-bold text-primary focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                      >
                        <option value="Online">Online Webinar</option>
                        <option value="Offline">Offline Seminar</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">Date</label>
                      <input 
                        required
                        type="date" 
                        value={newWebinar.date}
                        onChange={(e) => setNewWebinar({...newWebinar, date: e.target.value})}
                        className="w-full bg-white border border-primary/5 rounded-2xl px-6 py-4 text-sm font-bold text-primary focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">Time</label>
                      <input 
                        required
                        type="time" 
                        value={newWebinar.time}
                        onChange={(e) => setNewWebinar({...newWebinar, time: e.target.value})}
                        className="w-full bg-white border border-primary/5 rounded-2xl px-6 py-4 text-sm font-bold text-primary focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" className="px-12 py-5 bg-[#0F172A] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-primary/20">
                      Publish Schedule
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {webinars.map((webinar) => (
                <div key={webinar.id} className="bg-white p-10 rounded-[40px] border border-primary/5 premium-shadow group hover:-translate-y-2 transition-all duration-500 relative">
                  <button 
                    onClick={() => deleteWebinar(webinar.id)}
                    className="absolute top-6 right-6 p-3 text-text-muted hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-brand">
                      {webinar.type === 'Online' ? <Globe2 className="w-7 h-7" /> : <Calendar className="w-7 h-7" />}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${webinar.type === 'Online' ? 'bg-emerald-50 text-emerald-600' : 'bg-purple-50 text-purple-600'}`}>
                        {webinar.type}
                      </span>
                      <span className="px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-50 text-blue-600">
                        Live
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xl font-black text-primary mb-2 pr-10">{webinar.title}</h4>
                  <p className="text-text-muted font-bold text-sm mb-8">
                    {new Date(webinar.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} at {webinar.time}
                  </p>
                  <div className="pt-8 border-t border-primary/5 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Registrations</p>
                      <p className="text-2xl font-black text-brand">0</p>
                    </div>
                    <button className="text-primary font-black text-xs uppercase tracking-widest hover:underline">Manage Session</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-4xl space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Profile Section */}
            <section className="bg-white p-12 rounded-[48px] border border-primary/5 premium-shadow">
              <h3 className="text-xl font-black text-primary uppercase tracking-widest mb-10 flex items-center gap-3">
                <Settings className="w-5 h-5 text-brand" /> Admin Profile
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-32 h-32 bg-[#0F172A] rounded-[40px] flex items-center justify-center text-white text-4xl font-black shadow-2xl">
                  MG
                </div>
                <div className="flex-1 space-y-6 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">Full Name</label>
                      <input type="text" readOnly value="MedGuide Administrator" className="w-full bg-surface border border-primary/5 rounded-2xl px-6 py-4 text-sm font-bold text-primary focus:outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">Email Address</label>
                      <input type="email" readOnly value="admin@medguide.edu" className="w-full bg-surface border border-primary/5 rounded-2xl px-6 py-4 text-sm font-bold text-primary focus:outline-none" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Notifications Section */}
            <section className="bg-white p-12 rounded-[48px] border border-primary/5 premium-shadow">
              <h3 className="text-xl font-black text-primary uppercase tracking-widest mb-10">System Preferences</h3>
              <div className="space-y-6">
                {[
                  { label: "WhatsApp Alerts", desc: "Get notified when a new student registers", active: true },
                  { label: "Daily Summary", desc: "Receive a lead summary every morning at 9 AM", active: false },
                  { label: "Security Logs", desc: "Alert me about suspicious login attempts", active: true },
                ].map((pref, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-surface rounded-3xl">
                    <div>
                      <p className="font-black text-primary leading-tight">{pref.label}</p>
                      <p className="text-sm text-text-muted font-bold">{pref.desc}</p>
                    </div>
                    <div className={`w-14 h-8 rounded-full p-1 transition-all cursor-pointer ${pref.active ? 'bg-brand' : 'bg-primary/10'}`}>
                      <div className={`w-6 h-6 bg-white rounded-full shadow-sm transition-all ${pref.active ? 'ml-6' : 'ml-0'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
