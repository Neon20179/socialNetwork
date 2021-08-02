import { useState, useEffect, ChangeEvent, RefObject } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
      }
    }
  };
};

export function usePagination(ref: RefObject<HTMLDivElement>) {
  const [isAtPageBottom, setIsAtPageBottom] = useState(false);

  const onScroll = () => {
    setIsAtPageBottom(
      ref.current.offsetHeight <= window.scrollY + window.innerHeight
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return isAtPageBottom;
}
