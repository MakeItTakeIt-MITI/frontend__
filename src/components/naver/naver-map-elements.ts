
// export const customInfoHTMLContent = (match: any) => {
export const customInfoHTMLContent = () => {
    const div = document.createElement('div');

    // div.setAttribute('key';
    div.classList.add('bg-white', 'w-[80px]', 'p-2', 'text-center', 'rounded-xl', 'hover:bg-[#4065F6]', 'hover:text-white');
    const contentContainer = document.createElement('div'); // Create a container for the content
    div.appendChild(contentContainer);


    const p1 = document.createElement('p');
    p1.classList.add('text-[10px]', 'text-center', 'text-[#999]',);
    // p1.textContent = match.starttime.slice(0, -3);
    p1.textContent = 'hello world'
    contentContainer.appendChild(p1);

    const p2 = document.createElement('p');
    p2.classList.add('text-[12px]', 'text-center', 'text-[#999]', 'truncate');
    p2.textContent = 'info'
    // p2.textContent = match.court.address_detail;
    contentContainer.appendChild(p2);

    const p3 = document.createElement('p');
    p3.classList.add('font-bold', 'text-[14px]');
    // p3.textContent = `${match.fee.toLocaleString("ko-KR", { currency: "KRW" })}원`;
    p3.textContent = 'price'
    contentContainer.appendChild(p3);
    return div;
}
