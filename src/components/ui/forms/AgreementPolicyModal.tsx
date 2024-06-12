type Prop = {
  setDisplayPolicy: (arg: boolean) => void;
};

export const AgreementPolicyModal = ({ setDisplayPolicy }: Prop) => {
  return (
    <div className="z-[9999] flex items-center justify-center w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-[#ffffffd5] ">
      <div className="text-zinc-900 text-sm w-[348px]  p-4 bg-gray-100 rounded-lg border border-slate-200 flex-col justify-start items-start gap-4 inline-flex">
        <h1 className="h-6 text-gray-900 text-lg font-bold leading-7">
          MITI 회원 이용 약관
        </h1>
        <p>
          제 1 장 총칙 제1조 (목적) 본 약관은 (주)핀업 (이하 '회사' 라 한다)에서
          운영하는 핀업(https://www.finup.co.kr) 및 핀업
          스탁(https://stock.finup.co.kr), 핀업
          레이더(https://radar.finup.co.kr)의 '사이트' (이하 합쳐서 '사이트'이라
          한다)에서 제공하는 인터넷 관련 서비스(이하 '서비스'라 한다)를 이용함에
          있어 회사와 이용자의 권리, 의무 및 책임 사항을 규정함을 목적으로
          합니다.
        </p>
        <p>
          제 2조 (약관 등의 명시와 설명 및 개정)
          <br />
          ① '사이트'는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지
          주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호,
          전자우편주소, 사업자등록번호, 통신판매업신고번호, 개인정보보호책임자
          등을 이용자가 쉽게 알 수 있도록 ‘사이트’의 초기 서비스 화면(전면)에
          게시합니다. 다만, 약관의 내용은 이용자가 연결 화면을 통하여 볼 수
          있도록 할 수 있습니다.
          <br />
          ② '사이트'는 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용
          중 결제 취소, 청약 철회, 환불 조건 등과 같은 중요한 내용을 이용자가
          이해할 수 있도록 별도의 연결 화면 또는 팝업 화면 등을 제공 하여
          이용자의 확인을 구하여야 합니다.
          <br />③ '사이트'는 「전자상거래 등에서의 소비자보호에 관한 법률」,
          「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」,
          「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호
          등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등
          관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
          <br />④ '사이트'가 약관을 개정할 경우에는 적용 일자 및 개정 사유를
          명시하여 현행 약관과 함께 '사이트'의 초기 화면에 그 적용 일자 7일
          전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관
          내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예 기간을 두고
          공지합니다.
        </p>
        <button
          onClick={() => setDisplayPolicy(false)}
          className="w-full h-[34px] rounded-lg bg-[#4065f5] text-white"
        >
          획인
        </button>
      </div>
    </div>
  );
};
