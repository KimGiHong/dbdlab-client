import * as React from "react";

function dashboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        className="SidebarIcon"
        d="M12.667 2H3.333C2.6 2 2 2.6 2 3.333v9.334C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2zM6 11.333H4.667V6.667H6v4.666zm2.667 0H7.333V4.667h1.334v6.666zm2.666 0H10V8.667h1.333v2.666z"
        fill="#3C3C46"
      />
    </svg>
  );
}

const Memodashboard = React.memo(dashboard);
export default Memodashboard;
