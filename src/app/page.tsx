import MainSection from "../components/MainSection";
import Sidebar from "../components/Sidebar";

const towers = [
  {
    name: "Delta Tower",
    status: "Captured",
    owner: "Elite Force",
    color: "#22c55e",
  },
  {
    name: "Echo Tower",
    status: "Available",
    owner: "None",
    color: "#3b82f6",
  },
];

const activities = [
  {
    icon: "🛡️",
    message: "Shadow Hunters defending Bravo Tower",
    time: "1 hour ago",
  },
  {
    icon: "⚔️",
    message: "Elite Force won battle against Venom Squad",
    time: "2 hours ago",
  },
  {
    icon: "🪙",
    message: "Phoenix Squad earned 250 NeoCoins",
    time: "3 hours ago",
  },
];

export default function Home() {
  // Example: Replace with fetch('/api/your-endpoint') for real backend
  // const data = await fetch(...)
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 px-2 sm:px-8 py-4 sm:py-8 w-full">
      <MainSection
        title="Battle Map"
        description="Capture towers, defend territory, and track squad movements in real-time"
        mapData={null} // Replace with real map data from backend
      />
      <Sidebar towers={towers} activities={activities} />
    </div>
  );
}
