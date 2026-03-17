import {
  PaymentMethod,
  TransactionCategory,
  TransactionType,
} from "@prisma/client";

export const transactionTypeOptions = [
  { label: "Deposit", value: TransactionType.DEPOSIT },
  { label: "Expense", value: TransactionType.EXPENSE },
  { label: "Investment", value: TransactionType.INVESTMENT },
];

export const transactionCategoryMap = {
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

export const paymentMethodMap = {
  [PaymentMethod.CASH]: "Cash",
  [PaymentMethod.CREDIT_CARD]: "Credit Card",
  [PaymentMethod.DEBIT_CARD]: "Debit Card",
  [PaymentMethod.BANK_TRANSFER]: "Bank Transfer",
  [PaymentMethod.DIGITAL_WALLET]: "Digital Wallet",
};

export const paymentMethodOptions = [
  { label: "Cash", value: PaymentMethod.CASH },
  { label: "Credit Card", value: PaymentMethod.CREDIT_CARD },
  { label: "Debit Card", value: PaymentMethod.DEBIT_CARD },
  { label: "Bank Transfer", value: PaymentMethod.BANK_TRANSFER },
  { label: "Digital Wallet", value: PaymentMethod.DIGITAL_WALLET },
];
