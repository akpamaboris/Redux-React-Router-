import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Test = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <span>{count}</span>
      <Link to="/">home</Link>
    </div>
  );
};

export default Test;
