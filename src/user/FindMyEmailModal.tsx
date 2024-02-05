import close from "../assets/x_button.svg";
import { useFindEmailMutation } from "../hooks/useFindEmailMutation";
import { useForm } from "react-hook-form";
import { InputEmailAuthenForm } from "./InputEmailAuthenForm";

export interface FindEmailField {
  phone: string;
}

interface EmailModalProp {
  findEmailModal: boolean;
  displayFindEmailModal: (arg: boolean) => void;
}

export const FindMyEmailModal = ({
  findEmailModal,
  displayFindEmailModal,
}: EmailModalProp) => {
  const { mutate, data: userData } = useFindEmailMutation();
  if (userData) {
    console.log(userData);
  }

  const { register, handleSubmit, setValue } = useForm<FindEmailField>({});

  const handleCloseModal = () => {
    displayFindEmailModal(false);
    window.location.reload();
  };

  const requestAuthenCode = (data: FindEmailField) => {
    mutate(data, {
      onSuccess: (userData) => {
        const authentication_token = userData?.data.authentication_token;
        localStorage.setItem("authentication_token", authentication_token);
      },
    });
    setValue("phone", "");
  };

  return (
    <>
      {findEmailModal ? (
        <div className="bg-gray-100  fixed right-0 top-0 bottom-0 left-0 mobile:px-6">
          <div className="min-h-screen flex items-center justify-center ">
            <div className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold ">이메일 찾기</h1>
                <button onClick={handleCloseModal}>
                  <img src={close} alt="close button" className="w-6" />
                </button>{" "}
              </div>
              <p className="text-gray-600 ">핸드폰 번호를 입력해주세요.</p>
              <form
                onSubmit={handleSubmit(requestAuthenCode)}
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  {...register("phone", {
                    required: true,
                  })}
                  className="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
                />
                <button
                  disabled={userData?.status_code === 201 ? true : false}
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                  이메일 찾기
                </button>
              </form>
              {userData?.status_code === 201 && (
                <InputEmailAuthenForm handleCloseModal={handleCloseModal} />
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
