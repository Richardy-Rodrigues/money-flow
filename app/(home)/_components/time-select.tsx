"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { useRouter } from "next/navigation";

const MONTHS = [
  { value: "0", label: "Todo o ano" },
  { value: "01", label: "Janeiro" },
  { value: "02", label: "Fevereiro" },
  { value: "03", label: "Março" },
  { value: "04", label: "Abril" },
  { value: "05", label: "Maio" },
  { value: "06", label: "Junho" },
  { value: "07", label: "Julho" },
  { value: "08", label: "Agosto" },
  { value: "09", label: "Setembro" },
  { value: "10", label: "Outubro" },
  { value: "11", label: "Novembro" },
  { value: "12", label: "Dezembro" },
];

const TimeSelect = () => {
  const { push } = useRouter();
  const handleMonthChange = (month: string) => {
    push(`/?month=${month}`);
  };

  const defaultValueMonth = new Date().getMonth() + 1;

  return (
    <Select
      onValueChange={(value) => handleMonthChange(value)}
      defaultValue={MONTHS[defaultValueMonth - 1].value}
    >
      <SelectTrigger className="w-[180px] rounded-full">
        <SelectValue placeholder={"Mês"} />
      </SelectTrigger>
      <SelectContent>
        {MONTHS.map((month) => (
          <SelectItem key={month.value} value={month.value}>
            {month.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TimeSelect;
