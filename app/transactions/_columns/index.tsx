"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TypeBadge from "./_components/type-badge";
import ActionButtons from "./_components/action-buttons";
import {
  paymentMethodMap,
  transactionCategoryMap,
} from "@/app/_constants/transactions";

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({
      row: {
        original: { type },
      },
    }) => {
      return <TypeBadge type={type} />;
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({
      row: {
        original: { category },
      },
    }) => {
      return transactionCategoryMap[category];
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Payment Method",
    cell: ({
      row: {
        original: { paymentMethod },
      },
    }) => {
      return paymentMethodMap[paymentMethod];
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({
      row: {
        original: { createdAt },
      },
    }) => {
      return new Date(createdAt).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({
      row: {
        original: { amount },
      },
    }) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(Number(amount));
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: () => {
      return <ActionButtons onEdit={() => {}} onDelete={() => {}} />;
    },
  },
];
