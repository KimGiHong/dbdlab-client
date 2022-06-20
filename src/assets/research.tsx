import * as React from "react";

function research(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        className="SidebarIcon"
        d="M6.667 2.667h-4c-.734 0-1.327.6-1.327 1.333l-.007 8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V5.333c0-.733-.6-1.333-1.334-1.333H8L6.667 2.667z"
        fill="#3C3C46"
      />
    </svg>
  );
}

const Memoresearch = React.memo(research);
export default Memoresearch;
