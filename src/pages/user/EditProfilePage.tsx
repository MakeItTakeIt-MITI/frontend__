import { useNavigate } from "react-router-dom";
import useUserDataStore from "../../store/useUserDataStore";
import { useUserInfoQuery } from "../../hooks/useUserInfoQuery";
import { NicknameEditForm } from "../../components/forms/NicknameEditForm";
import { PasswordEditForm } from "../../components/forms/PasswordEditForm";
import { deleteAccount } from "../../api/users";
import { DeleteAccountButton } from "../../components/profile/DeleteAccountButton";
import { LoadingPage } from "../LoadingPage";

export const EditProfilePage = () => {
  const { userId } = useUserDataStore();
  const navigate = useNavigate();
  const { data, isPending, isError } = useUserInfoQuery(userId);

  const handleDeleteAccount = () => {
    if (window.confirm("정말 계정을 삭제하기겠습니까?")) {
      alert("계정 삭제되었습니다");
      const id = data?.data.id;
      deleteAccount(id);
      localStorage.clear();
      navigate("/auth/login");
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
    <div className="w-[600px] mx-auto mobile:p-3 laptop:p-0">
      {isError && (
        <p className="text-center text-red-400">Data loading error</p>
      )}
      <NicknameEditForm id={userId} data={data} />
      <PasswordEditForm id={userId} />
      <DeleteAccountButton handleDeleteAccount={handleDeleteAccount} />
    </div>
  );
};
