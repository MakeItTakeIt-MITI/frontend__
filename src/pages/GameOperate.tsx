import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { useEffect } from "react";

export const GameOperate = () => {
  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return <div>game</div>;
};
