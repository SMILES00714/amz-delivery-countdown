import { createBrowserHistory } from "history";

let history;

if (typeof window !== "undefined") {
  // Only instantiate history when we're in the browser
  history = createBrowserHistory();
}

export default history;
