/** Vendors */
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

/** Custom Reducers */
import rootReducer from "./reducers/index";

/** Custom Middleware */
import notification from "./middleware/notification";

/** Custom APIs */
import hub from "../api/hub";
import schedule from "../api/schedule";

/** Types */
import type { ThunkAction } from "redux-thunk";

import type {
  AnyAction,
  DevToolsEnhancerOptions,
  Middleware,
} from "@reduxjs/toolkit";

declare module "redux" {
  interface Dispatch<A extends Action = AnyAction> {
    <S, E, R>(asyncAction: ThunkAction<R, S, E, A>): R;
  }
}

const middleware: Middleware[] = [thunk, notification];

const devToolsEnhancer: DevToolsEnhancerOptions = {
  trace: true,
  traceLimit: 25,
};

const extraArgument = {
  hub,
  schedule,
};

const env = import.meta.env.VITE_NODE_ENV;

const store = configureStore({
  devTools: env !== "development" ? devToolsEnhancer : false,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }).concat(middleware);
  },
  reducer: rootReducer,
});

// Infer the `IRootState` and `IAppDispatch` types from the store itself
export type IAppApi = typeof extraArgument;

export type IGetState = typeof store.getState;

export type IRootState = ReturnType<IGetState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type IAppDispatch = typeof store.dispatch;

export type { AnyAction };

export default store;
