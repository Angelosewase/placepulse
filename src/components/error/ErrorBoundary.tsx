// src/components/ErrorBoundary.js
import React, { useState, useEffect } from "react";
import ErrorPage from "./ErrorComponent";

const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = () => setHasError(true);
    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleError);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleError);
    };
  }, []);

  if (hasError) {
    return <ErrorPage />;
  }

  return children;
};

export default ErrorBoundary;
