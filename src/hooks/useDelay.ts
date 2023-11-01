import { useEffect, useRef } from "react";

export default function useDelay() {
  const timerRefs = useRef<any>({});

  useEffect(() => {
    return () => {
      for (const timer in timerRefs.current) {
        const timeout = timerRefs.current[timer];
        clearTimeout(timeout);
      }
    };
  }, []);

  const timingHandler = (...args: any) => {
    //Array of arguments
    if (typeof args[0] === "object") {
      args.forEach((arg: any, i: number) => {
        const inc = i.toString();
        clearTimeout(timerRefs.current[inc]);
        timerRefs.current[inc] = setTimeout(arg[0], arg[1]);
      });
    } else {
      //Single argument
      clearTimeout(timerRefs.current["0"]);
      timerRefs.current["0"] = setTimeout(args[0], args[1] as number);
    }
  };

  return timingHandler;
}
