import { useNavigate } from "react-router-dom";
import useUserDataStore from "../../store/useUserDataStore";
import { useUserInfoQuery } from "../../hooks/useUserInfoQuery";
import { NicknameEditForm } from "../forms/NicknameEditForm";
import { PasswordUpdateForm } from "../forms/PasswordUpdateForm";
import { deleteAccount } from "../../api/users";
import { DeleteAccountButton } from "./DeleteAccountButton";

export const EditProfile = () => {
  const { userId } = useUserDataStore();

  const navigate = useNavigate();
  const { data, isLoading, refetch, isError } = useUserInfoQuery(userId);

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

  if (isLoading) {
    return <p>Error..</p>;
  }
  if (isError) {
    return <p>Error..</p>;
  }

  return (
    <div>
      {/* <NavigateToPrevContainer /> */}
      {/* <hr className="  w-full tablet:hidden mobile:block" /> */}
      <NicknameEditForm id={userId} refetch={refetch} data={data} />
      <PasswordUpdateForm id={userId} refetch={refetch} />
      {/* <hr className="mobile:block tablet:hidden w-full" /> */}
      <DeleteAccountButton handleDeleteAccount={handleDeleteAccount} />
    </div>
  );
};
