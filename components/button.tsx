import Link from "next/link";

export default function Button() {
  return (
    <>
      <Link href={'/search'}><button className="btn-55">
        <span>Explore Books</span>
      </button></Link>
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
