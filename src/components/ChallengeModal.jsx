import { X, File, Flag } from "lucide-react";

const ChallengeModal = ({ isOpen, onClose, challenge }) => {
  if (!isOpen || !challenge) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-zinc-900 to-black border-2 border-yellow-400 rounded-lg p-6 shadow-2xl">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] text-yellow-400 border px-2 py-1 rounded">
                {challenge.category}
              </span>
              <span className="text-[11px] text-gray-400 border px-2 py-1 rounded">
                {challenge.points}
              </span>
            </div>

            <h2 className="text-2xl font-bold">{challenge.title}</h2>
          </div>

          <button onClick={onClose} className="text-gray-400 hover:text-yellow-400">
            <X size={22} />
          </button>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-400 mb-6">{challenge.description}</p>

        {/* RESOURCES */}
        <div className="border border-yellow-500/30 rounded-lg p-4 mb-6">
          <p className="text-xs text-yellow-400 mb-3">RESOURCES</p>
          <ul className="space-y-2 text-sm">
            {challenge.resources.map((res, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-300 hover:text-yellow-400">
                <File size={14} /> {res}
              </li>
            ))}
          </ul>
        </div>

        {/* META */}
        <div className="flex items-center gap-6 text-xs text-gray-500 mb-6">
          <span>👤 AUTHOR: <span className="text-gray-300">{challenge.author}</span></span>
          <span>🏆 SOLVES: <span className="text-gray-300">{challenge.solves}</span></span>
        </div>

        {/* SUBMIT */}
        <div className="mb-4">
          <p className="text-xs text-gray-400 mb-2">SUBMIT FLAG</p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 flex-1 bg-black border border-yellow-500/30 rounded-lg px-3 py-2">
              <Flag size={14} className="text-yellow-400" />
              <input
                type="text"
                placeholder="ROOT{your_flag_here}"
                className="bg-transparent outline-none text-sm text-white w-full"
              />
            </div>
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold">
              SUBMIT &gt;
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between text-[10px] text-gray-500 mt-6">
          <div>SECURE CONNECTION ACTIVE</div>
          <div>CHAL_ID: {challenge.chalId}</div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeModal;
