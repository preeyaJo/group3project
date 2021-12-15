import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Kopierat från docs https://v5.reactrouter.com/web/guides/scroll-restoration
// Varje gång route uppdateras körs nedan kod vilket nollställer scroll.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
