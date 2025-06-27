type ScheduleItem = { round: string; date: string };
type PrizeItem = { place: string; amount: string };
type RuleItem = string;

type TournamentDetailsProps = {
  bannerUrl: string;
  status: string;
  title: string;
  teams: number;
  prizePool: string;
  location: string;
  entryFee: string;
  registration: string;
  schedule: ScheduleItem[];
  prizes: PrizeItem[];
  description: string;
  rules: RuleItem[];
  onRegister: () => void;
};

export default function TournamentDetails({
  bannerUrl,
  status,
  title,
  teams,
  prizePool,
  location,
  entryFee,
  registration,
  schedule,
  prizes,
  description,
  rules,
  onRegister,
}: TournamentDetailsProps) {
  return (
    <div className="w-full bg-black rounded-lg overflow-hidden flex flex-col">
      {/* Banner */}
      <div className="relative w-full h-48 sm:h-64">
        <img
          src={bannerUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-4 left-4 bg-[#232a36] text-white text-xs px-3 py-1 rounded-full shadow">
          <span role="img" aria-label="calendar">
            🗓️
          </span>{" "}
          {status}
        </div>
      </div>
      {/* Title & Info */}
      <div className="p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-[#9F9F9F] text-sm mb-4">
          <span>
            <span role="img" aria-label="teams">
              👥
            </span>{" "}
            {teams} Teams
          </span>
          <span>
            <span role="img" aria-label="prize">
              🏆
            </span>{" "}
            {prizePool} Prize Pool
          </span>
          <span>
            <span role="img" aria-label="type">
              🌐
            </span>{" "}
            {location}
          </span>
        </div>
        {/* Registration Card */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="bg-[#181c23] rounded-lg p-4 flex-1 min-w-[200px] flex flex-col items-center justify-center">
            <div className="text-[#ed7612] text-2xl font-bold mb-1">
              {entryFee} <span className="text-base">🪙</span>
            </div>
            <div className="text-[#9F9F9F] text-xs mb-3">
              Entry Fee per Squad
            </div>
            <button
              onClick={onRegister}
              className="w-full bg-[#3b47fa] hover:bg-[#2e36c9] text-white font-semibold py-2 rounded transition"
            >
              Register Now
            </button>
          </div>
          {/* Schedule & Prizes */}
          <div className="flex-1 flex flex-col gap-4">
            <div>
              <div className="font-semibold text-[#9F9F9F] mb-1">Schedule</div>
              <ul className="text-xs text-[#9F9F9F]">
                {schedule.map((item, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{item.round}:</span> <span>{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold text-[#9F9F9F] mb-1">
                Prize Distribution
              </div>
              <ul className="text-xs text-[#9F9F9F]">
                {prizes.map((item, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{item.place}:</span> <span>{item.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="mb-4">
          <div className="font-semibold text-[#9F9F9F] mb-1">
            Tournament Description
          </div>
          <p className="text-[#9F9F9F] text-sm">{description}</p>
        </div>
        {/* Rules & Format */}
        <div>
          <div className="font-semibold text-[#9F9F9F] mb-1">
            Rules & Format
          </div>
          <ul className="list-disc pl-5 text-[#9F9F9F] text-sm">
            {rules.map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
