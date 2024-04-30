import { Link } from "react-router-dom";

export interface QuickLinkProps {
  path?: string | "/";
  context?: string;
}

export const QuickLinkTitle: React.FC<QuickLinkProps> = ({
  path = "/",
  context,
}) => {
  return <Link to={path}>{context}</Link>;
};
