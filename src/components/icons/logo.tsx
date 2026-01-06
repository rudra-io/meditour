import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      width="80" 
      height="24" 
      viewBox="0 0 80 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text 
        x="0" 
        y="18" 
        fontFamily="sans-serif" 
        fontSize="20" 
        fontWeight="bold" 
        fill="currentColor"
      >
        medico
      </text>
    </svg>
  );
}
