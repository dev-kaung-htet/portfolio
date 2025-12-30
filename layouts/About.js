import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import ImageFallback from "./components/ImageFallback";

const About = ({ data }) => {
  return (
    <section className="section mt-5 ">
      <div className="container">
        {/* SectionHeader Used Here */}
        {markdownify("Professional Experiences", "h2", "section-title")}

        {/* Experience Card */}
        <div className="w-full rounded-md border border-primary  p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(43,162,131,0.25)] sm:p-10">
          {/* Card Header Row */}
          <div className="mb-6 flex flex-col gap-6 sm:flex-row">
            {/* Office Icon Box */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>
            </div>

            {/* Job Details */}
            <div className="w-full">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Full-Stack Developer</h3>
                  <p className="text-lg font-medium text-gray-800">
                    Kode IT Solutions ( Startup )
                  </p>
                </div>
                <span className="text-md self-start rounded-xl  border bg-black px-3 py-1 font-medium text-white md:self-center">
                  Part-time ( Remote )
                </span>
              </div>

              {/* Meta Info: Date & Location */}
              <div className="mt-2 flex flex-wrap gap-6 text-sm text-gray-800">
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0h18M5.25 4.5h13.5m-18 0v11.25c0 .621.504 1.125 1.125 1.125h13.5c.621 0 1.125-.504 1.125-1.125V4.5"
                    />
                  </svg>
                  2025 ( November ) - Present
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  Bangkok, Thailand
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mb-6 leading-relaxed ">
            As a Full Stack Developer at Kode IT Solutions, I engineered
            high-performance applications using Next.js, Tailwind CSS, and
            Framer Motion. I designed optimized PostgreSQL schemas with Prisma
            ORM for type-safe data management and utilized SWR for efficient
            fetching. My key contributions included building scalable role-based
            dashboards and modular form systems that significantly streamlined
            operational workflows.
          </p>

          {/* Key Achievements */}
          <div className="mb-6">
            <h4 className="mb-3 font-semibold ">Core Contributions</h4>
            <ul className="list-inside list-disc space-y-2  marker:text-primary">
              <li>
                Developed responsive and highly interactive interfaces using
                Next.js, Tailwind CSS, and Framer Motion, ensuring a seamless
                and engaging user experience.
              </li>
              <li>
                Designed and optimized PostgreSQL database schemas and
                integrated Prisma ORM for type-safe, efficient, and scalable
                data management.
              </li>
              <li>
                Implemented role-based dashboards featuring customer and
                operator management, subscription tracking, and system
                analytics.
              </li>
              <li>
                Built modular form and data management features with search,
                filtering, and version control capabilities to enhance
                operational workflows.
              </li>
              <li>
                Delivered maintainable, high-quality full-stack solutions using
                Next.js, Node.js, Prisma ORM, PostgreSQL, and SWR, following
                best practices in performance and code quality.
              </li>
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="mb-3 font-semibold ">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
                "Node.js",
                "PostgreSQL",
                "Prisma ORM",
                "React Query",
              ].map((tech) => (
                <span
                  key={tech}
                  className="cursor-default rounded-full border  bg-primary px-3 py-1 text-sm text-white transition-colors hover:border-purple-500/50 hover:text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 w-full rounded-md border border-primary  p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(43,162,131,0.25)] sm:p-10">
          {/* Card Header Row */}
          <div className="mb-6 flex flex-col gap-6 sm:flex-row">
            {/* Office Icon Box */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>
            </div>

            {/* Job Details */}
            <div className="w-full">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Full-Stack Developer</h3>
                  <p className="text-lg font-medium text-gray-800">
                    Myanmar OCC Co.,Ltd
                  </p>
                </div>
                <span className="text-md self-start rounded-xl  border bg-black px-3 py-1 font-medium text-white md:self-center">
                  Full-time
                </span>
              </div>

              {/* Meta Info: Date & Location */}
              <div className="mt-2 flex flex-wrap gap-6 text-sm text-gray-800">
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0h18M5.25 4.5h13.5m-18 0v11.25c0 .621.504 1.125 1.125 1.125h13.5c.621 0 1.125-.504 1.125-1.125V4.5"
                    />
                  </svg>
                  2025 May - September
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  Yangon, Myanmar
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mb-6 leading-relaxed ">
            Myanmar OCC Co., Ltd is a technology-driven company focused on
            delivering digital transformation and enterprise solutions for both
            local and international clients. Through its commitment to
            innovation and technical excellence, the company helps businesses
            modernize their operations and enhance efficiency.
          </p>

          {/* Key Achievements */}
          <div className="mb-6">
            <h4 className="mb-3 font-semibold ">Core Contributions</h4>
            <ul className="list-inside list-disc space-y-2  marker:text-primary">
              <li>
                Developed responsive and user-friendly interfaces using Next.js
                and Material UI, ensuring seamless user experience and
                performance.
              </li>
              <li>
                Designed and optimized PostgreSQL database schemas and
                integrated Prisma ORM for type-safe, efficient, and scalable
                data management.
              </li>
              <li>
                Implemented role-based dashboards featuring customer and
                operator management, subscription tracking, and system
                analytics.
              </li>
              <li>
                Built modular form and data management features with search,
                filtering, and version control capabilities to enhance
                operational workflows.
              </li>
              <li>
                Delivered maintainable, high-quality full-stack solutions using
                Next.js, Node.js, Prisma ORM, PostgreSQL, and SWR, following
                best practices in performance and code quality.
              </li>
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="mb-3 font-semibold ">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "Typescript",
                "Material UI",
                "Node.js",
                "Prisma ORM",
                "PostgreSQL",
                "SWR",
              ].map((tech) => (
                <span
                  key={tech}
                  className="cursor-default rounded-full border  bg-primary px-3 py-1 text-sm text-white transition-colors hover:border-purple-500/50 hover:text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 w-full rounded-md border border-primary  p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(43,162,131,0.25)] sm:p-10">
          {/* Card Header Row */}
          <div className="mb-6 flex flex-col gap-6 sm:flex-row">
            {/* Office Icon Box */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>
            </div>

            {/* Job Details */}
            <div className="w-full">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Full-Stack Developer</h3>
                  <p className="text-lg font-medium text-gray-800">
                    Product-Base
                  </p>
                </div>
                <span className=" self-start rounded-xl  border bg-black px-3 py-1 font-medium text-white md:self-center">
                  Remote
                </span>
              </div>

              {/* Meta Info: Date & Location */}
              <div className="mt-2 flex flex-wrap gap-6 text-sm text-gray-800">
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0h18M5.25 4.5h13.5m-18 0v11.25c0 .621.504 1.125 1.125 1.125h13.5c.621 0 1.125-.504 1.125-1.125V4.5"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  Yangon, Myanmar
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mb-6 leading-relaxed ">
            Media Streaming Application is a high-performance content platform
            developed as a remote project-based initiative. Built using Next.js
            and TypeScript, the application prioritizes fast rendering and
            seamless navigation to ensure a premium viewing experience. I
            designed a responsive, modern interface using Tailwind CSS and
            shadcn/ui, creating a consistent visual identity across all devices.
            On the backend, I utilized Node.js and MongoDB to manage extensive
            media libraries, implementing robust search and browsing
            capabilities that allow users to effortlessly discover and play
            content while maintaining system scalability.
          </p>

          {/* Key Achievements */}

          {/* Technologies Used */}
          <div>
            <h4 className="mb-3 font-semibold ">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "shadcn/ui",
                "Node.js",
                "MongoDB",
              ].map((tech) => (
                <span
                  key={tech}
                  className="cursor-default rounded-full border  bg-primary px-3 py-1 text-sm text-white transition-colors hover:border-purple-500/50 hover:text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 w-full rounded-md border border-primary  p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(43,162,131,0.25)] sm:p-10">
          {/* Card Header Row */}
          <div className="mb-6 flex flex-col gap-6 sm:flex-row">
            {/* Office Icon Box */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>
            </div>

            {/* Job Details */}
            <div className="w-full">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">
                    Volunteer Full-Stack Developer
                  </h3>
                  <p className="text-lg font-medium text-gray-800">
                    Advanced Young Professionals Association
                  </p>
                </div>
                <span className="self-start rounded-xl border  bg-black px-3 py-1 text-xs font-medium text-white md:self-center">
                  Part-time ( Remote )
                </span>
              </div>

              {/* Meta Info: Date & Location */}
              <div className="mt-2 flex flex-wrap gap-6 text-sm text-gray-800">
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0h18M5.25 4.5h13.5m-18 0v11.25c0 .621.504 1.125 1.125 1.125h13.5c.621 0 1.125-.504 1.125-1.125V4.5"
                    />
                  </svg>
                  2022 - Present
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  San Francisco, CA
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mb-6 leading-relaxed ">
            Volunteered as a Full-Stack Developer for the Advanced Young
            Professionals Association, dedicating technical skills to support
            the organization's digital initiatives. I utilized PHP and MySQL to
            develop and maintain dynamic web features, ensuring reliable data
            management for organizational activities. On the frontend, I
            leveraged Bootstrap to design a responsive and accessible user
            interface, improving the overall browsing experience for members and
            visitor
          </p>

          <div>
            <h4 className="mb-3 font-semibold ">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {["PHP", "Bootstrap", "MySQL"].map((tech) => (
                <span
                  key={tech}
                  className="cursor-default rounded-full border  bg-primary px-3 py-1 text-sm text-white transition-colors hover:border-purple-500/50 hover:text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
