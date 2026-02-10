"use client";

import {
  PaymentMethod,
  Transaction,
  TransactionCategory,
} from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TypeBadge from "./_components/type-badge";
import ActionButtons from "./_components/action-buttons";

const transactionCategoryMap = {
  [TransactionCategory.HOUSING]: "Housing",
  [TransactionCategory.TRANSPORTATION]: "Transportation",
  [TransactionCategory.FOOD]: "Food",
  [TransactionCategory.HEALTH]: "Health",
  [TransactionCategory.ENTERTAINMENT]: "Entertainment",
  [TransactionCategory.UTILITY]: "Utility",
  [TransactionCategory.SALARY]: "Salary",
  [TransactionCategory.EDUCATION]: "Education",
  [TransactionCategory.OTHER]: "Other",
};

const paymentMethodMap = {
  [PaymentMethod.CASH]: "Cash",
  [PaymentMethod.CREDIT_CARD]: "Credit Card",
  [PaymentMethod.DEBIT_CARD]: "Debit Card",
  [PaymentMethod.BANK_TRANSFER]: "Bank Transfer",
  [PaymentMethod.DIGITAL_WALLET]: "Digital Wallet",
};

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
