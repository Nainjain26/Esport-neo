"use client";
import React from "react";

const battles = [
  {
    type: "Tower Challenge",
    typeColor: "bg-black text-white",
    title: "Bravo Tower",
    time: "Today, 18:00",
    status: "Scheduled",
    reward: 500,
    rewardIcon: true,
    highlight: false,
    statusColor: "text-[#9F9F9F]",
    labelBg: "bg-black text-white",
  },
  {
    type: "Tournament Match",
    typeColor: "bg-white text-black",
    title: "vs. Dragon Slayers",
    time: "Tomorrow, 20:00",
    status: "Quarter-Finals",
    reward: 1200,
    rewardIcon: true,
    highlight: false,
    statusColor: "text-[#9F9F9F]",
    labelBg: "bg-white text-black",
  },
  {
    type: "Squad Battle",
    typeColor: "bg-[#232834] text-[#9F9F9F] border border-[#9F9F9F]",
    title: "vs. Shadow Hunters",
    time: "Friday, 19:30",
    status: "Friendly",
    reward: 350,
    rewardIcon: true,
    highlight: false,
    statusColor: "text-[#9F9F9F]",
    labelBg: "bg-[#232834] text-[#9F9F9F] border border-[#9F9F9F]",
  },
  {
    type: "Tower Defense",
    typeColor: "bg-[#ed7612] text-white",
    title: "Alpha Tower",
    time: "Saturday, 15:00",
    status: "Under Threat",
    reward: 400,
    rewardIcon: true,
    highlight: true,
    statusColor: "text-[#ed7612]",
    labelBg: "bg-[#ed7612] text-white",
  },
];

export default function UpcomingBattles() {
  return (
    <div className="bg-[#232834] rounded-xl p-6 mt-4 shadow-md w-full">
      <div className="flex items-center mb-1 text-[#9F9F9F] text-sm font-medium">
        <span className="mr-2 text-base">🔵</span>
        Upcoming Battles
      </div>
      <div className="text-xs text-[#9F9F9F] mb-4">
        Scheduled tower challenges and tournament matches
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {battles.map((battle, idx) => (
          <div
            key={idx}
            className="bg-[#232834] border border-[#31394a] rounded-lg p-4 flex flex-col justify-between min-h-[110px]"
          >
            <div className="flex items-center justify-between mb-1">
              <span
                className={`text-xs px-2 py-1 rounded ${battle.labelBg} font-semibold`}
              >
                {battle.type}
              </span>
              <span className="text-[#ed7612] font-bold text-base flex items-center gap-1">
                {battle.reward}
                <span className="text-xs">🪙</span>
              </span>
            </div>
            <div className="text-[#9F9F9F] font-semibold text-sm mb-1">
              {battle.title}
            </div>
            <div className="flex items-center justify-between text-xs text-[#9F9F9F]">
              <span className="flex items-center gap-1">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block"
                >
                  <path stroke="#9F9F9F" strokeWidth="2" d="M12 8v4l3 2" />
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#9F9F9F"
                    strokeWidth="2"
                  />
                </svg>
                {battle.time}
              </span>
              <span className={`text-xs font-medium ${battle.statusColor}`}>
                {battle.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button
        className="w-full bg-[#3a53e6] hover:bg-[#2d42b3] text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 text-sm transition-colors duration-150"
        type="button"
      >
        <span className="text-lg font-bold">+</span> Schedule New Battle
      </button>
    </div>
  );
}
