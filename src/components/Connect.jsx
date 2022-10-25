import { useEffect } from "react";
import { useDispatch } from "react-redux";
import connect from "../connect";

function Connect() {
  const dispatch = useDispatch();

  useEffect(() => {
    connect({ dispatch });
  }, []);

  return <></>;
}

export default Connect;
