import Footer from "./Footer";
import Navbar from "../components/Navbar";
import { todayDate } from "../utils/date";
import { getCurrentTime } from "../utils/time";
import { useQuery } from "@tanstack/react-query";
import { fetchTodayMatches } from "../services/matches";

const Matches = () => {
  const time = getCurrentTime().slice(0, 4);

  const {
    data: matches = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["todayMatches"],
    queryFn: fetchTodayMatches,
    staleTime: 10 * 60 * 1000, 
    cacheTime: 30 * 60 * 1000,
  });

  return (
    <>
      <div className="w-dw min-h-100">
        <Navbar />

        <div className="flex justify-between mx-5 max-sm:text-[14px] mt-5 items-center">
          <span className="text-[18px] mx-5 font-bold">Today Matches</span>
          <span className="text-[14px] bg-teal-600 px-2 py-1 text-white mr-7 rounded">
            {todayDate()}
          </span>
        </div>

        <div className="w-vw max-sm:w-80 max-sm:mx-auto mx-[10%]">


          {isLoading && (
            <div className="mx-auto my-20 text-center animate-pulse">
              Loading matches...
            </div>
          )}

       
          {isError && (
            <div className="mx-auto my-20 text-center text-red-500">
              {error.message || "Failed to load matches"}
            </div>
          )}

    
          {!isLoading && matches.length === 0 && (
            <div className="mx-auto my-20 text-center">
              <div>No matches available</div>
              <div>Please check again later</div>
            </div>
          )}

          {matches.map((match, index) => (
            <div key={index} className="mt-2 bg-green-700 text-white">
              <div className="flex items-center justify-between px-10 py-1 border-b border-t">
                <div className="font-medium">{match.area.name}</div>
                <img
                  src={match.area.flag}
                  alt="flag"
                  className="w-5 h-5 rounded-full"
                />
              </div>

              <div className="mt-3">
                <div className="flex justify-between px-[10%] text-2xl items-center gap-5">
                  <img src={match.homeTeam.crest} className="h-10 w-10" />
                  <span>{match.score.fullTime.home || 0}</span>
                  <p>vs</p>
                  <span>{match.score.fullTime.away || 0}</span>
                  <img src={match.awayTeam.crest} className="h-10 w-10" />
                </div>

                <div className="flex justify-between px-[10%] mt-2">
                  <p>{match.homeTeam.shortName}</p>
                  <p>{match.awayTeam.shortName}</p>
                </div>

                <div className="text-center my-2">
                  {parseInt(time) >
                  parseInt(match.utcDate.slice(11, 16))
                    ? "Ended"
                    : match.utcDate.slice(11, 16)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Matches;
