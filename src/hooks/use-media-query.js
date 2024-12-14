"use client";
import React from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = React.useState(false);

  const handleMatch = React.useCallback(() => {
    setMatches(window.matchMedia(query).matches);
  }, [query]);

  React.useEffect(() => {
    const nextMatch = window.matchMedia(query);

    handleMatch();

    nextMatch.addEventListener("change", handleMatch);

    return () => {
      nextMatch.removeEventListener("change", handleMatch);
    };
  }, [query, handleMatch]);

  return matches;
}

export default useMediaQuery;
