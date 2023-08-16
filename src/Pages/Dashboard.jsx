import React from "react";
import WeeklyChart from "./../components/cards/WeeklyChart";
import ExpenseIncome from "./../components/cards/ExpenseIncome";
import RecentTranx from "./../components/cards/RecentTranx";
import ProfileCard from "./../components/cards/profile";
import "./../index.css";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-5 mx-auto py-10  lg:w-3/4">
      <div className="flex lg:flex-row flex-col space-x-5">
        <div className="flex flex-col gap-5">
          <ProfileCard />
          <WeeklyChart />
        </div>
        <ExpenseIncome />
      </div>
      <RecentTranx />
    </div>
  );
}
