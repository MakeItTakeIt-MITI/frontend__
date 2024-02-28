interface DeleteAccountProp {
  handleDeleteAccount: () => void;
}

export const DeleteAccountButton = ({
  handleDeleteAccount,
}: DeleteAccountProp) => {
  return (
    <div className="flex flex-col gap-6 p-4 w-full">
      <h4 className="font-bold">계정 삭제</h4>
      <button
        type="button"
        onClick={handleDeleteAccount}
        className=" rounded-xl mobile:w-full tablet:w-[400px] tablet:mx-auto  h-14 bg-[#db5e5e] text-white"
      >
        회원탈퇴
      </button>
    </div>
  );
};
