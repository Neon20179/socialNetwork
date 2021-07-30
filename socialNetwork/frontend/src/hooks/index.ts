import { useState, useEffect, ChangeEvent, RefObject } from "react";

export function useInput() {
  const [value, setValue] = useState("");

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange
  };
}

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
