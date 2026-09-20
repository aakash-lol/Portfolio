import { ThemeToggle } from "@/components/theme-toggle";
import { GithubGraph } from "@/components/GithubGraph";
import { CurrentTime } from "@/components/CurrentTime";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ExperienceList } from "@/components/ExperienceList";
import { OpenSourceContributions } from "@/components/OpenSourceContributions";
import { BlogList } from "@/components/BlogList";
import { Highlights } from "@/components/Highlights";
import { FooterBackground } from "@/components/FooterBackground";
import { RightNavbar } from "@/components/RightNavbar";
import { CommandMenu } from "@/components/command-menu";
import Link from "next/link";
import SoftPillButton from "@/components/pixel-perfect/soft-pill-button";
import SocialHoverCard from "@/components/pixel-perfect/social-hover-card";
import { BannerParticles } from "@/components/BannerParticles";
import Image from "next/image";

import {
  SiCplusplus,
  SiDart,
  SiDocker,
  SiExpress,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGo,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSwift,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Redis", icon: SiRedis },

  { name: "Python", icon: SiPython },
  { name: "C++", icon: SiCplusplus },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Go", icon: SiGo },
  { name: "Swift", icon: SiSwift },
  { name: "Dart", icon: SiDart },

  { name: "Flutter", icon: SiFlutter },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Linux", icon: SiLinux },
];

const lightBannerPlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 11'%3E%3Crect width='32' height='11' fill='%23d9e5e7'/%3E%3C/svg%3E";

const darkBannerPlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 11'%3E%3Crect width='32' height='11' fill='%23071329'/%3E%3C/svg%3E";

