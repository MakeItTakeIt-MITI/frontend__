const DetailHeader = () => {
  return (
    <div className="w-full rounded-[20px] space-y-[1.25rem] bg-dark-card p-6 border border-[#525252]">
      <div className="space-y-[0.5rem]">
        <h1 className="text-primary-white font-bold text-[18px]">
          더모스트 바스켓볼 - 수지점
        </h1>
        <p className="text-sm font-[500] text-[#A3A3A3]">
          경기도 용인시 수지구 동천로 417-1
        </p>
      </div>
      <p className="text-primary-white text-sm font-[400]">
        더모스트 바스켓볼 수지점입니다. 평일 오전, 오후 유소년 및 아마추어
        스킬트레이닝 수업이 진행되며, 학부모께서 훈련을 참관할 수 있는 관람석이
        있습니다.
        <br /> <br />
        흡연은 실외에서 부탁드리며, 실내에서는 준비된 실내화를 착용해주세요.
      </p>
    </div>
  );
};

export default DetailHeader;
