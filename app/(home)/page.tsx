import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";

interface HomeProps {
  searchParams: Promise<{
    month?: string;
  }>;
}

const Home = async ({ searchParams }: HomeProps) => {
  const { month } = await searchParams;
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  if (month && !isMatch(month, "MM")) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>
        <SummaryCards month={month} />
      </div>
    </>
  );
};

export default Home;
