import Cry from "./Brevo";

export default function Footer() {
  return (
    <>
      <div className=" bg-cover bg-center  footer lg:h-[75svh] h-screen ">
        <div className="h-full w-full flex flex-col-reverse lg:flex-row md:flex-row items-start p-5 lg:justify-evenly justify-start bg-red-600 bg-opacity-50">
          <div className="flex gap-3 flex-col">
            <h1 className="text-xl text-white">Spiritual Awakening</h1>
            <p>Terms of Service</p>
            <p>Privacy policies</p>
            <p>Spiritual Awakening</p>
            <i className="text-xs">&copy; {new Date().getFullYear()} all rights reserved, Ayomide, CHO inc.</i>
          </div>
          <div className="flex  gap-3 flex-col">
            <h1 className="text-xl text-white">NewsLetter</h1>
            <Cry />
            {/* <div className="flex items-center h-auto">
            <iframe
              className="w-auto "
              height={305}
              src="https://5ce8b968.sibforms.com/serve/MUIFAHgziETc5jzyLX2GKjrLlPuRewjrGJis8STM07XUFLpMbX97s9bxNK0j5QP14u362WBpPxpTANQEdItsgCtw8NOIk7hgwTLf9ciiLVeAN1eTSpvVKV4a1cB9mUaZIHw5jAAfDHgWhMkkJPkD-jcQ69ZauxKiHsxB2hqhgDaYxwrFlKMq8htFSET_aTe6lLsqyK41B_wmfxE5"
              allowFullScreen
            ></iframe>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
