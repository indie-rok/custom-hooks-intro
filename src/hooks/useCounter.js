import { useState } from "react";

export default function useCounter() {
  const [number, setNumber] = useState(0);

  return { number: number, setNumber: setNumber };
}
