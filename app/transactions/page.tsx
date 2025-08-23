import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { TransactionColumns } from "./_columns";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      {/* TITLE AND BUTTON */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="cursor-pointer rounded-full bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600">
          Adicionar Transação
          <ArrowDownUpIcon />
        </Button>
      </div>
      {/* TRANSACTION TABLE */}
      <div className="">
        <DataTable columns={TransactionColumns} data={transactions} />
      </div>
      {/* PAGINATION */}
    </div>
  );
};

export default TransactionsPage;
