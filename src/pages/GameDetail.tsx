import GameDetailMap from "../components/v11_gamedetails/GameDetailMap";
import Layout from "../components/v11_gamedetails/Layout";
import clock from "../assets/v11/clock.svg";
import location from "../assets/v11/location.svg";
import participants from "../assets/v11/participants.svg";
import profile from "../assets/v11/profile.svg";
import star from "../assets/v11/star.svg";
import GameDetailFooter from "../components/v11_gamedetails/GameDetailFooter";

const GameDetail = () => {
  return (
    <>
      <section className="bg-light-dark  pt-[3.75rem] pb-[5rem] mb-[4.375rem]">
        <div className="w-[43.25rem]  mx-auto space-y-[1.25rem]">
          {/* map h-[31.25rem] */}
          <GameDetailMap />

          {/* game info h-[15rem] */}
          <Layout height="">
            <div className="space-y-[.75rem] flex flex-col  justify-center">
              <span className="flex items-center justify-center text-[10px] rounded-[0.125rem] max-w-[2.8125rem] w-full h-[1.125rem]  text-[#009799] bg-[#b9dbdc] ">
                모집 완료
              </span>
              {/* title and datetime */}
              <div className="space-y-[0.5rem]">
                <h1 className="text-lg font-bold text-primary-white">
                  [5:5 풀코트] 더모스트 바스켓볼 3파전 픽업게임
                </h1>
                <p className="text-neutral-400 text-sm font-normal text-[#A3A3A3]">
                  2023. 12 .15 15:30 ~ 18:00
                </p>
              </div>
            </div>
            {/* game details */}
            <div className="space-y-[0.38rem] text-primary-white ">
              <div className="flex items-center gap-2">
                <img src={clock} alt="clock" />
                <span>120분 경기</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={location} alt="location" />
                <span>경기도 수원시 매탄로 23-1</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={participants} alt="participants" />
                <span>15 / 18</span>
              </div>
            </div>
            {/* FEE */}
            <h1 className="text-[#7feef0] text-lg font-bold">
              참가비 10,000 원
            </h1>
          </Layout>

          {/* host info 8.125rem */}
          <Layout height="8.125rem">
            <h1 className="text-primary-white font-bold text-lg">
              호스트 소개
            </h1>
            <div className="flex gap-[.75rem]">
              <img src={profile} alt="profile" />
              <div className="space-y-[.25rem] text-primary-white">
                <h2 className="font-bold text-[14px]">어니언수제어묵 님</h2>
                <div className="flex items-center gap-[.38rem] font-[400] text-[14px]">
                  <div className="flex">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <span>5.0</span>
                  <span>리뷰</span>
                </div>
              </div>
            </div>
          </Layout>

          {/* recruiting detaisl h-[24.25rem] */}
          <Layout height="24.25rem">
            <h1 className="text-lg font-bold text-primary-white">모집 정보</h1>
            <div className="text-primary-white font-[400] text-sm h-full">
              <p>
                준비물 <br />
                실내용 운동화 필수 색 조끼있음, 정수기 있음
                <br />
                <br />
                경기 진행 방법 <br />
                총 18명, 9명씩 2팀. 8분 4쿼터씩 3게임 진행
                <br />
                <br />
                편의시설 <br />
                탈의실, 식수대, 샤워실, 주차장 완비
                <br />
                <br />
                추가 알림 <br />
                운동하시는 모습을 촬영해서 유튜브에 올리고 있습니다. <br />
                (참석 시 촬영 동의하신 것으로 알겠습니다.)
                <br />
                <br />
                문자로 계좌번호 받고, 연락없으신 분들이 간혹 계셔서, 예약은
                무조건 입금순으로 하겠습니다.
              </p>
            </div>
          </Layout>
        </div>
      </section>
      <GameDetailFooter />
    </>
  );
};

export default GameDetail;
