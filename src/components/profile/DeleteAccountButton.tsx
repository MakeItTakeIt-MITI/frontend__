interface DeleteAccountProp {
  handleDeleteAccount: () => void;
}

export const DeleteAccountButton = ({
  handleDeleteAccount,
}: DeleteAccountProp) => {
  return (
    <div className="flex flex-col gap-6 py-4 w-full">
      <h4 className="font-bold">계정 삭제</h4>
      <button
        type="button"
        onClick={handleDeleteAccount}
        className=" h-[50px] px-4 py-[17px] rounded-lg bg-red-400 text-white w-full"
      >
        회원탈퇴
      </button>
    </div>
  );
};
