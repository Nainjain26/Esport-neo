"use client";

import SquadDetails from "../../components/SquadDetails";
import SquadSidebar from "../../components/SquadSidebar";
import UpcomingBattles from "@/components/UpcomingBattles";

type SquadMember = {
  name: string;
  avatar: string;
  role: string;
  status: "online" | "offline" | "in-battle";
  lastActive: string;
  performance: number;
  highlight?: boolean;
};

function handleBattleHistory() {
  alert("Battle history action (connect to backend here)");
}
function handleInvite() {
  alert("Invite member action (connect to backend here)");
}

const squad = {
  bannerUrl: "/squad-banner.jpg",
  rank: 12,
  name: "Phoenix Squad",
  members: "12/15",
  towers: 3,
  winRate: "68%",
  controlledTowers: [
    { name: "Alpha Tower", coins: 350, time: "2h 15m" },
    { name: "Delta Tower", coins: 400, time: "5h 30m" },
    { name: "Foxtrot Tower", coins: 275, time: "1h 45m" },
  ],
  achievements: [
    {
      title: "Tower Domination",
      desc: "Controlled 3+ towers simultaneously",
      time: "2 days ago",
    },
    {
      title: "Tournament Finalist",
      desc: "Reached finals in Regional Cup",
      time: "1 week ago",
    },
    {
      title: "Kill Leaders",
      desc: "Highest squad kill count this month",
      time: "2 weeks ago",
    },
  ],
  onBattleHistory: handleBattleHistory,
  onInvite: handleInvite,
};

const members: SquadMember[] = [
  {
    name: "ThunderBolt",
    avatar: "/avatar1.jpg",
    role: "Elite Member",
    status: "in-battle",
    lastActive: "Now",
    performance: 79,
  },
  {
    name: "FrostBite",
    avatar: "/avatar2.jpg",
    role: "Member",
    status: "online",
    lastActive: "15m ago",
    performance: 75,
  },
  {
    name: "PhoenixRise",
    avatar: "/avatar3.jpg",
    role: "Member",
    status: "offline",
    lastActive: "1d ago",
    performance: 72,
  },
  {
    name: "SteelBullet",
    avatar: "/avatar4.jpg",
    role: "Member",
    status: "online",
    lastActive: "30m ago",
    performance: 68,
  },
];

export default function SquadPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-0 px-0 py-0 w-full min-h-screen bg-[#202532]">
      <div className="w-full lg:w-[500px] flex-shrink-0 p-4">
        <div className="bg-[#232a36] rounded-2xl shadow-md p-0">
          <SquadDetails {...squad} />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-6 p-4">
        <div className="bg-[#232834] rounded-2xl shadow-md p-4">
          <SquadSidebar members={members} />
        </div>
        <UpcomingBattles />
      </div>
    </div>
  );
}
