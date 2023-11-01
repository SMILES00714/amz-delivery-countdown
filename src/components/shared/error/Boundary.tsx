"use client";
import React from "react";

/** Vendors */
import { Button, notification } from "antd";

/** Types */
interface ISiteErrorParams {
  error: Error | boolean;
  hasError: boolean;
  iteration: number;
}

interface ISiteErrorProps {
  children: React.ReactElement;
}

/** Icons */
// import ErrorIcon from "../../../dist/img/icons/error.png";

class SiteError extends React.Component<ISiteErrorProps, ISiteErrorParams> {
  constructor(props: ISiteErrorProps) {
    super(props);
    this.state = { error: false, hasError: false, iteration: 0 };
  }

  static getDerivedStateFromError(error: Error, ...rest: any[]) {
    console.trace(error);
    console.log(rest);
    // Update state so the next render will show the fallback UI.
    return { error, hasError: true, iteration: 0 };
  }

  render() {
    if (this.state.hasError) {
      notification.error({
        description:
          "Seems we encountered an error. You can continue " +
          "to use the app, the development team was already notified of the issue.",
        message: "Error Occured",
      });

      return (
        <div className="w-100 h-100 text-center">
          <div className="h-100 flex-1 flex-column flex-center flex-around">
            <div className="flex-1" />
            <div className="flex-1">Insert Error Image Here...</div>
            <div className="flex-1 flex-column flex-column-center">
              <h2 className="text-center text-white">
                Yikes, Seems we encountered an Error
              </h2>
              <div className="flex-center flex-around">
                <Button
                  onClick={() => (window.location.href = "/")}
                  size="large"
                  type="primary"
                >
                  Go Back Home
                </Button>
              </div>
            </div>
            <div className="flex-1" />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default SiteError;
