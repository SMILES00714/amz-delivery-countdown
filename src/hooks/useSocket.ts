import { useEffect, useState } from "react";

/** Vendors */
/** Custom Hooks */
import useOnline from "./useOnline";
import { useAppDispatch } from "./useRedux";

/** Enums */
import { App } from "../types";

/** Types */
import type { IAnyObject } from "../types";

export default function useSocket() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const dispatch = useAppDispatch();
  const isBrowser = typeof window !== "undefined";
  const isOnline = useOnline();

  useEffect(() => {
    // if (!isBrowser || !isOnline) return;
    actions.initialize();
  }, [isBrowser, isOnline]);

  const actions = {
    error: (error: Event): void => console.error(error),
    initialize: (): void => {
      const env =
        import.meta.env.VITE_NODE_ENV === "development" ? "dev" : "prod";

      const socket = new WebSocket(
        `${import.meta.env.VITE_REACT_APP_SOCKET_ENDPOINT}/${env}`,
        [App.TV]
      );

      socket.onmessage = actions.receive;
      socket.onerror = actions.error;
      socket.onclose = actions.refresh;
      setSocket(socket);
    },
    receive: (event: MessageEvent): void => {
      if (event.data.includes("{") && event.data.includes("type:")) {
        dispatch(JSON.parse(event.data));
      }
    },
    refresh: () => {
      if (!isOnline) return;
      actions.initialize();
    },
    send: (payload: IAnyObject) => socket?.send(JSON.stringify(payload)),
  };

  return actions;
}