export default function Home() {
  const nodes = [
    { top: "22vh", side: "left" as const },
    { top: "22vh", side: "right" as const },
    { top: "calc(22vh + 112px)", side: "left" as const },
    { top: "calc(22vh + 112px)", side: "right" as const },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white transition-colors duration-300 dark:bg-black">

      {/* Right Side Navigation */}
      <RightNavbar />

      {/* Vertical blueprint lines */}
      <div
        className="pointer-events-none absolute bottom-0 left-[30%] top-0 hidden w-0 border-r border-black/30 md:block dark:border-white/[0.15]"
        style={{
          maskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      <div
        className="pointer-events-none absolute bottom-0 right-[30%] top-0 hidden w-0 border-r border-black/30 md:block dark:border-white/[0.15]"
        style={{
          maskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      {/* Horizontal blueprint lines */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-[22vh] h-0 border-b border-black/30 dark:border-white/[0.15]"
        style={{
          maskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      <div
        className="pointer-events-none absolute left-0 right-0 top-[calc(22vh+112px)] h-0 border-b border-black/30 dark:border-white/[0.15]"
        style={{
          maskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      {/* Blueprint nodes */}
      {nodes.map((node, index) => (
        <div
          key={index}
          className="pointer-events-none absolute z-10 hidden h-[2px] w-[2px] bg-black/50 md:block dark:bg-white/[0.25]"
          style={{
            top: node.top,
            ...(node.side === "left"
              ? {
                  left: "30%",
                  transform: "translate(-50%, -50%)",
                }
              : {
                  right: "30%",
                  transform: "translate(50%, -50%)",
                }),
          }}
        />
      ))}

      {/* Banner */}
      <div className="pointer-events-auto absolute left-0 right-0 top-0 z-0 h-[22vh] overflow-hidden bg-white shadow-[0_4px_12px_rgba(2,6,23,0.04)] dark:bg-black dark:shadow-[0_4px_12px_rgba(2,6,23,0.10)] md:left-[30%] md:right-[30%]">

        <Image
          src="/ChatGPT%20Image%20May%2022%2C%202026%2C%2012_40_29%20AM.jpg"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="(min-width: 768px) 40vw, 100vw"
          quality={70}
          placeholder="blur"
          blurDataURL={lightBannerPlaceholder}
          className="object-cover object-center dark:hidden"
        />

        <Image
          src="/ChatGPT%20Image%20May%2022%2C%202026%2C%2012_49_39%20AM.jpg"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="(min-width: 768px) 40vw, 100vw"
          quality={70}
          placeholder="blur"
          blurDataURL={darkBannerPlaceholder}
          className="hidden object-cover object-center dark:block"
        />

        <BannerParticles />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-10 bg-gradient-to-t from-white/90 to-transparent dark:from-black/50 dark:to-transparent" />

        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-8 bg-gradient-to-r from-white/90 to-transparent dark:from-black/40 dark:to-transparent" />

        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-8 bg-gradient-to-l from-white/90 to-transparent dark:from-black/40 dark:to-transparent" />

        <div className="pointer-events-auto absolute bottom-3 right-2 z-10">
          <CurrentTime />
        </div>
      </div>

      {/* Profile */}
      <div className="absolute left-0 right-0 top-[22vh] z-50 flex h-[112px] items-center px-4 md:left-[30%] md:right-[30%]">
        <div className="flex w-full items-center justify-between">

          <div className="flex items-center gap-4 sm:gap-5">

<div className="relative shrink-0 rounded-[6px] border-[1.5px] border-black/30 p-[3px] sm:rounded-[8px] dark:border-white/[0.15]">
  <div className="relative h-16 w-16 overflow-hidden rounded-[3px] bg-zinc-100 sm:h-20 sm:w-20 sm:rounded-[5px] dark:bg-zinc-900">
    <Image
      src="/images.jpeg"
      alt="Aakash Tutlani"
      width={240}
      height={240}
      quality={90}
      priority
      sizes="(min-width: 640px) 120px, 96px"
      className="h-full w-full origin-center translate-y-1 scale-[1.1] object-cover"
    />
  </div>
</div>

            <div className="flex flex-col justify-center pt-8">
              <h1 className="mb-0.5 text-[20px] font-bold leading-none tracking-tight text-zinc-800 [text-shadow:-1.5px_0_0_rgba(0,200,255,0.3),1.5px_0_0_rgba(255,80,0,0.3)] sm:text-[24px] dark:text-zinc-100 dark:[text-shadow:-1.5px_0_0_rgba(0,200,255,0.6),1.5px_0_0_rgba(255,80,0,0.6)]">
                Aakash Tutlani
              </h1>

              <p className="text-[13px] text-zinc-500 sm:text-[14px] dark:text-zinc-400">
                19
              </p>
            </div>

          </div>

          <div className="flex h-20 items-start justify-end gap-2 py-1 sm:h-24 sm:gap-3">
            <CommandMenu />
            <ThemeToggle className="dark:text-zinc-400 dark:hover:text-zinc-300" />
          </div>

        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 ml-0 mr-0 flex min-h-screen flex-col px-4 pb-0 pt-[calc(22vh+112px)] md:ml-[30%] md:mr-[30%]">

        {/* Intro */}
        <p className="mt-4 text-[14px] leading-relaxed text-zinc-600 sm:text-[15px] dark:text-zinc-300">
          Software developer building full-stack applications, AI systems,
          backend services, and mobile experiences.
        </p>

        <ul className="mt-4 pl-4 text-[14px] leading-relaxed text-zinc-600 sm:text-[15px] dark:text-zinc-300">
          <li className="flex gap-1.5">
            <span>•</span>
            <span>
              I build with React, Node.js, Python, C++, Go, Flutter, and Swift.
            </span>
          </li>

          <li className="flex gap-1.5">
            <span>•</span>
            <span>
              Interested in AI engineering, backend systems, open source, and
              building real products.
            </span>
          </li>

          <li className="flex gap-1.5">
            <span>•</span>
            <span>
              Currently working as a Software Developer at{" "}
              <span className="font-semibold text-zinc-900 dark:text-white">
                Hillborn AI Technologies
              </span>
              .
            </span>
          </li>
        </ul>

        {/* Contact */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Link href="/contact">
            <SoftPillButton
              as="span"
              variant="secondary"
              className="px-3 py-1.5 !text-[12px]"
            >
              <div className="flex items-center gap-1.5 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>

                Send an email
              </div>
            </SoftPillButton>
          </Link>
        </div>

        {/* Socials */}
        <section id="contact" className="mt-6 scroll-mt-24">
          <h2 className="mb-2 text-[14px] text-zinc-500">
            Here are my{" "}
            <span className="font-medium text-zinc-800 dark:text-zinc-200">
              socials
            </span>
          </h2>

          <div className="flex flex-wrap gap-1.5">

            <SocialHoverCard socialName="GitHub">
              <SoftPillButton
                as="a"
                href="https://github.com/aakash-lol"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="px-3 py-1.5 !text-[12px]"
              >
                <div className="flex items-center gap-1.5 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                  <SiGithub className="h-3.5 w-3.5" />
                  GitHub
                </div>
              </SoftPillButton>
            </SocialHoverCard>

            <SocialHoverCard socialName="LinkedIn">
              <SoftPillButton
                as="a"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="px-3 py-1.5 !text-[12px]"
              >
                <div className="flex items-center gap-1.5 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                  LinkedIn
                </div>
              </SoftPillButton>
            </SocialHoverCard>

            <SocialHoverCard socialName="X">
              <SoftPillButton
                as="a"
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="px-3 py-1.5 !text-[12px]"
              >
                <div className="flex items-center gap-1.5 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                  X
                </div>
              </SoftPillButton>
            </SocialHoverCard>

          </div>
        </section>

        {/* Experiences */}
        <section
          id="experience"
          className="relative z-10 mt-6 flex scroll-mt-24 flex-col"
        >
          <div
            className="pointer-events-none absolute left-[-100vw] right-[-100vw] top-0 h-0 border-t border-black/30 dark:border-white/[0.15]"
            style={{
              maskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />

          <div className="relative py-2">
            <h2 className="text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Experiences
            </h2>

            <div
              className="pointer-events-none absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15]"
              style={{
                maskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                WebkitMaskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              }}
            />
          </div>

          <div className="block">
            <ExperienceList />

            <div className="relative mt-0 flex justify-center rounded-b-lg px-4 py-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/20">
              <Link href="/experience" className="relative block group">
                <div className="absolute -inset-[5px] rounded-[11px] border border-black/5 transition-colors duration-300 group-hover:border-black/10 dark:border-white/5 dark:group-hover:border-white/10" />

                <div className="relative flex items-center gap-1.5 rounded-[6px] border border-black/5 bg-zinc-50 px-4 py-2 text-[13px] font-medium text-zinc-600 shadow-sm transition-all duration-300 hover:bg-zinc-100 hover:text-zinc-900 dark:border-white/5 dark:bg-[#09090b] dark:text-zinc-400 dark:shadow-lg dark:shadow-black/80 dark:hover:bg-[#121214] dark:hover:text-zinc-100">
                  View All

                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-zinc-500 transition-colors group-hover:text-zinc-900 dark:group-hover:text-zinc-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="relative z-10 mt-0 flex scroll-mt-24 flex-col"
        >
          <div className="relative mt-1 py-2">
            <h2 className="text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Projects
            </h2>

            <div
              className="pointer-events-none absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15]"
              style={{
                maskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                WebkitMaskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              }}
            />
          </div>

          <div className="relative px-4 pb-12 pt-6">
            <div
              className="pointer-events-none absolute bottom-6 left-1/2 top-0 hidden w-0 -translate-x-1/2 border-r border-black/30 md:block dark:border-white/[0.15]"
              style={{
                maskImage:
                  "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
                WebkitMaskImage:
                  "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
              }}
            />

            <ProjectsGrid />

            <div
              className="pointer-events-none absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15]"
              style={{
                maskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                WebkitMaskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              }}
            />
          </div>

          <div className="relative z-20 -mt-[19px] flex justify-center pb-0">
            <Link href="/projects" className="relative block group">
              <div className="absolute -inset-[5px] rounded-[11px] border border-black/5 transition-colors duration-300 group-hover:border-black/10 dark:border-white/5 dark:group-hover:border-white/10" />

              <div className="relative flex items-center gap-1.5 rounded-[6px] border border-black/5 bg-zinc-50 px-4 py-2 text-[13px] font-medium text-zinc-600 shadow-sm transition-all duration-300 hover:bg-zinc-100 hover:text-zinc-900 dark:border-white/5 dark:bg-[#09090b] dark:text-zinc-400 dark:shadow-lg dark:shadow-black/80 dark:hover:bg-[#121214] dark:hover:text-zinc-100">
                View All

                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-zinc-500 transition-colors group-hover:text-zinc-900 dark:group-hover:text-zinc-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </Link>
          </div>
        </section>

        {/* GitHub */}
        <GithubGraph />

        {/* Open Source */}
        {/* <section id="opensource" className="scroll-mt-24">
          <OpenSourceContributions />
        </section> */}

        {/* Skills */}
        <section
          id="skills"
          className="relative z-10 mt-6 flex scroll-mt-24 flex-col"
        >
          <div
            className="pointer-events-none absolute left-[-100vw] right-[-100vw] top-0 h-0 border-t border-black/30 dark:border-white/[0.15]"
            style={{
              maskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />

          <div className="relative mt-1 py-2">
            <h2 className="text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Skills & Technologies
            </h2>

            <div
              className="pointer-events-none absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15]"
              style={{
                maskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                WebkitMaskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              }}
            />
          </div>

          <div className="relative px-0 pb-2 pt-6">
            <div className="flex w-full flex-wrap gap-2">
              {skills.map((skill) => {
                const SkillIcon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="flex grow cursor-default items-center justify-center gap-2 rounded-[6px] border border-black/30 bg-zinc-50 px-3 py-1.5 transition-colors duration-200 hover:bg-zinc-100 dark:border-white/[0.15] dark:bg-[#0a0a0a] dark:hover:bg-[#121214]"
                  >
                    <SkillIcon
                      aria-hidden="true"
                      className="h-3.5 w-3.5 shrink-0 text-zinc-500 opacity-80"
                    />

                    <span className="text-[13px] font-medium text-zinc-600 dark:text-zinc-400">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Blogs */}
        <section
          id="blogs"
          className="relative mt-6 flex scroll-mt-24 flex-col"
        >
          <div
            className="pointer-events-none absolute left-[-100vw] right-[-100vw] top-0 h-0 border-t border-black/30 dark:border-white/[0.15]"
            style={{
              maskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />

          <div className="relative mt-1 py-2">
            <h2 className="text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Blogs
            </h2>

            <div
              className="pointer-events-none absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15]"
              style={{
                maskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                WebkitMaskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              }}
            />
          </div>

          <BlogList />

          <div className="relative mt-0 flex justify-center rounded-b-lg px-4 py-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/20">
            <Link href="/" className="relative block group">
              <div className="absolute -inset-[5px] rounded-[11px] border border-black/5 transition-colors duration-300 group-hover:border-black/10 dark:border-white/5 dark:group-hover:border-white/10" />

              <div className="relative flex items-center gap-1.5 rounded-[6px] border border-black/5 bg-zinc-50 px-4 py-2 text-[13px] font-medium text-zinc-600 shadow-sm transition-all duration-300 hover:bg-zinc-100 hover:text-zinc-900 dark:border-white/5 dark:bg-[#09090b] dark:text-zinc-400 dark:shadow-lg dark:shadow-black/80 dark:hover:bg-[#121214] dark:hover:text-zinc-100">
                View All

                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-zinc-500 transition-colors group-hover:text-zinc-900 dark:group-hover:text-zinc-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </Link>
          </div>
        </section>

        {/* Highlights */}
        {/* <section
          id="highlights"
          className="relative z-10 mt-6 flex scroll-mt-24 flex-col"
        >
          <div
            className="pointer-events-none absolute left-[-100vw] right-[-100vw] top-0 h-0 border-t border-black/30 dark:border-white/[0.15]"
            style={{
              maskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />

          <div className="relative mt-1 py-2">
            <h2 className="text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Highlights
            </h2>

            <div
              className="pointer-events-none absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15]"
              style={{
                maskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                WebkitMaskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              }}
            />
          </div>

          <Highlights />

          <div className="relative mt-2 flex justify-center rounded-b-lg px-4 py-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/20">
            <Link href="/highlights" className="relative block group">
              <div className="absolute -inset-[5px] rounded-[11px] border border-black/5 transition-colors duration-300 group-hover:border-black/10 dark:border-white/5 dark:group-hover:border-white/10" />

              <div className="relative flex items-center gap-1.5 rounded-[6px] border border-black/5 bg-zinc-50 px-4 py-2 text-[13px] font-medium text-zinc-600 shadow-sm transition-all duration-300 hover:bg-zinc-100 hover:text-zinc-900 dark:border-white/5 dark:bg-[#09090b] dark:text-zinc-400 dark:shadow-lg dark:shadow-black/80 dark:hover:bg-[#121214] dark:hover:text-zinc-100">
                View All

                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-zinc-500 transition-colors group-hover:text-zinc-900 dark:group-hover:text-zinc-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </Link>
          </div>
        </section> */}

        {/* Quote */}
        <div className="relative mt-2 flex flex-col items-center justify-center py-6">
          <div className="flex w-full max-w-[480px] flex-col items-center">
            <h3 className="mb-6 text-center text-[16px] font-medium italic leading-relaxed text-zinc-500 dark:text-zinc-400">
              "Build things. Break things. Learn from them. Then ship again."
            </h3>

            <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
              <div className="h-[1px] w-4 bg-zinc-200 dark:bg-zinc-800" />

              aakash tutlani

              <div className="h-[1px] w-4 bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>
        </div>

        {/* Footer background */}
        <div className="relative mt-4 h-[300px] w-[calc(100%+32px)] flex-grow -mx-4">
          <div
            className="pointer-events-none absolute left-[-100vw] right-[-100vw] top-0 z-10 h-0 border-t border-black/30 dark:border-white/[0.15]"
            style={{
              maskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-[2px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-[2px] w-[2px] translate-x-1/2 -translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />

          <FooterBackground />
        </div>

      </main>
    </div>
  );
}