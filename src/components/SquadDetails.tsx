"use client";

type ControlledTower = {
  name: string;
  coins: number;
  time: string;
};

type Achievement = {
  title: string;
  desc: string;
  time: string;
};

type SquadDetailsProps = {
  bannerUrl: string;
  rank: number;
  name: string;
  members: string;
  towers: number;
  winRate: string;
  controlledTowers: ControlledTower[];
  achievements: Achievement[];
  onBattleHistory: () => void;
  onInvite: () => void;
};

export default function SquadDetails({
  
  rank,
  name,
  members,
  towers,
  winRate,
  controlledTowers,
  achievements,
  onBattleHistory,
  onInvite,
}: SquadDetailsProps) {
  return (
    <div className="w-full h-full bg-[#232a36] rounded-xl overflow-hidden flex flex-col border border-[#31394a]">
      {/* Banner */}
      <div className="relative w-full h-48">
        <img
          src="/bgmi.jpg"
          alt={name}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 left-2 flex items-center gap-2">
          <span className="bg-white shadow px-2 py-0.5 rounded-full flex items-center gap-1 font-bold text-[#232a36] text-xs">
            <span className="text-blue-500 text-base">★</span> Rank {rank}
          </span>
        </div>
        <button className="absolute top-2 right-2 border border-[#9F9F9F] bg-[#232a36]/80 text-white font-semibold px-3 py-0.5 rounded text-xs shadow hover:bg-[#31394a] transition">
          Manage
        </button>
        <div className="absolute left-0 right-0 bottom-0 px-3 pb-1 flex items-end">
          <div className="text-lg font-bold text-white drop-shadow-lg">
            {name}
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="flex gap-5 px-3 py-2 border-b border-[#31394a] text-center">
        <div className="flex-1">
          <div className="text-[#9F9F9F] text-xs">Members</div>
          <div className="text-base font-bold text-white">{members}</div>
        </div>
        <div className="flex-1">
          <div className="text-[#9F9F9F] text-xs">Towers</div>
          <div className="text-base font-bold text-white">{towers}</div>
        </div>
        <div className="flex-1">
          <div className="text-[#9F9F9F] text-xs">Win Rate</div>
          <div className="text-base font-bold text-white">{winRate}</div>
        </div>
      </div>
      {/* Controlled Towers */}
      <div className="px-3 pt-2 pb-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-blue-400 text-base">🏰</span>
          <span className="font-semibold text-white text-sm">
            Controlled Towers
          </span>
        </div>
        <div className="flex flex-col gap-5">
          {controlledTowers.map((tower) => (
            <div key={tower.name} className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
              <span className="font-medium text-white">{tower.name}</span>
              <span className="ml-auto flex items-center gap-1 text-[#ed7612] font-bold">
                {tower.coins} <span className="text-xs">🪙</span>
              </span>
              <span className="text-[10px] text-[#9F9F9F] ml-2 whitespace-nowrap">
                {tower.time}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Achievements */}
      <div className="px-3 pt-2 pb-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-yellow-400 text-base">🏆</span>
          <span className="font-semibold text-white text-sm">
            Recent Achievements
          </span>
        </div>
        <div className="flex flex-col gap-5">
          {achievements.map((ach) => (
            <div key={ach.title} className="flex items-center gap-2 text-sm">
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white truncate">
                  {ach.title}
                </div>
                <div className="text-[10px] text-[#9F9F9F] truncate">
                  {ach.desc}
                </div>
              </div>
              <div className="text-[10px] text-[#9F9F9F] whitespace-nowrap">
                {ach.time}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="flex gap-2 px-3 py-2">
        <button
          onClick={onBattleHistory}
          className="flex-1 flex items-center justify-center gap-2 bg-white text-[#232a36] font-semibold py-1.5 rounded border border-[#9F9F9F] hover:bg-[#ededed] transition text-xs"
        >
          <span className="inline-block">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <rect x="3" y="11" width="18" height="2" rx="1" fill="#232a36" />
            </svg>
          </span>
          Battle History
        </button>
        <button
          onClick={onInvite}
          className="flex-1 flex items-center justify-center gap-2 bg-[#3b47fa] text-white font-semibold py-1.5 rounded hover:bg-[#2e36c9] transition text-xs"
        >
          <span className="inline-block">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 5v14m7-7H5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          Invite Member
        </button>
      </div>
    </div>
  );
}
