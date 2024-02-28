import { useNavigate } from "react-router-dom";
import useUserDataStore from "../../store/useUserDataStore";
import { useUserInfoQuery } from "../../hooks/useUserInfoQuery";
import { NicknameEditForm } from "../forms/NicknameEditForm";
import { PasswordUpdateForm } from "../forms/PasswordUpdateForm";
import { deleteAccount } from "../../api/users";
import { DeleteAccountButton } from "./DeleteAccountButton";
import { LoadingPage } from "../../pages/LoadingPage";

export const EditProfile = () => {
  const { userId } = useUserDataStore();
  const navigate = useNavigate();
  const { data, isPending, refetch, isError } = useUserInfoQuery(userId);

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
      <NicknameEditForm id={userId} data={data} />
      <PasswordUpdateForm id={userId} refetch={refetch} />
      <DeleteAccountButton handleDeleteAccount={handleDeleteAccount} />
    </div>
  );
};
