import { Terminal, MessageSquare, Code2, Share2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-yellow-500/20 px-10 py-12 relative overflow-hidden">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,204,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,204,0,0.04)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* LEFT - BRAND */}
        <div>
          <div className="flex items-center gap-2 text-yellow-400 font-bold text-lg mb-4">
            <span>ROOT{"{CTF}"}</span>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            The ultimate platform for cybersecurity enthusiasts to challenge
            their skills, compete globally, and master the art of exploitation.
          </p>

          <p className="text-xs text-gray-500">
            © 2024 ROOT_SYSTEM_NETWORK <br />
            ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* SYSTEM LINKS */}
        <div>
          <h4 className="text-yellow-400 font-semibold text-sm mb-4 tracking-widest">
            SYSTEM LINKS
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">Challenges</li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Leaderboard
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Event Rules
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Hall of Fame
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="text-yellow-400 font-semibold text-sm mb-4 tracking-widest">
            SUPPORT
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">
              FAQ / Knowledge Base
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              API Documentation
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">Bug Bounty</li>
            <li className="hover:text-yellow-400 cursor-pointer">
              System Status
            </li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h4 className="text-yellow-400 font-semibold text-sm mb-4 tracking-widest">
            CONNECT
          </h4>

          <div className="flex items-center gap-3 mb-6">
            <IconBox>
              <MessageSquare size={16} />
            </IconBox>
            <IconBox>
              <Code2 size={16} />
            </IconBox>
            <IconBox>
              <Share2 size={16} />
            </IconBox>
          </div>

          {/* ANNOUNCEMENT */}
          {/* <div className="border border-yellow-500/30 rounded-lg p-4 bg-gradient-to-b from-zinc-900 to-black">
            <p className="text-xs text-gray-400 mb-1 tracking-widest">
              PLATFORM ANNOUNCEMENTS
            </p>
            <p className="text-sm text-yellow-400 italic">
              "System update scheduled for 03:00 UTC"
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

const IconBox = ({ children }) => {
  return (
    <div className="w-9 h-9 flex items-center justify-center border border-yellow-500/30 rounded-lg text-yellow-400 hover:bg-yellow-400 hover:text-black transition cursor-pointer">
      {children}
    </div>
  );
};

export default Footer;
