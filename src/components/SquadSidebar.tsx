"use client";
import React, { useState } from "react";

type SquadMember = {
  name: string;
  avatar: string;
  role: string;
  status: "online" | "offline" | "in-battle";
  lastActive: string;
  performance: number;
  highlight?: boolean;
};

type SquadSidebarProps = {
  members: SquadMember[];
};

export default function SquadSidebar({ members }: SquadSidebarProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <aside className="w-full flex flex-col gap-2">
      {/* Squad Members */}
      <div className="flex flex-col gap-5">
        {members.map((m, i) => (
          <div
            key={m.name}
            className={`flex items-center gap-5 rounded px-2 py-1 transition cursor-pointer ${
              hovered === i ? "bg-[#31394a]" : ""
            }`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={m.avatar}
              alt={m.name}
              className="w-8 h-8 rounded-full object-cover border-2 border-[#3b47fa]"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white text-sm truncate">
                  {m.name}
                </span>
                {m.role === "Elite Member" ? (
                  <span className="bg-yellow-400/90 text-[#232a36] text-[15px] font-bold px-2 py-0.5 rounded border border-yellow-300 ml-1">
                    Elite Member
                  </span>
                ) : (
                  <span className="bg-[#232a36] text-[#9F9F9F] text-[10px] font-semibold px-2 py-0.5 rounded border border-[#9F9F9F] ml-1">
                    Member
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-[10px] text-[#9F9F9F] mt-0.5">
                <span
                  className={
                    m.status === "online"
                      ? "text-green-400"
                      : m.status === "in-battle"
                      ? "text-red-400"
                      : "text-gray-400"
                  }
                >
                  ●
                </span>
                {m.status === "in-battle"
                  ? "In Battle"
                  : m.status === "online"
                  ? "Online"
                  : "Offline"}
                <span>• {m.lastActive}</span>
              </div>
            </div>
            <div className="flex flex-col items-end min-w-[60px]">
              <span className="text-[10px] text-[#9F9F9F] mb-0.5">
                Performance
              </span>
              <div className="w-14 h-1.5 bg-[#31394a] rounded-full overflow-hidden">
                <div
                  className="h-1.5 rounded-full bg-[#3b47fa]"
                  style={{ width: `${m.performance}%` }}
                ></div>
              </div>
              <span className="text-[10px] text-[#9F9F9F] mt-0.5">
                {m.performance}
              </span>
            </div>
            <button className="ml-2 text-[#9F9F9F] hover:text-white text-lg">
              ⋮
            </button>
          </div>
        ))}
      </div>
      {/* Squad Performance */}
      <section className="bg-[#232a36] rounded-xl p-3 min-h-[100px] flex flex-col justify-center mt-2">
        <div className="font-semibold text-[#3b47fa] mb-1 flex items-center gap-2 text-sm">
          <span className="text-base">📈</span> Squad Performance
        </div>
        <div className="text-[#9F9F9F] text-xs">
          Track your squad&apos;s performance metrics over time
        </div>
      </section>
    </aside>
  );
}
