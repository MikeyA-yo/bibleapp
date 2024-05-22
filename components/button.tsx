import Link from "next/link";

export default function Button() {
  return (
    <>
      <Link href={"/search"}>
        <button className="btn-55">
          <span>Explore Books</span>
        </button>
      </Link>
    </>
  );
}
export function ButtonSignUp() {
  return (
    <>
      <Link href={"/signup"}>
        {" "}
        <button className="btn-17">
          {" "}
          <span className="text-container">
            <span className="text">Sign Up</span>
          </span>
        </button>{" "}
      </Link>
    </>
  );
}
export function ButtonKeyPhrase(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      {/*Button*/}
      <button className="cta"
      {...props}
      >
        <span className="hover-underline-animation"> Search Key Phrase </span>
        <svg
          id="arrow-horizontal"
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={10}
          viewBox="0 0 46 16"
        >
          <path
            id="Path_10"
            data-name="Path 10"
            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
            transform="translate(30)"
          />
        </svg>
      </button>
    </>
  );
}
