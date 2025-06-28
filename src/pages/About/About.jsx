import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full-Stack Dev, AI Tinkerer, DevOps Buff, Builder of Smart Solutions
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                <span className="font-bold text-white">
                  Hello! I'm Shailesh Kumar,   
                </span>
                {" "}
                 a Full-Stack Developer and AI/ML Enthusiast with a passion for building 
                intelligent and scalable web applications.
              </p>
              <p className="text-white">
                I bring 
                {" "}
                <span className="font-bold text-white">real-world coding experience in startup environments </span>
                , having worked 
                closely with CEOs and core teams to ship impactful features under pressure. 
                At a leading 
                {" "}
                <span className="font-bold text-white">US-based real estate startup.</span>
                {" "}
                I played a key role in developing a high-performance web application. My expertise spans across the MERN stack
                and I have a strong foundation in AI/ML, which I leverage to create smart solutions
                that enhance user experience and drive business growth.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I thrive in fast-moving environments where I'm not just a developer—but 
                    a problem solver, a builder, and a key contributor to the product's evolution.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Shailesh Kumar
                    </cite>
                    {/* <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">OlovaJS</span>
                    </div> */}
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
