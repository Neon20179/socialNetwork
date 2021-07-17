import { useState, ChangeEvent } from "react";

export function useInput() {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange
  };
}
