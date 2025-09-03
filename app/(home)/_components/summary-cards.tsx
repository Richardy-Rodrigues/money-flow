import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";
import { db } from "@/app/_lib/prisma";

interface SummaryCardsProps {
  month?: string;
}

const SummaryCards = async ({ month }: SummaryCardsProps) => {
  const monthFilter =
    month != "0" && month
      ? {
          date: {
            gte: new Date(new Date().getFullYear(), Number(month) - 1, 1),
            lt: new Date(new Date().getFullYear(), Number(month), 1),
          },
        }
      : month === "0"
        ? {} // Sem filtro de mês, pega o ano todo
        : {
            date: {
              gte: new Date(
                new Date().getFullYear(),
                Number(new Date().getMonth() + 1) - 1,
                1,
              ),
              lt: new Date(
                new Date().getFullYear(),
                Number(new Date().getMonth() + 1),
                1,
              ),
            },
          };

  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...monthFilter, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )._sum.amount || 0,
  );
  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...monthFilter, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )._sum.amount || 0,
  );
  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...monthFilter, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )._sum.amount || 0,
  );
  const balance = depositsTotal - investmentsTotal - expensesTotal;
  return (
    <div className="space-y-6">
      <SummaryCard
        icon={<WalletIcon size={16} />}
        title={"Saldo"}
        amount={balance}
        size="lg"
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={16} className="" />}
          title={"Investido"}
          amount={investmentsTotal}
        />
        <SummaryCard
          icon={<TrendingUpIcon size={16} className="text-green-700" />}
          title={"Receita"}
          amount={depositsTotal}
        />
        <SummaryCard
          icon={<TrendingDownIcon size={16} className="text-red-700" />}
          title={"Despesas"}
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
