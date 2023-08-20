import React from "react";
import WeeklyChart from "./../components/cards/WeeklyChart";
import ExpenseIncome from "./../components/cards/ExpenseIncome";
import RecentTranx from "./../components/cards/RecentTranx";
import ProfileCard from "./../components/cards/profile";
import "./../index.css";
import { AppContextProvider } from "./../contexts/AppContext";

export default function Dashboard() {
  const [currentBalance, setCurrentBalance] = React.useState(0);
  return (
    <AppContextProvider>
      <div className="flex flex-col gap-5 mx-auto py-10 px-5 lg:w-3/4">
        <div className="flex lg:flex-row flex-col lg:space-x-5 space-y-5 lg:space-y-0">
          <div className="flex flex-col gap-5">
            <ProfileCard
              currentBalance={currentBalance}
              setCurrentBalance={setCurrentBalance}
            />
            <WeeklyChart />
          </div>
          <ExpenseIncome
            currentBalance={currentBalance}
            setCurrentBalance={setCurrentBalance}
          />
        </div>
        <RecentTranx />
      </div>
    </AppContextProvider>
  );
}
