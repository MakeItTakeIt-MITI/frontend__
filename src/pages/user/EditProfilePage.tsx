// import { useNavigate } from "react-router-dom";
import useUserDataStore from "../../store/useUserDataStore";
import { useUserInfoQuery } from "../../hooks/useUserInfoQuery";
import { NicknameEditForm } from "../../components/forms/NicknameEditForm";
import { PasswordEditForm } from "../../components/forms/PasswordEditForm";
// import { deleteAccount } from "../../api/users";
// import { DeleteAccountButton } from "../../components/profile/DeleteAccountButton";
import { LoadingPage } from "../LoadingPage";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";

export const EditProfilePage = () => {
  const { userId } = useUserDataStore();
  // const navigate = useNavigate();
  const { data, isPending, isError } = useUserInfoQuery(userId);

  // const handleDeleteAccount = () => {
  //   if (window.confirm("정말 계정을 삭제하기겠습니까?")) {
  //     alert("계정 삭제되었습니다");
  //     const id = data?.data.id;
  //     deleteAccount(id);
  //     localStorage.clear();
  //     navigate("/auth/login");
  //   } else {
  //     alert("취소합니다.");
  //     return;
  //   }
  // };

  if (isPending) {
    return <LoadingPage />;
  }
  if (isError) {
    return <p>Error..</p>;
  }

  return (
    <section className="mt-4">
      <NavigateToPrevContainer children="내 정보" />
      {/* <div className="laptop:w-[600px] mobile:w-full mx-auto mobile:p-3 laptop:p-0"> */}
      <div className="laptop:w-[500px] laptop:h-[735px]   mobile:w-full mx-auto border border-gray-300 p-4 rounded-lg">
        <div className="flex items-center justify-center w-full">
          <div className="h-[64px] w-[64px] rounded-full bg-[#D9D9D9]"></div>{" "}
        </div>
        {isError && (
          <p className="text-center text-red-400">Data loading error</p>
        )}
        <NicknameEditForm id={userId} data={data} />
        <div></div>
        <PasswordEditForm id={userId} />
        {/* <DeleteAccountButton handleDeleteAccount={handleDeleteAccount} /> */}
        <button className="h-[56px] w-full rounded-lg bg-[#E8E8E8] ">
          저장하기
        </button>
      </div>
    </section>
  );
};
