import { useEffect, useState } from "react";

export default function useAuth() {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(document.cookie);
  }, []);

  return token;
}
