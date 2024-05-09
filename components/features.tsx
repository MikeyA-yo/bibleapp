import { MotionDiv } from "./motions";

export default function Features() {
  return (
    <>
      <div className=" feature h-96   bg-cover bg-center ">
        <div className="flex items-center lg:justify-center md:justify-center justify-evenly w-full lg:gap-20 md:gap-15 gap-4 lg:flex-row md:flex-row flex-col h-full bg-neutral-900 bg-opacity-60">
          <MotionDiv
            className="bg-slate-600 rounded-3xl p-2 lg:p-8 md:p-8 bg-opacity-65"
            initial={{ y: "100%", opacity: 0.3, backdropFilter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, backdropFilter: "blur(0px)" }}
            transition={{ delay: 0.1, duration: 0.65 }}
          >
            <h1 className="text-2xl text-white"> heading</h1>
            <p>Hey whatsup</p>
          </MotionDiv>
          <MotionDiv
            className="bg-[#948979] rounded-3xl p-2 lg:p-8 md:p-8 bg-opacity-65"
            initial={{ y: "100%", opacity: 0.3, backdropFilter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, backdropFilter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.65 }}
          >
            <h1 className="text-2xl text-white">heading</h1>
            <p>Hi mom</p>
          </MotionDiv>
          <MotionDiv
            className="bg-slate-600 rounded-3xl p-2 lg:p-8 md:p-8  bg-opacity-65"
            initial={{ y: "100%", opacity: 0.3, backdropFilter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, backdropFilter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 0.65 }}
          >
            <h1 className="text-2xl text-white">header</h1>
            <p>Hey dad</p>
          </MotionDiv>
        </div>
      </div>
    </>
  );
}
