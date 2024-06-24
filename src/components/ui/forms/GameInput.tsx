import { UseFormRegister } from "react-hook-form";

type GameHostValues =
  | "title"
  | "startdate"
  | "starttime"
  | "enddate"
  | "endtime"
  | "info"
  | "fee"
  | "min_invitation"
  | "max_invitation"
  | "court"
  | "court.name"
  | "court.address"
  | "court.address_detail";

interface CourtField {
  name: string;
  address: string;
  address_detail: string;
}

export interface GameInputField {
  title: string;
  startdate: string;
  starttime: string;
  enddate: string;
  endtime: string;
  info: string;
  fee: number;
  min_invitation: number;
  max_invitation: number;
  court: CourtField;
}
interface GameInputProps {
  type: string;
  id: string;
  dataId: string;
  placeholder: string;
  register: UseFormRegister<GameInputField>;
  register_type: GameHostValues;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaInvalid?: boolean;
  height: string;
  pr?: string;
}

export default function GameInput({
  type,
  id,
  dataId,
  placeholder,
  register,
  register_type,
  ariaLabel,
  ariaInvalid,
  height,
  pr,
}: GameInputProps) {
  return (
    <input
      type={type}
      id={id}
      autoComplete="off"
      data-testid={dataId}
      placeholder={placeholder}
      {...register(register_type, {
        required: true,
      })}
      aria-label={ariaLabel}
      aria-invalid={ariaInvalid}
      className="truncate w-full px-4 py-[17px]  bg-neutral-100 rounded-lg text-sm font-medium "
      style={{ height: height, paddingRight: pr }}
    />
  );
}
