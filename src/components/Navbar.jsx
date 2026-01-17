import {
  LayoutDashboard,
  Home,
  Trophy,
  FileText,
  ShieldCheck,
  Menu,
  X,
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
    <header className="w-full bg-black border-b border-yellow-500/30">
      <div className="h-16 flex items-center px-6">

        {/* LEFT — LOGO */}
        <div
          className="flex items-center gap-2 select-none cursor-pointer"
          onClick={() => navigate("/")}
        >
          <ShieldCheck size={28} className="text-yellow-400" />
          <span className="text-xl font-extrabold tracking-wider text-yellow-400">
            IEEE <span className="font-mono text-yellow-300">CTF</span>
          </span>
        </div>

        {/* CENTER — NAV (DESKTOP) */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
          <NavItem path="/" icon={<Home size={18} />} label="Home" active={path === "/"} />
          <NavItem path="/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" active={path === "/dashboard"} />
          <NavItem path="/leaderboard" icon={<Trophy size={18} />} label="Leaderboard" active={path === "/leaderboard"} />
          <NavItem path="/logs" icon={<FileText size={18} />} label="Logs" active={path === "/logs"} />
        </nav>

        {/* RIGHT — TEAM IDENTITY (DESKTOP) */}
        {teamName && (
          <div className="hidden md:flex items-center ml-auto group cursor-default">
            
            {/* Accent bar */}
            <div className="h-8 w-[3px] rounded-full bg-gradient-to-b from-yellow-400 to-transparent mr-3 opacity-80" />

            {/* Team text */}
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] tracking-widest text-gray-500 uppercase">
                Team
              </span>
              <span className="text-yellow-400 font-semibold tracking-wide transition group-hover:text-yellow-300">
                {teamName}
              </span>
            </div>
          </div>
        )}

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto md:hidden text-yellow-400"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-black border-t border-yellow-500/20 px-6 py-4 space-y-4">
          <MobileItem label="Home" path="/" />
          <MobileItem label="Dashboard" path="/dashboard" />
          <MobileItem label="Leaderboard" path="/leaderboard" />
          <MobileItem label="Logs" path="/logs" />

          {/* TEAM INFO (MOBILE) */}
          {teamName && (
            <div className="pt-4 border-t border-yellow-500/20">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">
                Team
              </p>
              <p className="text-yellow-400 font-semibold">
                {teamName}
              </p>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

/* ---------- NAV ITEM ---------- */
const NavItem = ({ icon, label, active, path }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className={`flex items-center gap-2 text-sm font-medium tracking-wide transition
        ${
          active
            ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
            : "text-gray-400 hover:text-yellow-400"
        }`}
    >
      {icon}
      {label}
    </button>
  );
};

/* ---------- MOBILE ITEM ---------- */
const MobileItem = ({ label, path }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className="w-full flex items-center gap-3 px-3 py-2 rounded-md
        text-gray-300 text-sm font-medium transition
        hover:bg-yellow-400/10 hover:text-yellow-400"
    >
      <span className="w-1 h-5 rounded-full bg-yellow-400 opacity-60" />
      {label}
    </button>
  );
};

export default Navbar;
