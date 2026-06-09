import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-8 pt-28 pb-32">

        <div className="max-w-5xl">

          <span
            className="
              uppercase
              tracking-[0.3em]
              text-sm
              text-[#CB1B03]
            "
          >
            Data • Culture • Creative Industries
          </span>

          <h1
            className="
              mt-6
              text-7xl
              md:text-8xl
              leading-none
            "
          >
            Exploring culture
            <br />
            through data.
          </h1>

          <div
            className="
              w-24
              h-[4px]
              bg-[#25799B]
              mt-8
            "
          />

          <div
            className="
              mt-10
              text-xl
              max-w-3xl
              text-black/70
              leading-relaxed
              space-y-6
            "
          >
            <p>
            At first glance, data and culture seem to belong to opposite worlds. But the more I work with data, the more I see it as a tool for exploration. 
            </p>

            <p>
            Culture is not a monolith. It is vibrant and ever-changing, and every time it moves through people and ideas, it leaves a trace. In the books we read, the music we listen to, the movies we watch, and the conversations we share.
            </p>

            <p>
            I can’t help but wonder:
            </p>

            <p className=" text-[#25799B] text-xl">
            What if data can be used to explore culture in a new, exciting way?
            </p>

            <p>
            This space is an attempt to do just that: to explore how data can help us discover and navigate the cultural world, without reducing it to numbers.
          </p>

          </div>

          <div className="mt-12 flex gap-4">

            <Link
              href="/projects"
              className="
                bg-[#25799B]
                text-white
                px-6
                py-3
                hover:opacity-90
              "
            >
              View Projects
            </Link>

            <Link
              href="/about"
              className="
                border
                border-black
                px-6
                py-3
              "
            >
              About
            </Link>

          </div>

        </div>

      </section>

      {/* FEATURED */}

      <section className="bg-[#25799B] py-24">

        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase text-white/70 tracking-widest">
            Featured Case Study
          </span>

          <h2
            className="
              text-5xl
              text-white
              mt-4
            "
          >
            Cultural Recommendation Engine
          </h2>

          <p
            className="
              mt-6
              text-white/80
              max-w-xl
            "
          >
            Placeholder project description.
          </p>

          <div
            className="
              mt-12
              h-80
              bg-white/10
              border
              border-white/20
            "
          />

        </div>

      </section>

      {/* PILLARS */}

      <section className="max-w-7xl mx-auto px-8 py-32">

        <div className="mb-16">

          <span
            className="
              uppercase
              tracking-widest
              text-[#CB1B03]
            "
          >
            Expertise
          </span>

          <h2 className="text-5xl mt-4">
            What I build
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border-t-4 border-[#25799B] pt-6">
            <h3 className="text-2xl">
              Data Engineering
            </h3>
          </div>

          <div className="border-t-4 border-[#25799B] pt-6">
            <h3 className="text-2xl">
              Analytics
            </h3>
          </div>

          <div className="border-t-4 border-[#CB1B03] pt-6">
            <h3 className="text-2xl">
              Machine Learning
            </h3>
          </div>

        </div>

      </section>

    </main>
  );
}