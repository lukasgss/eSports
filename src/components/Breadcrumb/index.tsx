import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbData {
  text: string;
  link?: string;
}

interface BreadcrumbProps {
  breadcrumbs: BreadcrumbData[];
}

const Breadcrumb = ({ breadcrumbs }: BreadcrumbProps) => {
  return (
    <div className="flex">
      <div className="flex items-center gap-2 text-lg">
        {breadcrumbs.map((breadcrumb) =>
          breadcrumb.link ? (
            <React.Fragment key={breadcrumb.text}>
              <span className="flex gap-3">
                <Link to={breadcrumb.link} className="text-lighter-gray">
                  {breadcrumb.text}
                </Link>
                <span className="text-light-gray">/</span>
              </span>
            </React.Fragment>
          ) : (
            <span className="text-light-gray" key={breadcrumb.text}>
              {breadcrumb.text}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;
