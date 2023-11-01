import { useEffect, useState } from "react";

export default function useOnline(): boolean {
  const [online, setOnline] = useState<boolean>(false);
  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    if (!isBrowser) return setOnline(true);

    window.addEventListener("online", actions.isOnline);
    window.addEventListener("offline", actions.isOffline);
    return () => {
      window.removeEventListener("online", actions.isOnline);
      window.removeEventListener("offline", actions.isOffline);
    };
  }, [isBrowser]);

  const actions = {
    isOnline: () => setOnline(true),
    isOffline: () => setOnline(false),
  };

  return online;
}
