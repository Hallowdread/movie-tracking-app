import { useEffect } from "react";

export function useKey(key, action) {
  //? UseEffect for the escape key
  useEffect(() => {
    const callback = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };
    document.addEventListener("keydown", callback);
    //* Clean Up Function
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [action, key]);
}
