import Contact from "./Contact";
import useApi from "./hooks/useApi";
import useAuth from "./hooks/useAuth";
import useCounter from "./hooks/useCounter";

export default function App() {
  const { number, setNumber } = useCounter();
  const  token  = useAuth();

  if(!token){
    return <div>You need to login</div>
  }

  return (
    <div>
      helllo {number}
      <button
        onClick={() => {
          setNumber(2);
        }}
      >
        Click
      </button>
      <Contact />
    </div>
  );
}
