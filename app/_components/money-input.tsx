import React, { forwardRef } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import { Input, InputProps } from "./ui/input";

const MoneyInput = forwardRef((props: NumericFormatProps<InputProps>) => {
  return (
    <NumericFormat
      {...props}
      thousandSeparator=","
      decimalSeparator="."
      decimalScale={2}
      fixedDecimalScale={true}
      prefix="$ "
      inputMode="decimal"
      type="text"
      className="w-full"
      customInput={Input}
    />
  );
});

MoneyInput.displayName = "MoneyInput";
export default MoneyInput;
