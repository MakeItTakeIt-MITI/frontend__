import { Link } from "react-router-dom";

export interface QuickLinkProps {
  path?: string | "/";
  context?: string;
}

export const QuickLinkTitle: React.FC<QuickLinkProps> = ({
  path = "/",
  context,
}) => {
  return (
    <Link className="text-[12px]" to={path}>
      {context}
    </Link>
  );
};
