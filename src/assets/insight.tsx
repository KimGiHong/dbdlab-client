import * as React from "react";

function insight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        className="SidebarIcon"
        d="M12.667 2H3.333C2.6 2 2 2.6 2 3.333V8c0 .733.6 1.333 1.333 1.333h9.334C13.4 9.333 14 8.733 14 8V3.333C14 2.6 13.4 2 12.667 2zm0 4H10c0 1.08-.92 2-2 2s-2-.92-2-2H3.333V3.333h9.334V6zM10 10.667h4v2C14 13.4 13.4 14 12.667 14H3.333C2.6 14 2 13.4 2 12.667v-2h4c0 1.106.893 2 2 2s2-.894 2-2z"
        fill="#3C3C46"
      />
    </svg>
  );
}

const Memoinsight = React.memo(insight);
export default Memoinsight;
