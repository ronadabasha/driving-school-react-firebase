type Props = {
  className?: string;
};

const Cross = ({ className }: Props) => (
  <svg
    className={className}
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.0752 15.9246L15.9244 1.07538"
      stroke="#ffffff"
      strokeWidth="2"
    />
    <path
      d="M1.0752 1.07538L15.9244 15.9246"
      stroke="#ffffff"
      strokeWidth="2"
    />
  </svg>
);

export default Cross;
