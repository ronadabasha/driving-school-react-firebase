type Props = {
  customStyle?: string;
};

function Logo({ customStyle }: Props) {
  return (
    <a href="/">
      <img src="logo.png" alt="logo" className={customStyle} />
    </a>
  );
}

export default Logo;
