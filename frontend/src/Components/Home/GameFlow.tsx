import React from "react";

interface gameFlowDataObjectProps {
  step: number;
  title: string;
  stepData: string;
}

const GameFlow = () => {
  const gameFlowData: gameFlowDataObjectProps[] = [
    {
      step: 0,
      title: "Account Creation",
      stepData:
        "Start your Cricmarket journey by creating a new account or logging into your existing one. This secure step ensures your progress is saved and you're ready to play.",
    },
    {
      step: 1,
      title: "Match Selection",
      stepData:
        "Browse the 'Available Matches' section to see live and upcoming cricket games. Choose the specific match you want to participate in, and get ready for the action.",
    },
    {
      step: 2,
      title: "Initial Capital & Pre-Match Auction",
      stepData:
        "Receive your starting virtual currency of ₹10,000. Use this capital to participate in the pre-match auction, where you can bid to acquire initial team stocks (shares) from the opening offering for the two competing teams.",
    },
    {
      step: 3,
      title: "Secure Your Team's Stock",
      stepData:
        "Strategically place your bids in the auction. The highest bidders will secure the initial shares of their chosen teams, setting their starting portfolio for the match.",
    },
    {
      step: 4,
      title: "Live Trading Begins",
      stepData:
        "Once the pre-match auction concludes and the real-life cricket match begins, the trading window opens. You can now actively buy and sell your team stocks. The prices will fluctuate based on live match events like runs scored, wickets taken, and boundaries hit, acting as market sentiment.",
    },
    {
      step: 5,
      title: "Maximize Your ROI",
      stepData:
        "Continuously monitor the match progress and the stock market within the game. Execute strategic trades by buying low and selling high, aiming to grow your initial ₹10,000 capital. Your ultimate goal is to achieve the highest Return on Investment (ROI) by making profitable decisions throughout the game.",
    },
  ];

  return (
    <div className="w-full flex flex-col z-[2] relative text-white my-20">
      <p className="text-center text-white text-3xl font-semibold mb-10">
        GameFlow
      </p>

      <div className="">
        <div className="w-full flex flex-col items-center justify-center p-3">
          {gameFlowData.map((item: gameFlowDataObjectProps) => (
            <div
              className="my-3  w-3/4 mx-auto h-28 flex items-center justify-between xl:justify-evenly p-3 border-b border-foreground"
              key={item.step}
            >
              <p className=" h-full w-[15%] xl:w-[10%] flex items-center justify-center border-r border-foreground">
                <span className=" text-5xl">{item.step}</span>
              </p>
              <p className=" text-white w-[85%] xl:[w-90%] flex items-center text-sm xl:text-base justify-center xl:justify-start">
                <span className="text-foreground w-[40%] h-full">
                  {item.title}
                </span>
                <span className=" hidden md:block">{item.stepData}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameFlow;
