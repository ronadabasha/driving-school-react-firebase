import { Link } from "react-router-dom";

type Breadcrumb = {
  to: string;
  label: string;
};

type Props = {
  breadcrumbs: Breadcrumb[];
};

function Banner({ breadcrumbs }: Props) {
  return (
    <div className="relative bg-pageBanner bg-cover bg-center h-[200px] md:h-[350px]">
      {breadcrumbs && (
        <p className="w-full text-white text-center text-xl absolute top-[83px] md:top-[167px]">
          {breadcrumbs.map((breadcrumb, index) => {
            const divider = index < breadcrumbs.length - 1 ? " / " : "";
            return (
              <span key={breadcrumb.label}>
                <Link to={breadcrumb.to}>{breadcrumb.label}</Link>
                {divider}
              </span>
            );
          })}
        </p>
      )}
    </div>
  );
}

export default Banner;
