import AddtTransaction from "@/app/_components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "sm" | "md" | "lg";
}

const SummaryCard = ({
  icon,
  title,
  amount,
  size = "sm",
}: SummaryCardProps) => {
  return (
    <Card>
      <CardHeader className="flex items-center gap-2">
        {icon}
        <p
          className={`${size === "sm" ? "text-muted-foreground" : "text-white opacity-70"}`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p className={`font-bold ${size === "sm" ? "text-2xl" : "text-4xl"}`}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>

        {size === "lg" && <AddtTransaction />}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
