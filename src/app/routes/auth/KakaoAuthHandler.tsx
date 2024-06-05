import axios from "axios";
import { useEffect, useState } from "react";
import { useKakaoLoginMutation } from "../../../hooks/auth/useKakaoLoginMutation";
import { AlertModal } from "../../../components/common/AlertModal";
import { NotFoundPage } from "../NotFoundPage";
import { KakaoAuthFailure, NotKakaoUser } from "../../../stories/Modal.stories";
import { LoadingPage } from "../LoadingPage";

export const KakaoAuthHandler = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const AUTHORIZE_CODE = new URL(document.location.toString()).searchParams.get(
    "code"
  );
  const GRANT_TYPE: string = "authorization_code";
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const { mutate: kakaoLogin, data, isError } = useKakaoLoginMutation();
  const handleCloseModal = () => setDisplayModal(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://kauth.kakao.com/oauth/token",
          {
            grant_type: GRANT_TYPE,
            redirect_uri: REDIRECT_URI,
            client_id: REST_API_KEY,
            code: AUTHORIZE_CODE,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );
        localStorage.setItem("oAuth_user", "true");
        const accessToken = { access_token: response.data.access_token };
        kakaoLogin(accessToken);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (isError) {
    return <NotFoundPage />;
  }

  return (
    <>
      {data?.status_code === 400 && (
        <AlertModal
          modal={displayModal}
          handleCloseModal={handleCloseModal}
          isLink={true}
          path="/auth/login"
        />
      )}{" "}
      {data?.status_code === 403 && data?.error_code === 361 && (
        <AlertModal
          modal={displayModal}
          handleCloseModal={handleCloseModal}
          {...NotKakaoUser.args}
        />
      )}
      {(data?.status_code === 500 && data?.error_code === 460) ||
        (data?.error_code === 461 && (
          <AlertModal
            modal={displayModal}
            handleCloseModal={handleCloseModal}
            {...KakaoAuthFailure.args}
          />
        ))}
      <LoadingPage />
    </>
  );
};
