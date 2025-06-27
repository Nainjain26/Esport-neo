type Tower = {
  name: string;
  status: string;
  owner: string;
  color: string;
};

type Activity = {
  icon: string;
  message: string;
  time: string;
};

type SidebarProps = {
  towers: Tower[];
  activities: Activity[];
};

export default function Sidebar({ towers, activities }: SidebarProps) {
  return (
    <aside className="w-full sm:w-80 flex flex-col gap-4 mt-4 sm:mt-0">
      {/* Tower Status */}
      <section className="bg-black rounded-lg p-4 mb-2">
        <h2 className="text-[#9F9F9F] font-semibold mb-4 text-base sm:text-lg">
          Tower Status
        </h2>
        <p className="text-xs text-[#9F9F9F] mb-4">
          Currently active tower challenges and rewards
        </p>
        <div className="flex flex-col gap-3 text-sm max-h-56 overflow-auto pr-2 pb-2 scrollbar-hide">
          {towers.map((tower, idx) => (
            <div
              className="flex items-center justify-between px-2 py-2 bg-[#181818] rounded-lg"
              key={tower.name + idx}
            >
              <span className="flex items-center gap-2">
                <span
                  className={`inline-block w-2 h-2 rounded-full`}
                  style={{ backgroundColor: tower.color }}
                ></span>
                {tower.name}
                <span className="text-xs text-[#9F9F9F] ml-2">
                  {tower.owner}
                </span>
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded ${
                  tower.status === "Captured"
                    ? "bg-black text-[#9F9F9F]"
                    : "bg-[#232a36] text-[#9F9F9F]"
                }`}
              >
                {tower.status}
              </span>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 bg-[#ed7612] text-black py-2 rounded font-semibold flex items-center justify-center gap-2 hover:bg-[#ff8c1a] text-sm sm:text-base">
          <span role="img" aria-label="flag">
            🚩
          </span>{" "}
          Challenge Tower
        </button>
      </section>
      {/* Live Activity */}
      <section className="bg-black rounded-lg p-4">
        <h2 className="text-[#9F9F9F] font-semibold mb-2 text-base sm:text-lg">
          Live Activity
        </h2>
        <p className="text-xs text-[#9F9F9F] mb-2">
          Recent squad movements and battles
        </p>
        <ul className="flex flex-col gap-3 text-sm">
          {activities.map((activity, idx) => (
            <li className="flex items-start gap-2" key={idx}>
              <span
                className={
                  activity.icon.includes("🪙")
                    ? "text-[#ed7612] mt-1"
                    : "text-[#9F9F9F] mt-1"
                }
              >
                {activity.icon}
              </span>
              <div>
                <span className="text-[#9F9F9F] font-medium">
                  {activity.message}
                </span>
                <div className="text-xs text-[#9F9F9F]">{activity.time}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
