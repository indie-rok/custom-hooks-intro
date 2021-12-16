import React from "react";
import useCounter from "./hooks/useCounter";

export default function Contact() {
  const { number } = useCounter();
  return <div>Contact page{number}</div>;
}
