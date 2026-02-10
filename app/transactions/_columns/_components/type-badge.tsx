import { Badge } from "@/app/_components/ui/badge";
import { CircleIcon } from "lucide-react";
import React from "react";
import { TransactionType } from "@prisma/client";

const TypeBadge = ({ type }: { type: TransactionType }) => {
  if (type === TransactionType.DEPOSIT) {
    return (
      <div>
        <Badge className="gap-2 bg-muted text-primary hover:bg-muted">
          <CircleIcon size={10} fill="currentColor" />
          Deposit
        </Badge>
      </div>
    );
  } else if (type === TransactionType.EXPENSE) {
    return (
      <div>
        <Badge
          variant="destructive"
          className="gap-2 bg-muted text-destructive hover:bg-muted"
        >
          <CircleIcon size={10} fill="currentColor" />
          Expense
        </Badge>
      </div>
    );
  }
  return (
    <div>
      <Badge
        variant="secondary"
        className="gap-2 bg-muted text-secondary hover:bg-muted"
      >
        <CircleIcon size={10} fill="currentColor" />
        Investment
      </Badge>
    </div>
  );
};

export default TypeBadge;
