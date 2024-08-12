// import { useMutation } from "@tanstack/react-query";
// import { oAuthKakaoLogin } from "../../api/auth";
// import useAuthStore from "../../store/_useAuthStore";
// import useUserDataStore from "../../store/_useUserDataStore";

// export const useKakaoLoginMutation = () => {
//   const { login } = useAuthStore();
//   const { setUserId } = useUserDataStore();

//   return useMutation({
//     mutationKey: ["kakao_login"],
//     mutationFn: oAuthKakaoLogin,
//     onSuccess: (response) => {
//       if (response.status_code === 200) {
//         console.log(response);
//         const { access, refresh } = response.data.token;
//         localStorage.setItem("accessToken", access);
//         localStorage.setItem("refreshToken", refresh);
//         login();
//         setUserId(response.data.id);
//       }
//     },
//   });
// };
