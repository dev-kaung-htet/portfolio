import config from "@config/config.json";
import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import Post from "@layouts/partials/Post";
import Sidebar from "@layouts/partials/Sidebar";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import dateFormat from "@lib/utils/dateFormat";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
// 1. IMPORT FRAMER MOTION
import { motion } from "framer-motion";
// 2. IMPORT TYPEWRITER
import Typewriter from "typewriter-effect";

const { blog_folder, pagination } = config.settings;

const Home = ({
  banner,
  posts,
  featured_posts,
  recent_posts,
  categories,
  promotion,
}) => {
  const sortPostByDate = sortByDate(posts);
  const featuredPosts = sortPostByDate.filter(
    (post) => post.frontmatter.featured
  );
  const showPosts = pagination;

  return (
    <Base>
      {/* Banner */}
      <section className="section banner relative pb-0">
        <ImageFallback
          className="absolute bottom-0 left-0 z-[-1] w-full"
          src={"/images/banner-bg-shape.svg"}
          width={1905}
          height={295}
          alt="banner-shape"
          priority
        />

        <div className="container">
          <div className="row flex-wrap-reverse items-center justify-center lg:flex-row">
            <div
              className={
                banner.image_enable
                  ? "mt-12 text-center lg:col-6 lg:mt-0 lg:text-left"
                  : "mt-12 text-center lg:col-12 lg:mt-0 lg:text-left"
              }
            >
              {/* === MODIFIED TITLE SECTION WITH TYPEWRITER === */}
              <div className="banner-title mb-6">
                {/* Keeps the H1 styling but uses the Typewriter component inside */}
                <h1 className="text-3xl font-bold leading-tight lg:text-5xl">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          '<span style="color: #2ba283;">Kaung Htet Aung !</span>'
                        )
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(" Full Stack Developer !")
                        .start();
                    }}
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 75,
                    }}
                  />
                </h1>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              >
                {markdownify(banner.content, "p", "mt-4")}
                {banner.button.enable && (
                  <Link
                    className="btn btn-primary mt-6"
                    href={banner.button.link}
                    rel={banner.button.rel}
                  >
                    {banner.button.label}
                  </Link>
                )}
              </motion.div>
            </div>
            {banner.image_enable && (
              <div className="col-9 lg:col-6">
                <ImageFallback
                  className="mx-auto object-contain"
                  src={banner.image}
                  width={548}
                  height={443}
                  priority={true}
                  alt="Banner Image"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION: Technical Skills
         ========================================= */}
      <section className="section pb-10 pt-10">
        <div className="container mt-2">
          {/* SectionHeader Used Here */}
          {markdownify("Technical Skills", "h2", "section-title")}

          {/* Skills Cards Container */}
          <div className="mt-5 flex flex-col justify-center gap-8 pt-3 lg:flex-row lg:pt-5">
            {/* CARD 1: Frontend Development (ANIMATED) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Start transparent and 50px down
              whileInView={{ opacity: 1, y: 0 }} // Animate to opaque and original position
              viewport={{ once: true }} // Only animate once
              transition={{ duration: 1 }} // Animation speed
              className="w-full rounded-md border border-primary p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(43,162,131,0.25)] sm:p-10"
            >
              <div className="mb-3 flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.514a18.798 18.798 0 013.453-.264c1.18.026 2.332.116 3.453.264.346 1.63.566 3.342.637 5.108a18.96 18.96 0 01-8.18 0c.07-1.766.291-3.478.637-5.108zM4.5 12c0-.823.06-1.63.177-2.42a17.417 17.417 0 015.157 1.551 21.03 21.03 0 00-5.157 1.738A17.416 17.416 0 014.5 12zm15 0c0 .823-.06 1.63-.177 2.42a17.416 17.416 0 01-5.157-1.551 21.03 21.03 0 005.157-1.738 17.417 17.417 0 01.177 2.42zm-9.303 4.914a19.14 19.14 0 00-1.696-4.044 20.984 20.984 0 013.998 0 19.14 19.14 0 00-1.696 4.044 18.86 18.86 0 01-3.606-.37zm5.908 0c.256-.62.492-1.27.704-1.943a21.213 21.213 0 00-4.61 0 19.142 19.142 0 01.704 1.943 18.857 18.857 0 003.202.37zm-9.796-6.258a19.244 19.244 0 000-2.632 21.35 21.35 0 014.493 0 19.244 19.244 0 000 2.632 21.35 21.35 0 00-4.493 0zm11.388-2.632a21.21 21.21 0 010 2.632 21.348 21.348 0 00-4.493 0 19.244 19.244 0 010-2.632 21.349 21.349 0 014.493 0zM8.547 19.486a18.857 18.857 0 003.453.264c1.18 0 2.332-.088 3.453-.264-.346 1.63-.566 3.342-.637 5.108a18.96 18.96 0 00-8.18 0c.07-1.766.291-3.478.637-5.108z"
                    clipRule="evenodd"
                  />
                </svg>
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Frontend Development
                </h2>
              </div>
              <p className="mb-8 text-lg text-gray-800">
                Creating responsive and interactive user interfaces
              </p>
              <ul className="space-y-5">
                {[
                  "React/Next.js , React Query, SWR",
                  "TypeScript",
                  "Tailwind CSS , Bootstrap , Material UI, Shadcn",
                  "Zustand , Redux",
                  "Framer Motion",
                  "Figma Design To Code",
                ].map((skill, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="h-4 w-4 shrink-0 rounded-full bg-primary shadow-[0_0_10px_rgba(168,85,247,0.4)]"></span>
                    <span className="text-xl font-medium ">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CARD 2: Backend Development (ANIMATED) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }} // Added 0.2s delay for staggered effect
              className="w-full rounded-md border border-primary p-8 shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(43,162,131,0.25)] sm:p-10"
            >
              <div className="mb-3 flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.75.75h-11.5a.75.75 0 010-1.5h11.5a.75.75 0 01.75.75zm0 4.5a.75.75 0 01-.75.75h-11.5a.75.75 0 010-1.5h11.5a.75.75 0 01.75.75zM7.5 7.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                    clipRule="evenodd"
                  />
                </svg>
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Backend Development
                </h2>
              </div>
              <p className="mb-8 text-lg text-gray-800">
                Building robust server-side applications and APIs
              </p>
              <ul className="space-y-5">
                {[
                  "Node.js/Express",
                  "Mysql, PostgreSQL, Prisma ORM",
                  "Firebase, Appwrite",
                  "Redis, SSE",
                  "Linux, Git , GitHub, Docker",
                  "Knowledge in AWS Solution Architect Associate",
                ].map((skill, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="h-4 w-4 shrink-0 rounded-full bg-primary shadow-[0_0_10px_rgba(236,72,153,0.4)]"></span>
                    <span className="text-xl font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION: Education (ANIMATED)
         ========================================= */}
      <section className="section pt-0">
        <div className="container">
          {/* SectionHeader Used Here */}
          {markdownify("Education", "h2", "section-title")}

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-full rounded-md border border-primary p-8 shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(43,162,131,0.25)] sm:p-10"
          >
            <div className="mb-6 flex flex-col gap-6 sm:flex-row">
              {/* Ribbon/Medal Icon Box */}
              <div className="0 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border bg-primary">
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
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>

              {/* Degree Details */}
              <div className="w-full">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold ">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-lg font-medium ">
                      University of Computer Studies (Magway)
                    </p>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="mt-3 flex flex-wrap items-center gap-6 text-sm text-gray-800">
                  <span className="flex items-center gap-2">
                    <FaRegCalendar className="text-gray-800" />
                    2018 - 2025
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
                    Magway, Myanmar
                  </span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-2">
              <h4 className="mb-3 font-semibold text-white">Achievements:</h4>
              <ul className="list-inside list-disc space-y-2 text-gray-800 marker:text-primary">
                <li>
                  Web Developer Volunteer At Advanced Young Professionals
                  Association - 2020
                </li>
                <li>
                  1<sup>st</sup> runner up for Academic Award - 2022
                </li>
                <li>Winner in University Project Show like Hackathon - 2023</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Home main */}
      <section className="section  p-0">
        <div className="container">
          <div className="row items-start">
            <div className="mb-12 lg:col-8 lg:mb-0">
              {/* Featured posts */}
              {featured_posts.enable && (
                <div className="section">
                  {markdownify(featured_posts.title, "h2", "section-title")}
                  <div className="rounded border border-border p-6 dark:border-darkmode-border">
                    <div className="row">
                      <div className="md:col-6">
                        <Post post={featuredPosts[0]} />
                      </div>
                      <div className="scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border md:col-6 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark md:mt-0">
                        {featuredPosts
                          .slice(1, featuredPosts.length)
                          .map((post, i, arr) => (
                            <div
                              className={`mb-6 flex items-center pb-6 ${
                                i !== arr.length - 1 &&
                                "border-b border-border dark:border-darkmode-border"
                              }`}
                              key={`key-${i}`}
                            >
                              {post.frontmatter.image && (
                                <ImageFallback
                                  className="mr-3 h-[85px] rounded object-cover"
                                  src={post.frontmatter.image}
                                  alt={post.frontmatter.title}
                                  width={105}
                                  height={85}
                                />
                              )}
                              <div>
                                <h3 className="h5 mb-2">
                                  <Link
                                    href={`/${blog_folder}/${post.slug}`}
                                    className="block hover:text-primary"
                                  >
                                    {post.frontmatter.title}
                                  </Link>
                                </h3>
                                <p className="inline-flex items-center font-bold">
                                  <FaRegCalendar className="mr-1.5" />
                                  {dateFormat(post.frontmatter.date)}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* sidebar */}
            <Sidebar
              className={"lg:mt-[9.5rem]"}
              posts={posts}
              categories={categories}
            />
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, featured_posts, recent_posts, promotion } = frontmatter;
  const posts = getSinglePage(`content/${blog_folder}`);
  const categories = getTaxonomy(`content/${blog_folder}`, "categories");

  const categoriesWithPostsCount = categories.map((category) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.categories.includes(category)
    );
    return {
      name: category,
      posts: filteredPosts.length,
    };
  });

  return {
    props: {
      banner: banner,
      posts: posts,
      featured_posts,
      recent_posts,
      promotion,
      categories: categoriesWithPostsCount,
    },
  };
};
