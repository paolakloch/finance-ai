"use client";

import { Transaction } from "@prisma/client";
import { DataTable } from "@/app/_components/ui/data-table";
import { transactionColumns } from "..";

interface TransactionsTableProps {
  data: Transaction[];
}

export default function TransactionsTable({ data }: TransactionsTableProps) {
  return <DataTable columns={transactionColumns} data={data} />;
}
