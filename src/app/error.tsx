// error components must be a client component. Indicate that this file or module should be treated as a Client Component
"use client";

import { useEffect } from "react";

// predefine object structure for the given 'props' object
type ErrorBoundaryProps = {
  // Function Component receives the "error" object as a prop to display more information about the error
  error: Error;
  // it also receives the 'reset' object as a prop that recovers from non-serious errors by retrying the rendering of the nearest Function Component that threw the error from a 'page.tsx' file
  reset: () => void;
};

// Root Error Component wraps around all route files inside the application (after Root Layout Component)
// it allows you to render and display a customized error page to users if a specific page / route inside the wrapper throws an error
export default function Error({ error, reset }: ErrorBoundaryProps) {
  // anytime an error happens, run this useEffect
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="mt-10 flex flex-col gap-2 text-center text-lg">
      <h1>Oops! Something went wrong. Please try again later.</h1>
      {/* button to attempt recovery from the error by retrying the render of the nearest Function Component that threw the error */}
      <button onClick={reset} className="hover:text-amber-600">
        Try Again
      </button>
    </div>
  );
}
