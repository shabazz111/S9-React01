import React, { ComponentType } from "react";
import Header from "./Header";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PageHoc(WrappedComponent) {
  return function HOCComponent(props) {
    return (
      <div className="flex w-full flex-col ">
        <Header />
        <WrappedComponent {...props} />
      </div>
    );
  };
}


// hoc is used to render the component or screen , which accepts a component as a parameter and return a component
export default PageHoc;
