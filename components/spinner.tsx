// icon:123-spinner | Icomoon https://icomoon.io/ | Keyamoon
import * as React from "react";

function Spinner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6 2a2 2 0 113.999-.001A2 2 0 016 2zm4.243 1.757a2 2 0 113.999-.001 2 2 0 01-3.999.001zM13 8a1 1 0 112 0 1 1 0 01-2 0zm-1.757 4.243a1 1 0 112 0 1 1 0 01-2 0zM7 14a1 1 0 012 0 1 1 0 01-2 0zm-4.243-1.757a1 1 0 012 0 1 1 0 01-2 0zm-.5-8.486a1.5 1.5 0 013 0 1.5 1.5 0 01-3 0zM.875 8a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
      />
    </svg>
  );
}
export function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}
export function X(props: React.SVGProps<SVGSVGElement>) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </>
  );
}
export function LogOutArr() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
        />
      </svg>
    </>
  );
}
export function Plus() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </>
  );
}
export default Spinner;
