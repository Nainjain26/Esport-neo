import React from "react";

type Team = {
  tag: string; // e.g. 'PS'
  name: string;
  members: number;
  rank: number;
  wins: number;
  highlight?: boolean;
};

type RegisteredTeamsProps = {
  teams: Team[];
};

export default function RegisteredTeams({ teams }: RegisteredTeamsProps) {
  // Split teams into two columns
  const mid = Math.ceil(teams.length / 2);
  const left = teams.slice(0, mid);
  const right = teams.slice(mid);

  return (
    <section className="bg-[#232a36] rounded-2xl p-6 sm:p-8 mt-8 w-full shadow-lg">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-yellow-400 text-xl">🏆</span>
        <span className="font-semibold text-white text-xl">
          Registered Teams
        </span>
      </div>
      <div className="text-[#9F9F9F] mb-8 text-base">
        Teams that have registered for this tournament
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
        {/* Left column */}
        <div className="flex flex-col gap-2">
          {left.map((team, i) => (
            <div
              key={team.name}
              className={`flex items-center justify-between rounded-xl px-4 py-3 transition ${
                team.highlight ? "bg-[#31394a]" : "hover:bg-[#232a36]/80"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-[#232a36] text-lg border border-[#9F9F9F] shadow-sm">
                  {team.tag}
                </div>
                <div>
                  <div className="font-semibold text-white text-lg leading-tight">
                    {team.name}
                  </div>
                  <div className="text-sm text-[#9F9F9F]">
                    {team.members} Members • Rank #{team.rank}
                  </div>
                </div>
              </div>
              <div className="font-semibold text-[#9F9F9F] text-lg whitespace-nowrap">
                {team.wins} Wins
              </div>
            </div>
          ))}
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-2 md:border-l md:border-[#31394a] md:pl-8">
          {right.map((team, i) => (
            <div
              key={team.name}
              className={`flex items-center justify-between rounded-xl px-4 py-3 transition ${
                team.highlight ? "bg-[#31394a]" : "hover:bg-[#232a36]/80"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-[#232a36] text-lg border border-[#9F9F9F] shadow-sm">
                  {team.tag}
                </div>
                <div>
                  <div className="font-semibold text-white text-lg leading-tight">
                    {team.name}
                  </div>
                  <div className="text-sm text-[#9F9F9F]">
                    {team.members} Members • Rank #{team.rank}
                  </div>
                </div>
              </div>
              <div className="font-semibold text-[#9F9F9F] text-lg whitespace-nowrap">
                {team.wins} Wins
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
