import * as React from "react";

function calendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        className="SidebarIcon"
        d="M11.333 8.15H8v3.25h3.333V8.15zM10.667 1v1.3H5.333V1H4v1.3h-.667a1.31 1.31 0 00-1.326 1.3L2 12.7c0 .715.593 1.3 1.333 1.3h9.334C13.4 14 14 13.415 14 12.7V3.6c0-.715-.6-1.3-1.333-1.3H12V1h-1.333zm2 11.7H3.333V5.55h9.334v7.15z"
        fill="#3C3C46"
      />
    </svg>
  );
}

const Memocalendar = React.memo(calendar);
export default Memocalendar;
