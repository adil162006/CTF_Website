import {
  LayoutDashboard,
  Home,
  Trophy,
  FileText,
  ShieldCheck,
  Menu,
  X,
  Crown,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const Navbar = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [teamName, setTeamName] = useState("");

  /* ---------- FETCH LOGGED IN TEAM ---------- */
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setTeamName(data.user.user_metadata?.team_name || "");
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16 max-w-7xl mx-auto">
            
            {/* LEFT — LOGO */}
            <div
              className="flex items-center gap-2 sm:gap-3 cursor-pointer group z-10"
              onClick={() => navigate("/")}
            >
              <ShieldCheck 
                size={28} 
                className="text-yellow-400 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3" 
              />
              <span className="text-lg sm:text-xl font-bold tracking-wide text-white group-hover:text-yellow-400 transition-colors">
                IEEE <span className="text-yellow-400">CTF</span>
              </span>
            </div>

            {/* CENTER — NAV LINKS (DESKTOP) */}
            <nav className={`hidden lg:flex items-center gap-2 ${!teamName ? 'absolute left-1/2 -translate-x-1/2' : ''}`}>
              <NavLink path="/" icon={Home} label="Home" active={path === "/"} />
              <NavLink path="/dashboard" icon={LayoutDashboard} label="Dashboard" active={path === "/dashboard"} />
              <NavLink path="/leaderboard" icon={Trophy} label="Leaderboard" active={path === "/leaderboard"} />
              <NavLink path="/logs" icon={FileText} label="Logs" active={path === "/logs"} />
            </nav>

            {/* RIGHT — TEAM BADGE (DESKTOP) */}
            {teamName && (
              <div className="hidden lg:block">
                <TeamBadge teamName={teamName} />
              </div>
            )}

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-gray-400 hover:text-yellow-400 transition-colors"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden border-t border-zinc-800/50 bg-black/98 backdrop-blur-lg">
            <div className="px-4 sm:px-6 py-4 space-y-1">
              <MobileNavLink path="/" label="Home" active={path === "/"} onClick={() => setOpen(false)} />
              <MobileNavLink path="/dashboard" label="Dashboard" active={path === "/dashboard"} onClick={() => setOpen(false)} />
              <MobileNavLink path="/leaderboard" label="Leaderboard" active={path === "/leaderboard"} onClick={() => setOpen(false)} />
              <MobileNavLink path="/logs" label="Logs" active={path === "/logs"} onClick={() => setOpen(false)} />
              
              {teamName && (
                <div className="pt-3 mt-3 border-t border-zinc-800">
                  <TeamBadge teamName={teamName} mobile />
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(5px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(10px) translateX(-5px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

/* ---------- TEAM BADGE COMPONENT ---------- */
const TeamBadge = ({ teamName, mobile = false }) => {
  return (
    <div className="group relative">
      {/* Animated background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/30 via-orange-400/30 to-yellow-400/30 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500 animate-gradient-shift" />
      
      {/* Main container */}
      <div 
        className={`
          relative overflow-hidden rounded-xl
          bg-gradient-to-br from-zinc-900 via-zinc-900 to-black
          border border-yellow-400/20
          transition-all duration-300
          group-hover:border-yellow-400/40
          ${mobile ? 'p-3' : 'px-4 py-2.5'}
        `}
      >
        {/* Shine effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Animated particles background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/4 w-20 h-20 bg-yellow-400/20 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-16 h-16 bg-orange-400/20 rounded-full blur-2xl animate-float-delayed" />
        </div>

        <div className="relative flex items-center gap-3">
          {/* Crown icon container */}
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400/20 blur-md rounded-lg animate-pulse-slow" />
            <div 
              className="
                relative flex items-center justify-center
                w-9 h-9 rounded-lg
                bg-gradient-to-br from-yellow-400/20 via-yellow-500/10 to-orange-500/20
                border border-yellow-400/30
                transition-all duration-300
                group-hover:scale-105 group-hover:rotate-3
                group-hover:border-yellow-400/50
                group-hover:shadow-lg group-hover:shadow-yellow-400/20
              "
            >
              <Crown 
                size={16} 
                className="text-yellow-400 transition-all duration-300 group-hover:text-yellow-300" 
                strokeWidth={2.5}
              />
            </div>
          </div>

          {/* Divider with gradient */}
          <div className="w-px h-7 bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent" />

          {/* Team name */}
          <span 
            className="
              text-sm font-bold tracking-wide
              bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500
              bg-clip-text text-transparent
              transition-all duration-300
              group-hover:from-yellow-200 group-hover:via-yellow-300 group-hover:to-yellow-400
            "
          >
            {teamName}
          </span>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
      </div>
    </div>
  );
};

/* ---------- DESKTOP NAV LINK ---------- */
const NavLink = ({ path, icon: Icon, label, active }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className="group relative px-4 py-2 rounded-lg overflow-hidden"
    >
      {/* Background effects */}
      <div className={`
        absolute inset-0 transition-all duration-300
        ${active 
          ? 'bg-gradient-to-r from-yellow-400/10 via-yellow-500/15 to-yellow-400/10' 
          : 'bg-transparent group-hover:bg-zinc-800/50'
        }
      `} />
      
      {/* Animated border on hover */}
      {!active && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 border border-yellow-400/20 rounded-lg" />
        </div>
      )}

      {/* Active state border */}
      {active && (
        <div className="absolute inset-0 border border-yellow-400/30 rounded-lg" />
      )}

      {/* Glow effect on hover */}
      <div className="absolute -inset-1 bg-yellow-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

      {/* Content */}
      <div className="relative flex items-center gap-2.5">
        {/* Icon */}
        <div className={`
          transition-all duration-300
          ${active 
            ? 'text-yellow-400 scale-110' 
            : 'text-gray-400 group-hover:text-yellow-400 group-hover:scale-110'
          }
        `}>
          <Icon size={18} strokeWidth={2.5} />
        </div>
        
        {/* Label */}
        <span className={`
          font-semibold text-sm transition-all duration-300
          ${active 
            ? 'text-yellow-400' 
            : 'text-gray-400 group-hover:text-white'
          }
        `}>
          {label}
        </span>
      </div>

      {/* Active indicator line */}
      {active && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
      )}

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </button>
  );
};

/* ---------- MOBILE NAV LINK ---------- */
const MobileNavLink = ({ path, label, active, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`
        w-full text-left px-4 py-3 rounded-lg font-medium text-sm
        transition-all duration-200
        ${active 
          ? 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20' 
          : 'text-gray-400 hover:bg-zinc-800/50 hover:text-gray-200'
        }
      `}
    >
      {label}
    </button>
  );
};

export default Navbar;