type MainSectionProps = {
  title: string;
  description: string;
  mapData?: string; 
};
export default function MainSection({
  title,
  description,
  mapData,
}: MainSectionProps) {
  return (
    <main className="flex-1 w-full">
      <section className="bg-black rounded-lg p-4 sm:p-6 h-full min-h-[400px] flex flex-col">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2 sm:gap-0">
          <div className="flex items-center gap-2">
            <span className="text-[#9F9F9F]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </span>
            <h1 className="text-lg sm:text-xl font-bold text-[#9F9F9F]">
              {title}
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button className="bg-[#232a36] text-[#9F9F9F] px-4 py-1 rounded font-semibold flex items-center gap-1 hover:bg-[#31394a] w-full sm:w-auto">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M3 12h18M3 18h18"
                />
              </svg>
              Filter
            </button>
            <button className="bg-[#232a36] text-[#9F9F9F] px-4 py-1 rounded font-semibold flex items-center gap-1 hover:bg-[#31394a] w-full sm:w-auto">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              Find
            </button>
          </div>
        </div>
        <p className="text-[#9F9F9F] mb-4 sm:mb-6 text-sm sm:text-base">
          {description}
        </p>
        <div
          className="flex-1 bg-[#232a36] rounded-lg border border-[#31394a] min-h-[200px] sm:min-h-[300px] overflow-auto"
          style={{ maxHeight: "60vh" }}
        >
          {/* Render mapData or placeholder */}
          {mapData ? (
            <pre className="text-[#9F9F9F] p-4 text-xs sm:text-base">
              {JSON.stringify(mapData, null, 2)}
            </pre>
          ) : null}
        </div>
      </section>
    </main>
  );
}
