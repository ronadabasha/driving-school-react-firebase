import { Link } from "react-router-dom";

type Props = {
  customStyle?: string;
};

function Logo({ customStyle }: Props) {
  return (
    <Link to="/">
      <img src="/logo.png" alt="logo" className={customStyle} />
    </Link>
  );
}

export default Logo;
