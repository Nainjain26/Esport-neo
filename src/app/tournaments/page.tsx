"use client";
import TournamentDetails from "../../components/TournamentDetails";
import TournamentSidebar from "../../components/TournamentSidebar";
import RegisteredTeams from "../../components/RegisteredTeams";

function handleRegister() {
  alert("Register action (connect to backend here)");
}
function handleViewDetails() {
  alert("View details action (connect to backend here)");
}

const tournament = {
  bannerUrl: "/bgmi1.jpg",
  status: "Starts in 3 days",
  title: "BGMI Summer Championship",
  teams: 32,
  prizePool: "25,000 NC",
  location: "Online + Finals in Mumbai",
  entryFee: "1,500",
  registration: "Open",
  schedule: [
    { round: "Qualifiers", date: "Jun 28-30" },
    { round: "Quarter-Finals", date: "Jul 2-3" },
    { round: "Semi-Finals", date: "Jul 5" },
    { round: "Finals", date: "Jul 8" },
  ],
  prizes: [
    { place: "1st Place", amount: "12,000 NC" },
    { place: "2nd Place", amount: "6,000 NC" },
    { place: "3rd Place", amount: "3,000 NC" },
    { place: "4th-10th", amount: "4,000 NC (split)" },
  ],
  description:
    "Join the ultimate BGMI battle this summer! The championship features both online qualifiers and an exciting offline final event in Mumbai. Teams will compete in a series of matches across multiple maps, with points awarded for both placement and eliminations. The top teams will advance through each stage, culminating in an epic final showdown.",
  rules: [
    "Squad format (4 players + 1 substitute allowed)",
    "Point system: Placement (20-1) + Eliminations (1 point each)",
    "Maps: Erangel, Miramar, Sanhok (rotation)",
    "Qualifiers: 5 matches, top 16 teams advance",
    "Finals: 6 matches, cumulative points determine winners",
  ],
  onRegister: handleRegister,
};

const upcoming = [
  {
    bannerUrl: "/bgmi.jpg",
    title: "BGMI Summer Championship",
    date: "Jun 28 - Jul 8",
    entryFee: "1500",
    prizePool: "25000",
    teams: 32,
    type: "Online + Offline Finals",
    onView: handleViewDetails,
  },
  {
    bannerUrl: "/bgmi.jpg",
    title: "BGMI Summer Championship",
    date: "Jun 28 - Jul 8",
    entryFee: "1500",
    prizePool: "25000",
    teams: 32,
    type: "Online + Offline Finals",
    onView: handleViewDetails,
  },
  {
    bannerUrl: "/bgmi.jpg",
    title: "BGMI Summer Championship",
    date: "Jun 28 - Jul 8",
    entryFee: "1500",
    prizePool: "25000",
    teams: 32,
    type: "Online + Offline Finals",
    onView: handleViewDetails,
  },
];

const history = [
  {
    title: "Spring Showdown",
    date: "May 10-12",
    reward: "3000",
    placement: "3rd Place",
  },
  {
    title: "Spring Showdown",
    date: "May 10-12",
    reward: "3000",
    placement: "3rd Place",
  },
  {
    title: "Spring Showdown",
    date: "May 10-12",
    reward: "3000",
    placement: "3rd Place",
  }, {
    title: "Spring Showdown",
    date: "May 10-12",
    reward: "3000",
    placement: "3rd Place",
  }, {
    title: "Spring Showdown",
    date: "May 10-12",
    reward: "3000",
    placement: "3rd Place",
  }, {
    title: "Spring Showdown",
    date: "May 10-12",
    reward: "3000",
    placement: "3rd Place",
  }, {
    title: "Spring Showdown",
    date: "May 10-12",
    reward: "3000",
    placement: "3rd Place",
  },
];

const teams = [
  { tag: "PS", name: "Phoenix Squad", members: 4, rank: 12, wins: 28 },
  { tag: "SH", name: "Shadow Hunters", members: 4, rank: 15, wins: 22 },
  {
    tag: "VS",
    name: "Venom Squad",
    members: 4,
    rank: 20,
    wins: 18,
    // highlight: true,
  },
  { tag: "SA", name: "Stealth Assassins", members: 4, rank: 17, wins: 21 },
  { tag: "DS", name: "Dragon Slayers", members: 4, rank: 8, wins: 35 },
  { tag: "EF", name: "Elite Force", members: 4, rank: 5, wins: 42 },
  { tag: "TW", name: "Thunder Wolves", members: 4, rank: 11, wins: 30 },
  { tag: "AP", name: "Apex Predators", members: 4, rank: 3, wins: 45 },
];

export default function TournamentsPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-2 sm:px-4 md:px-8 py-4 sm:py-8 w-full">
      <div className="flex-1 min-w-0 flex flex-col gap-8">
        <TournamentDetails {...tournament} />
        <RegisteredTeams teams={teams} />
      </div>
      <div className="w-full lg:w-[400px] flex-shrink-0">
        <TournamentSidebar upcoming={upcoming} history={history} />
      </div>
    </div>
  );
}
