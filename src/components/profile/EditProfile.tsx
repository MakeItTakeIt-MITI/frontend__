import { useNavigate } from "react-router-dom";
import useUserDataStore from "../../store/useUserDataStore";
import { useUserInfoQuery } from "../../hooks/useUserInfoQuery";
import { NicknameEditForm } from "../forms/NicknameEditForm";
import { PasswordEditForm } from "../forms/PasswordEditForm";
import { deleteAccount } from "../../api/users";
import { DeleteAccountButton } from "./DeleteAccountButton";
import { LoadingPage } from "../../pages/LoadingPage";

export const EditProfile = () => {
  const { userId } = useUserDataStore();
  const navigate = useNavigate();
  const { data, isPending, isError } = useUserInfoQuery(userId);

  const handleDeleteAccount = () => {
    if (window.confirm("정말 계정을 삭제하기겠습니까?")) {
      alert("계정 삭제되었습니다");
      const id = data?.data.id;
      deleteAccount(id);
      localStorage.clear();
      navigate("/user/login");
    } else {
      alert("취소합니다.");
      return;
    }
  };

  if (isPending) {
    return <LoadingPage />;
  }
  if (isError) {
    return <p>Error..</p>;
  }

  return (
    <div>
      {isError && (
        <p className="text-center text-red-400">Data loading error</p>
      )}
      <NicknameEditForm id={userId} data={data} />
      <PasswordEditForm id={userId} />
      <DeleteAccountButton handleDeleteAccount={handleDeleteAccount} />
    </div>
  );
};
