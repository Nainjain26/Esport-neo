type UpcomingTournament = {
  bannerUrl: string;
  title: string;
  date: string;
  entryFee: string;
  prizePool: string;
  teams: number;
  type: string;
  onView: () => void;
};

type HistoryTournament = {
  title: string;
  date: string;
  reward: string;
  placement: string;
};

type TournamentSidebarProps = {
  upcoming: UpcomingTournament[];
  history: HistoryTournament[];
};

export default function TournamentSidebar({
  upcoming,
  history,
}: TournamentSidebarProps) {
  return (
    <aside className="w-full sm:w-96 flex flex-col gap-6">
      {/* Upcoming Tournaments */}
      <section className="bg-[#181c23] rounded-lg p-4">
        <div className="font-semibold text-[#9F9F9F] mb-3">
          Upcoming Tournaments
        </div>
        <div className="flex flex-col gap-4 max-h-80 overflow-auto scrollbar-thin scrollbar-track-transparent
          {history.map((h, i) => (">
          {upcoming.map((t, i) => (
            <div
              key={i}
              className="bg-[#232a36] rounded-lg p-3 flex flex-col gap-2"
            >
              <img
                src={t.bannerUrl}
                alt={t.title}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <div className="font-semibold text-white text-sm">{t.title}</div>
              <div className="flex flex-wrap gap-2 text-xs text-[#9F9F9F] mb-2">
                <span>📅 {t.date}</span>
                <span>
                  Entry Fee{" "}
                  <span className="text-[#ed7612] font-bold">
                    {t.entryFee} 🪙
                  </span>
                </span>
                <span>
                  Prize Pool{" "}
                  <span className="text-[#ed7612] font-bold">
                    {t.prizePool} 🪙
                  </span>
                </span>
                <span>Teams {t.teams}</span>
                <span>Type {t.type}</span>
              </div>
              <button
                onClick={t.onView}
                className="w-full bg-[#3b47fa] hover:bg-[#2e36c9] text-white font-semibold py-1.5 rounded transition text-sm"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Tournament History */}
      <section className="bg-[#181c23] rounded-lg p-4">
        <div className="font-semibold text-[#9F9F9F] mb-3">
          Your Tournament History
        </div>
        <div className="flex flex-col gap-4 max-h-64 overflow-auto scrollbar-thin  scrollbar-track-transparent">
          {history.map((h, i) => (
            <div
              key={i}
              className="bg-[#232a36] rounded-lg p-3 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="font-semibold text-white text-sm">
                  {h.title}
                </div>
                <span className="bg-[#232a36] text-[#3b47fa] border border-[#3b47fa] rounded px-2 py-0.5 text-xs font-bold">
                  {h.placement}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-[#9F9F9F] mb-1">
                <span>📅 {h.date}</span>
                <span>
                  Reward{" "}
                  <span className="text-[#ed7612] font-bold">
                    {h.reward} 🪙
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
