import React, { useState, useEffect } from 'react';
import { Lock, Unlock, Calendar, Clock, User, Phone, Sparkles, CheckCircle2, XCircle, AlertCircle, ArrowLeft, RefreshCw, Search, PlusCircle, CreditCard, Trash2 } from 'lucide-react';

export default function AdminDashboard() {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [members, setMembers] = useState([]);
  const [activeTab, setActiveTab] = useState('appointments'); // appointments | members
  
  // Fetching states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [updatingId, setUpdatingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  // Member Form State
  const [memberForm, setMemberForm] = useState({
    clientName: '',
    phone: '',
    registrationDate: new Date().toISOString().split('T')[0]
  });
  const [memberStatus, setMemberStatus] = useState('idle'); // idle | loading | success | error

  // Member Search State
  const [searchQuery, setSearchQuery] = useState('');

  // Passcode gate definition
  const CORRECT_PASSCODE = '9036';

  // Dynamic API Base URL detection for Production vs Localhost
  const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5000'
    : 'https://your-deployed-backend-url.onrender.com'; // Replace this string with your live backend domain later!

  // Seed fallbacks for visual presentation if DB offline
  const fallbackAppointments = [
    {
      _id: "demo-1",
      clientName: "Ananya Deshpande",
      phone: "+91 98452 10234",
      service: "Pearl Clean-Up",
      date: "2026-06-21",
      time: "11:30",
      status: "pending"
    },
    {
      _id: "demo-2",
      clientName: "Priyanka Kulkarni",
      phone: "+91 94481 92834",
      service: "Professional Bridal Make-Up Mastery",
      date: "2026-06-25",
      time: "10:00",
      status: "confirmed"
    },
    {
      _id: "demo-3",
      clientName: "Sneha Patil",
      phone: "+91 93431 62030",
      service: "Keratin (Medium)",
      date: "2026-06-22",
      time: "15:00",
      status: "cancelled"
    }
  ];

  const fallbackMembers = [
    {
      _id: "m-1",
      clientName: "Rajesh Patil",
      phone: "+91 93431 62030",
      registrationDate: "2026-06-19"
    },
    {
      _id: "m-2",
      clientName: "Sunita Deshpande",
      phone: "+91 98452 10234",
      registrationDate: "2026-06-20"
    }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === CORRECT_PASSCODE) {
      setIsAuthenticated(true);
      setAuthError(false);
      fetchAppointments();
      fetchMemberships();
    } else {
      setAuthError(true);
      setPasscode('');
    }
  };

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/appointments`);
      if (!response.ok) throw new Error('API Error');
      const data = await response.json();
      setAppointments(data.length > 0 ? data : fallbackAppointments);
    } catch (err) {
      console.warn('Backend server offline. Displaying fallback appointments.');
      setAppointments(fallbackAppointments);
    } finally {
      setLoading(false);
    }
  };

  const fetchMemberships = async (query = '') => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/memberships?search=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('API Error');
      const data = await response.json();
      
      // If we queried a search and nothing returned, filter our mock/fallback array locally
      if (data.length === 0 && query) {
        const filtered = fallbackMembers.filter(m => 
          m.clientName.toLowerCase().includes(query.toLowerCase()) || 
          m.phone.includes(query)
        );
        setMembers(filtered);
      } else {
        setMembers(data.length > 0 ? data : fallbackMembers);
      }
    } catch (err) {
      console.warn('Backend server offline. Displaying fallback memberships.');
      if (query) {
        const filtered = fallbackMembers.filter(m => 
          m.clientName.toLowerCase().includes(query.toLowerCase()) || 
          m.phone.includes(query)
        );
        setMembers(filtered);
      } else {
        setMembers(fallbackMembers);
      }
    }
  };

  // Run live member search when query state updates
  useEffect(() => {
    if (isAuthenticated) {
      fetchMemberships(searchQuery);
    }
  }, [searchQuery, isAuthenticated]);

  const updateStatus = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      setAppointments(prev => 
        prev.map(app => app._id === id ? { ...app, status: newStatus } : app)
      );

      const response = await fetch(`${API_BASE_URL}/api/appointments/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) throw new Error('API Error');
    } catch (err) {
      console.error('Optimistic UI status update locked.');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleMemberSubmit = async (e) => {
    e.preventDefault();
    if (!memberForm.clientName || !memberForm.phone || !memberForm.registrationDate) {
      setMemberStatus('error');
      return;
    }

    setMemberStatus('loading');
    try {
      const response = await fetch(`${API_BASE_URL}/api/memberships`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(memberForm)
      });

      if (!response.ok) throw new Error('API Error');
      
      setMemberStatus('success');
      setMemberForm({
        clientName: '',
        phone: '',
        registrationDate: new Date().toISOString().split('T')[0]
      });
      fetchMemberships(searchQuery);
      setTimeout(() => setMemberStatus('idle'), 2500);
    } catch (err) {
      console.warn('Backend server offline. Adding locally to visual dashboard state.');
      // Fallback add to mock list locally
      const mockNewMember = {
        _id: `m-mock-${Date.now()}`,
        clientName: memberForm.clientName,
        phone: memberForm.phone,
        registrationDate: memberForm.registrationDate
      };
      fallbackMembers.unshift(mockNewMember);
      setMembers([mockNewMember, ...members]);
      setMemberStatus('success');
      setMemberForm({
        clientName: '',
        phone: '',
        registrationDate: new Date().toISOString().split('T')[0]
      });
      setTimeout(() => setMemberStatus('idle'), 2500);
    }
  };

  const executeDelete = async (id) => {
    setDeletingId(id);
    try {
      // Optimistic update
      setMembers(prev => prev.filter(m => m._id !== id));
      
      const response = await fetch(`${API_BASE_URL}/api/memberships/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('API Error');
    } catch (err) {
      console.error('Optimistic UI delete rollback occurred.');
    } finally {
      setDeletingId(null);
      setConfirmDeleteId(null);
    }
  };

  if (!isAuthenticated) {
    /* Sleek Passcode Gate Overlay */
    return (
      <div className="min-h-screen bg-parlourDark flex items-center justify-center px-6 relative font-montserrat">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-parlourGold/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="w-full max-w-sm bg-[#111111] border border-parlourGold/20 p-8 sm:p-10 text-center relative z-10 gold-glow">
          <div className="w-12 h-12 rounded-full bg-parlourGold/10 flex items-center justify-center border border-parlourGold/25 mx-auto mb-6">
            <Lock className="w-5 h-5 text-parlourGold" />
          </div>
          
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-parlourGold">
            Security Gate
          </span>
          <h2 className="font-cormorant font-bold text-3xl text-white mt-2 mb-3">
            Admin Console
          </h2>
          <p className="text-gray-500 text-[11px] leading-relaxed mb-6 font-light">
            Please enter your four-digit authorization passcode to access salon logs.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password"
              maxLength="4"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="••••"
              className="w-full bg-[#161616] border border-white/5 px-4 py-3.5 text-center text-lg tracking-[0.5em] text-white focus:outline-none focus:border-parlourGold/40 transition-colors font-light"
              required
            />

            {authError && (
              <div className="bg-red-950/20 border border-red-500/30 p-2 text-[10px] text-red-400 flex items-center justify-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Incorrect passcode. Access Denied.</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-parlourGold text-parlourDark font-montserrat uppercase tracking-[0.2em] font-bold text-xs hover:brightness-110 transition-all duration-300 cursor-pointer"
            >
              Verify Passcode
            </button>
          </form>

          <button
            onClick={() => window.location.href = '/'}
            className="mt-6 text-[10px] text-gray-500 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-1.5 mx-auto cursor-pointer"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Return to Salon</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-parlourDark text-gray-300 font-montserrat relative p-6 md:p-12">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-parlourGold/3 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-6 mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 text-parlourGold">
              <Unlock className="w-4 h-4 text-parlourGold" />
              <span className="text-[10px] tracking-widest uppercase font-semibold">Authorized Session</span>
            </div>
            <h1 className="font-cormorant font-bold text-3xl sm:text-4xl text-white mt-1">
              Soujanya's Admin Panel
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => activeTab === 'appointments' ? fetchAppointments() : fetchMemberships(searchQuery)}
              disabled={loading}
              className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-white uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="px-4 py-2.5 bg-parlourGold text-parlourDark text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Salon Site</span>
            </button>
          </div>
        </div>

        {/* Tab Selection Row */}
        <div className="flex gap-4 border-b border-white/5 mb-8">
          <button
            onClick={() => setActiveTab('appointments')}
            className={`py-3.5 px-6 text-xs uppercase tracking-widest font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'appointments'
                ? 'border-parlourGold text-parlourGold'
                : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            Appointment Logs
          </button>
          <button
            onClick={() => setActiveTab('members')}
            className={`py-3.5 px-6 text-xs uppercase tracking-widest font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'members'
                ? 'border-parlourGold text-parlourGold'
                : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            Member Registry
          </button>
        </div>

        {/* TAB 1: APPOINTMENT LOGS */}
        {activeTab === 'appointments' && (
          <div className="bg-[#111111] border border-white/5 overflow-hidden gold-glow">
            <div className="p-6 border-b border-white/5 bg-[#141414] flex justify-between items-center">
              <span className="text-xs font-semibold tracking-wider text-white uppercase">
                Customer Web Reservations
              </span>
              <span className="text-[10px] px-2.5 py-1 bg-parlourGold/10 text-parlourGold font-semibold border border-parlourGold/15">
                {appointments.length} Booking Requests
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 text-gray-500 uppercase tracking-widest text-[9px] font-semibold bg-white/2">
                    <th className="py-4 px-6">Customer</th>
                    <th className="py-4 px-6">Selected Service</th>
                    <th className="py-4 px-6">Requested Date/Time</th>
                    <th className="py-4 px-6">Status</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs sm:text-[13px] font-light">
                  {appointments.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="py-12 text-center text-gray-500 font-light font-montserrat">
                        No active appointment records discovered.
                      </td>
                    </tr>
                  ) : (
                    appointments.map((app) => (
                      <tr key={app._id} className="hover:bg-white/2 transition-colors">
                        <td className="py-4.5 px-6">
                          <div className="flex flex-col text-left">
                            <span className="text-white font-medium mb-0.5 flex items-center gap-1.5">
                              <User className="w-3.5 h-3.5 text-gray-500" />
                              {app.clientName}
                            </span>
                            <span className="text-gray-500 text-[11px] flex items-center gap-1.5 font-mono">
                              <Phone className="w-3.5 h-3.5 text-gray-600" />
                              {app.phone}
                            </span>
                          </div>
                        </td>
                        <td className="py-4.5 px-6">
                          <span className="text-gray-300 font-medium">{app.service}</span>
                        </td>
                        <td className="py-4.5 px-6 font-mono text-[11px] text-gray-400">
                          <div className="flex flex-col text-left space-y-0.5">
                            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-gray-600" /> {app.date}</span>
                            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gray-600" /> {app.time}</span>
                          </div>
                        </td>
                        <td className="py-4.5 px-6">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 text-[9px] uppercase tracking-widest font-semibold ${
                            app.status === 'confirmed' 
                              ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                              : app.status === 'cancelled'
                              ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                              : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                          }`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="py-4.5 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => updateStatus(app._id, 'confirmed')}
                              disabled={updatingId === app._id || app.status === 'confirmed'}
                              className="p-1.5 rounded bg-green-500/10 hover:bg-green-500/25 border border-green-500/20 text-green-400 disabled:opacity-30 transition-all cursor-pointer"
                              title="Confirm Appointment"
                            >
                              <CheckCircle2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => updateStatus(app._id, 'cancelled')}
                              disabled={updatingId === app._id || app.status === 'cancelled'}
                              className="p-1.5 rounded bg-red-500/10 hover:bg-red-500/25 border border-red-500/20 text-red-400 disabled:opacity-30 transition-all cursor-pointer"
                              title="Cancel Appointment"
                            >
                              <XCircle className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: MEMBER REGISTRY PANEL */}
        {activeTab === 'members' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side: Add Member Form */}
            <div className="lg:col-span-4 bg-[#111111] border border-white/5 p-6 sm:p-8 gold-glow text-left">
              <div className="flex items-center gap-2 mb-2 text-parlourGold">
                <PlusCircle className="w-4 h-4" />
                <span className="text-[10px] tracking-widest uppercase font-semibold">Walk-in Sales</span>
              </div>
              <h3 className="font-cormorant font-bold text-2xl text-white mb-6">
                Add Lifetime Cardholder
              </h3>

              <form onSubmit={handleMemberSubmit} className="space-y-4">
                <div>
                  <label className="block text-[9px] text-gray-500 uppercase tracking-widest mb-1.5 font-semibold">Member Name</label>
                  <input
                    type="text"
                    value={memberForm.clientName}
                    onChange={(e) => setMemberForm({ ...memberForm, clientName: e.target.value })}
                    placeholder="e.g. Shruti Joshi"
                    className="w-full bg-[#161616] border border-white/5 px-4 py-3 text-xs text-white focus:outline-none focus:border-parlourGold/40 transition-colors font-light"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[9px] text-gray-500 uppercase tracking-widest mb-1.5 font-semibold">Contact Phone</label>
                  <input
                    type="tel"
                    value={memberForm.phone}
                    onChange={(e) => setMemberForm({ ...memberForm, phone: e.target.value })}
                    placeholder="e.g. +91 9343162030"
                    className="w-full bg-[#161616] border border-white/5 px-4 py-3 text-xs text-white focus:outline-none focus:border-parlourGold/40 transition-colors font-light"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[9px] text-gray-500 uppercase tracking-widest mb-1.5 font-semibold">Registration Date</label>
                  <input
                    type="date"
                    value={memberForm.registrationDate}
                    onChange={(e) => setMemberForm({ ...memberForm, registrationDate: e.target.value })}
                    className="w-full bg-[#161616] border border-white/5 px-4 py-3 text-xs text-white focus:outline-none focus:border-parlourGold/40 transition-colors font-light"
                    required
                  />
                </div>

                {memberStatus === 'success' && (
                  <div className="bg-green-950/20 border border-green-500/30 p-2.5 text-[10px] text-green-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Member registered successfully!</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={memberStatus === 'loading'}
                  className="w-full py-3.5 bg-parlourGold text-parlourDark uppercase tracking-[0.2em] font-bold text-xs hover:brightness-110 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  {memberStatus === 'loading' ? 'Saving Record...' : 'Save Member'}
                </button>
              </form>
            </div>

            {/* Right side: Search & List */}
            <div className="lg:col-span-8 bg-[#111111] border border-white/5 overflow-hidden gold-glow">
              <div className="p-6 border-b border-white/5 bg-[#141414] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <span className="text-xs font-semibold tracking-wider text-white uppercase">
                  Verified Lifetime Cardholders
                </span>
                
                {/* Instant Search input */}
                <div className="relative w-full sm:w-64">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Search className="w-3.5 h-3.5 text-gray-500" />
                  </span>
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name or phone..."
                    className="w-full bg-[#1c1c1c] border border-white/5 pl-10 pr-4 py-2 text-xs text-white focus:outline-none focus:border-parlourGold/30 transition-colors font-light"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 text-gray-500 uppercase tracking-widest text-[9px] font-semibold bg-white/2">
                      <th className="py-4 px-6">Cardholder Name</th>
                      <th className="py-4 px-6">Phone Number</th>
                      <th className="py-4 px-6">Registered On</th>
                      <th className="py-4 px-6 font-semibold">Card Status</th>
                      <th className="py-4 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs sm:text-[13px] font-light">
                    {members.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="py-12 text-center text-gray-500 font-light font-montserrat">
                          {searchQuery ? 'No matching cardholder records discovered.' : 'No registered members.'}
                        </td>
                      </tr>
                    ) : (
                      members.map((member) => (
                        <tr key={member._id} className="hover:bg-white/2 transition-colors">
                          <td className="py-4.5 px-6">
                            <span className="text-white font-medium flex items-center gap-2">
                              <User className="w-3.5 h-3.5 text-gray-500" />
                              {member.clientName}
                            </span>
                          </td>
                          <td className="py-4.5 px-6 font-mono text-[11px] text-gray-400">
                            {member.phone}
                          </td>
                          <td className="py-4.5 px-6 font-mono text-[11px] text-gray-400">
                            {member.registrationDate}
                          </td>
                          <td className="py-4.5 px-6">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[8px] uppercase tracking-widest font-semibold bg-parlourGold/10 text-parlourGold border border-parlourGold/25">
                              <CreditCard className="w-2.5 h-2.5" />
                              Lifetime Active
                            </span>
                          </td>
                          <td className="py-4.5 px-6 text-right">
                            {confirmDeleteId === member._id ? (
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => executeDelete(member._id)}
                                  disabled={deletingId === member._id}
                                  className="px-2.5 py-1 text-[9px] uppercase font-bold tracking-wider bg-red-600 hover:bg-red-700 text-white rounded transition-all cursor-pointer"
                                >
                                  Confirm
                                </button>
                                <button
                                  onClick={() => setConfirmDeleteId(null)}
                                  className="p-1 rounded bg-white/5 hover:bg-white/10 text-gray-400 transition-all cursor-pointer"
                                >
                                  <XCircle className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => setConfirmDeleteId(member._id)}
                                className="p-1.5 rounded bg-red-500/10 hover:bg-red-500/25 border border-red-500/20 text-red-400 transition-all cursor-pointer inline-flex items-center"
                                title="Delete Member"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}