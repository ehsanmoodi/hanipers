import type { H2Props } from "./types";

const H2: React.FC<H2Props> = ({ children, classes = "" }) => {
  return <h2 className={`title ${classes}`}>{children}</h2>;
};

export default H2;
