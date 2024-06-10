import { MotionDiv } from "./motions";

export default function Features() {
  return (
    <>
      <div className=" feature h-auto  bg-cover bg-center ">
        <div className="flex items-center py-6  lg:justify-center md:justify-center flex-wrap justify-evenly w-full lg:gap-20 md:gap-15 gap-8 lg:flex-row md:flex-row flex-col h-full bg-neutral-900 bg-opacity-60">
          <MotionDiv
            className="bg-slate-600  rounded-3xl p-10 m-3 lg:p-8 md:p-8 bg-opacity-65"
            initial={{ y: "100%", opacity: 0.3, backdropFilter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, backdropFilter: "blur(0px)" }}
            transition={{ delay: 0.1, duration: 0.65 }}
          >
            <h1 className="lg:text-2xl md:text-2xl text-xl text-white">
              {" "}
              Multiple Bible Versions.
            </h1>
            <p>
              Dive deeper into the scriptures with access to an array of
              <br />
              Bible translations and versions. Whether you prefer the poetic
              <br />
              prose of the King James Version or the contemporary clarity of the
              <br />
              New International Version, our platform offers a variety of
              <br />
              options to suit your reading preferences and study needs.
            </p>
          </MotionDiv>
          <MotionDiv
            className="bg-[#948979] m-3 rounded-3xl p-10 lg:p-8 md:p-8 bg-opacity-65"
            initial={{ y: "100%", opacity: 0.3, backdropFilter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, backdropFilter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.65 }}
          >
            <h1 className="lg:text-2xl md:text-2xl text-xl text-white">
              Search by Bible Story or Word Phrase.
            </h1>
            <p>
              Easily locate specific Bible passages or explore thematic
              connections
              <br /> with our intuitive search feature. Whether you&apos;re{" "}
              <br />
              searching for a beloved parable, a foundational doctrine, or a{" "}
              <br />
              verse to uplift your spirits, our robust search functionality{" "}
              <br />
              empowers you to find relevant passages with precision and ease.{" "}
              <br />
            </p>
          </MotionDiv>
          <MotionDiv
            className="bg-slate-600 m-3 rounded-3xl p-10 lg:p-8 md:p-8  bg-opacity-65"
            initial={{ y: "100%", opacity: 0.3, backdropFilter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, backdropFilter: "blur(0px)" }}
            transition={{ delay: 0.1, duration: 0.65 }}
          >
            <h1 className="lg:text-2xl md:text-2xl text-xl text-white">
              Signing Up Offers Bible Plan Follow-Ups.
            </h1>
            <p>
              Take your Bible study to the next level with personalized reading
              <br />
              plans and devotionals. When you sign up with Spiritual Awakening
              <br />
              you&apos;ll receive curated follow-up content tailored to your
              <br />
              chosen plan, including reading schedules, reflections, and
              <br />
              insights to guide you on your spiritual journey. Stay engaged,
              <br />
              motivated, and inspired as you grow in your understanding and
              <br />
              application of God&apos;s Word.
            </p>
          </MotionDiv>
        </div>
      </div>
    </>
  );
}
