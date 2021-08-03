import {
  useState,
  useEffect,
  ChangeEvent,
  RefObject,
  useRef,
  useCallback
} from "react";

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

export const usePagination = (ref: RefObject<HTMLDivElement>) => {
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
};

export const useDebounce = (callback: any, delay: number) => {
  const timer = useRef<any>();

  const debouncedCallback = useCallback(
    (...args) => {
      if (timer.current) clearTimeout(timer.current);

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
};
