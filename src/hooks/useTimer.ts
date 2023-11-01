import { useEffect, useRef, useState } from "react";

/** Vendors */
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

/** Redux */
// import { searchSchedulesAction } from "../redux/actions/schedule";
// import { useAppDispatch } from "../hooks/useRedux";

/** Custom Hooks */
// import useDelay from "./useDelay";
// import useNoise from "./useNoise";

/** Enums */
// import { ResourceId } from "../types";

/** Types */
import type { ITime } from "../types";

dayjs.extend(duration);

export default function useTimer() {
  // const airhorn = useNoise();
  // const delay = useDelay();
  // const dispatch = useAppDispatch();

  const timeref = useRef<ReturnType<typeof setInterval>>(
    setTimeout(() => { }, 0)
  );

  const [time, setTime] = useState<ITime>({
    current: 20 * 60 * 1000,
    end: dayjs().add(20, "m").unix(),
    minutes: "0",
    seconds: "0",
    total: 20 * 60 * 1000,
  });

  // const { list } = useAppSelector((state) => ({
  //   list: state.schedule.list,
  // }));

  // const settings = { resource_id: ResourceId.Hub, resource_name: "hub-123" };

  useEffect(() => {
    /** @TODO Fetch Schedule From AWS and Load It. */
    // dispatch(searchSchedulesAction(settings));
  }, []);

  useEffect(() => {
    timeref.current = setInterval(actions.increment, 1000);
    return () => clearTimeout(timeref?.current);
  }, []);

  const actions = {
    increment: () => {
      const now = dayjs().unix();
      const delta = time.end - now;
      const dur = dayjs.duration(delta * 1000, "milliseconds");
      const next = dayjs.duration(dur.asMilliseconds() - 1000, "milliseconds");

      const twoDP = (n: number): string => (n > 9 ? n.toString() : "0" + n);
      const minutes = twoDP(next.minutes());
      const seconds = twoDP(next.seconds());

      setTime((state) => ({ ...state, minutes, seconds }));
    },
  };

  return time;
}
