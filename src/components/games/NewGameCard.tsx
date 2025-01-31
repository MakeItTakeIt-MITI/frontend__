import time from "../../assets/v11/time.svg";
import participants from "../../assets/v11/games/players-icon.svg";

const NewGameCard = () => {
  const game = {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut commodi nam exercitationem laboriosam quibusdam repellendus, cum sunt quod voluptatibus sed doloremque est possimus molestiae aut accusamus ea harum enim nobis quia nisi cupiditate numquam aperiam. Ullam accusantium odit aliquid, qui laborum aperiam distinctio illum ad suscipit explicabo natus animi ducimus, porro voluptates tenetur vel inventore dolorum deleniti dolores adipisci. Culpa, enim atque! Ex....",
  };
  return (
    <div className="space-y-[10px]">
      <div className="cssanimation sequence fadeInBottom  sm:hidden cursor-pointer md:flex flex-col justify-center space-y-3 w-full sm:h-[7.5rem] md:h-[120px] rounded-xl ">
        {/* Status and title */}
        <div className="space-y-2">
          <span
            style={{
              backgroundColor: "#b9dbdc",
              color: "#4152EB",
            }}
            className="p-[.25rem] text-[10px] rounded-[0.125rem] w-full font-bold  "
          >
            모집 중
          </span>
          <h1
            className={`font-bold  text-[#E5E5E5] text-[18px] ${game.title.length > 64 ? "truncate" : ""}`}
          >
            {/* GAME TITLE MAX LENGHT 64 MAX LINE 1 */}
            {game.title}
          </h1>
        </div>
        {/* Game Information */}
        <div className="flex justify-between items-end">
          <div className="space-y-1.5 text-[#E5E5E5] text-[12px]">
            <div className="flex gap-1">
              <img src={time} alt="time" />
              <span>hh:mm ~ hh:mm</span>
            </div>

            <div className="flex gap-1">
              <img src={participants} alt="participants" />
              <span>24/28</span>
            </div>
          </div>
          {/* FEE */}
          <h2 className="text-primary-teal font-bold text-[18px]">₩24,000</h2>
        </div>
      </div>
      <hr
        style={{
          backgroundColor: "var(--Neutral-Gray-600, #525252)",
        }}
        className="h-[1px]"
      />
    </div>
  );
};

export default NewGameCard;
