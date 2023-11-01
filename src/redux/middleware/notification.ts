/** Vendors */
import { Hub } from "@aws-amplify/core";

/** Redux */
import * as types from "../actions/types";

/** Types */
import type { Middleware } from "redux";

const notificationMiddleware: Middleware = () => {
  return (next) => (action) => {
    switch (action.type) {
      case types.TOGGLE_NOTIFICATION_SUCCESS:
        Hub.dispatch("notification", {
          data: action.notification,
          event: action.notification.type || "success", // 'success' | 'info' | 'warning' | 'error'
        });
        break;
    }
    next(action);
  };
};

export default notificationMiddleware;
