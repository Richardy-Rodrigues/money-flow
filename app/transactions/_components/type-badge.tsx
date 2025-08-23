import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { ArrowDown, ArrowUp, ChartNoAxesCombined } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="text-primary rounded-full bg-green-800 px-2 py-1 font-bold hover:bg-green-800">
        <ArrowUp className="fill-primary mr-1" />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="text-primary rounded-full bg-red-800 px-2 py-1 font-bold hover:bg-red-800">
        <ArrowDown className="fill-primary mr-1" />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="text-primary rounded-full bg-gray-800 px-2 py-1 font-bold hover:bg-gray-800">
      <ChartNoAxesCombined />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
