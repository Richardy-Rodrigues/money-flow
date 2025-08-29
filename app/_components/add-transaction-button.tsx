"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
// import { upsertTransactionSchema } from "../_actions/add-transaction/schema";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";

const AddtTransaction = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        className="cursor-pointer rounded-full bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600"
        onClick={() => setDialogIsOpen(true)}
      >
        Adicionar Transação
        <ArrowDownUpIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};

export default AddtTransaction;
