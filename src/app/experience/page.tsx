"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { CommandMenu } from "@/components/command-menu";
import { RightNavbar } from "@/components/RightNavbar";
import { FooterBackground } from "@/components/FooterBackground";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

type ExperienceData = {
  title: string;
  role: string;
  dates: string;
  location: string;
  src: string;
  type?: string;
  imageFit?: "contain" | "cover";
  imageZoom?: number;
  description: string;
  tech: string[];
  metrics?: { label: string; value: string }[];
  screenshot?: string;
};

const experiences: ExperienceData[] = [
  {
    title: "Hillborn AI Technologies",
    role: "Software Developer",
    dates: "Jun 2026 - Present",
    location: "Remote",
    src: "/Experience-image/HB.png",
    imageFit: "contain",
    imageZoom: 1,
    description: `
      Build and ship full-stack applications using React, Node.js, MongoDB, and Go, owning frontend development, backend services, REST APIs, and database integrations
      Develop native iOS applications with Swift and cross-platform mobile applications using Flutter
      Design and integrate backend APIs and database-driven features for production applications
      Debug production issues and improve application performance, reliability, and maintainability
      Work across frontend, backend, mobile, and infrastructure concerns to deliver complete product features
    `,
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Go",
      "REST APIs",
      "Swift",
      "Flutter",
      "Dart",
    ],
    metrics: [
      { label: "Role", value: "Developer" },
      { label: "Stack", value: "Full Stack" },
      { label: "Mobile", value: "iOS + Flutter" },
      { label: "Status", value: "Present" },
    ],
  },

  {
    title: "Stealth Startup",
    role: "AI Engineering Intern",
    dates: "May 2026 - Jul 2026",
    location: "Remote",
    src: "/Experience-image/AI.png",
    imageFit: "contain",
    imageZoom: 1,
    description: `
      Built production RAG pipelines in Python using embeddings, vector search, and LLM APIs
      Developed evaluation pipelines for retrieval quality, answer relevance, and hallucination detection
      Built backend services with FastAPI and Docker for AI-powered production workflows
      Optimized chunking, caching, and retrieval strategies to improve RAG pipeline performance
      Reduced system latency by approximately 30% through retrieval and pipeline optimizations
    `,
    tech: [
      "Python",
      "RAG",
      "Embeddings",
      "Vector Search",
      "LLM APIs",
      "FastAPI",
      "Docker",
    ],
    metrics: [
      { label: "Latency Reduction", value: "30%" },
      { label: "Focus", value: "RAG" },
      { label: "Backend", value: "FastAPI" },
      { label: "Environment", value: "Production" },
    ],
  },

  {
    title: "Tech Internship Program",
    role: "Python Development Intern",
    dates: "Jan 2025 - Apr 2025",
    location: "Remote",
    src: "/Experience-image/N.png",
    imageFit: "contain",
    imageZoom: 1,
    description: `
      Developed Python automation workflows for repetitive development and data-processing tasks
      Built and integrated REST APIs for backend services and application workflows
      Developed Flask services and JSON APIs for backend functionality
      Worked on backend data processing, debugging, and testing
      Used Git-based development workflows while maintaining and improving existing code
    `,
    tech: [
      "Python",
      "Flask",
      "REST APIs",
      "JSON",
      "Automation",
      "Git",
    ],
    metrics: [
      { label: "Role", value: "Python Intern" },
      { label: "Backend", value: "Flask" },
      { label: "Focus", value: "Automation" },
      { label: "Status", value: "Completed" },
    ],
  },

  {
    title: "Educational Learning Center",
    role: "Teaching Assistant - C++ & DSA",
    dates: "Oct 2024 - Apr 2025",
    location: "Delhi, India",
    src: "/Experience-image/CB.png",
    imageFit: "contain",
    imageZoom: 1,
    description: `
      Mentored students in C++, data structures, algorithms, and problem solving
      Helped students develop algorithmic intuition and understand complex programming concepts
      Assisted with debugging code and identifying logical and implementation errors
      Guided students through interview-oriented data structures and algorithm problems
      Supported learners in building stronger programming fundamentals through practical problem solving
    `,
    tech: [
      "C++",
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "Debugging",
    ],
    metrics: [
      { label: "Subject", value: "C++ & DSA" },
      { label: "Role", value: "Teaching Assistant" },
      { label: "Format", value: "Mentoring" },
      { label: "Status", value: "Completed" },
    ],
  },

  {
    title: "Open Source",
    role: "Open Source Contributor",
    dates: "2025 - Present",
    location: "Remote",
    src: "/Experience-image/pngegg (1).png",
    imageFit: "contain",
    imageZoom: 1.5,
    description: `
      Contribute bug fixes, features, documentation, testing improvements, and code reviews across open source projects
      Work with unfamiliar codebases and Git workflows while maintaining readable and maintainable implementations
      Contribute to developer infrastructure, AI, backend, and systems-oriented projects
      Collaborate with maintainers and contributors through issues, pull requests, reviews, and technical discussions
    `,
    tech: [
      "GitHub",
      "C++",
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Git",
    ],
    metrics: [
      { label: "Focus", value: "Open Source" },
      { label: "Languages", value: "C++ / Python / JS" },
      { label: "Since", value: "2025" },
      { label: "Status", value: "Present" },
    ],
  },
];

export default function AllExperiencePage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const selectExperience = (experienceIndex: number) => {
    setOpenIdx(experienceIndex);

    window.requestAnimationFrame(() => {
      document
        .getElementById(`experience-${experienceIndex}`)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    });
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black relative overflow-x-hidden transition-colors duration-300 [--experience-hero:clamp(320px,38vh,370px)]">
      {/* Right Side Blueprint Navigation */}
      <RightNavbar />

      {/* Vertical Lines - Ultra-fine Micro Dots */}
      <div
        className="absolute top-0 bottom-0 left-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block"
        style={{
          maskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      <div
        className="absolute top-0 bottom-0 right-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block"
        style={{
          maskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      {/* Horizontal Lines - Ultra-fine Micro Dots */}
      <div
        className="absolute left-0 right-0 top-[var(--experience-hero)] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
        style={{
          maskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      <div
        className="absolute left-0 right-0 top-[calc(var(--experience-hero)+112px)] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
        style={{
          maskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      {/* Ultra-Tiny Solid Nodes */}
      {[
        { top: "var(--experience-hero)", left: "30%" },
        { top: "var(--experience-hero)", right: "30%" },
        {
          top: "calc(var(--experience-hero) + 112px)",
          left: "30%",
        },
        {
          top: "calc(var(--experience-hero) + 112px)",
          right: "30%",
        },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            transform: `translate(${
              pos.right ? "50%" : "-50%"
            }, -50%)`,
          }}
        />
      ))}

      {/* Cell 1: Experience Timeline */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-0 h-[var(--experience-hero)] -z-0 pointer-events-auto overflow-hidden">
        <FooterBackground />
      </div>

      {/* Cell 2: Header with Back Button + Title + Controls */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-[var(--experience-hero)] h-[112px] flex items-center px-4 z-50">
        <div className="flex w-full items-center justify-between">
          {/* Left: Back + Title */}
          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="group flex items-center justify-center w-8 h-8 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            </Link>

            <div className="flex flex-col justify-center">
              <h1 className="text-[20px] sm:text-[24px] font-bold text-zinc-800 dark:text-zinc-100 tracking-tight leading-none mb-0.5 [text-shadow:-1.5px_0_0_rgba(0,200,255,0.3),1.5px_0_0_rgba(255,80,0,0.3)] dark:[text-shadow:-1.5px_0_0_rgba(0,200,255,0.6),1.5px_0_0_rgba(255,80,0,0.6)]">
                All Experiences
              </h1>

              <p className="text-[12px] text-zinc-500 dark:text-zinc-400">
                Full Experience Archive
              </p>
            </div>
          </div>

          {/* Right: Controls */}
          <div className="flex items-start justify-end gap-2 sm:gap-3 h-20 sm:h-24 py-1">
            <CommandMenu />
            <ThemeToggle className="dark:text-zinc-400 hover:dark:text-zinc-300" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="pointer-events-none ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[calc(var(--experience-hero)+112px)] pb-16 px-4 flex flex-col z-10 relative">
        <div className="pointer-events-auto relative pt-0 pb-6">
          {/* Experience Items */}
          <div className="flex flex-col relative z-10 w-full">
            {experiences.map((item, idx) => {
              const isOpen = openIdx === idx;
              const isLast = idx === experiences.length - 1;

              return (
                <div
                  key={idx}
                  id={`experience-${idx}`}
                  className="group relative scroll-mt-6"
                >
                  {/* Dashed bottom border */}
                  <div
                    className={`absolute bottom-0 ${
                      isLast
                        ? "left-[-100vw] right-[-100vw]"
                        : "left-[-16px] right-[-16px]"
                    } h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none z-10`}
                    style={{
                      maskImage:
                        "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                      WebkitMaskImage:
                        "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                    }}
                  />

                  {/* Intersection dots for last item */}
                  {isLast && (
                    <>
                      <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
                      <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
                    </>
                  )}

                  <div
                    className="flex flex-col items-start gap-2.5 py-3.5 px-4 -mx-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-colors cursor-pointer relative z-20 rounded-lg sm:gap-3 sm:py-4 2xl:flex-row 2xl:items-center 2xl:justify-between"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                  >
                    <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4">
                      <div className="size-10 shrink-0 rounded-[10px] border border-black/10 bg-zinc-50 p-[2px] shadow-sm shadow-black/15 dark:border-zinc-800 dark:bg-[#111111] dark:shadow-md dark:shadow-black/50">
                        <div className="w-full h-full rounded-[7px] border border-black/5 dark:border-black/20 bg-white flex items-center justify-center overflow-hidden relative">
                          <Image
                            src={item.src}
                            alt={item.title}
                            width={40}
                            height={40}
                            sizes="40px"
                            quality={60}
                            style={
                              item.imageZoom
                                ? {
                                    transform: `scale(${item.imageZoom})`,
                                  }
                                : undefined
                            }
                            className={`${
                              item.imageFit === "contain"
                                ? "object-contain"
                                : "object-cover"
                            } w-full h-full p-0.5`}
                          />
                        </div>
                      </div>

                      <div className="flex min-w-0 flex-col gap-0.5 pr-2 sm:pr-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[14px] font-bold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-[17px]">
                            {item.title}
                          </span>

                          {item.type && (
                            <span className="self-center whitespace-nowrap px-1.5 py-[1px] rounded-[4px] text-[11px] font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-300/50 dark:border-zinc-700/50">
                              {item.type}
                            </span>
                          )}
                        </div>

                        <span className="truncate text-[14px] text-zinc-600 dark:text-zinc-400 sm:text-[15px]">
                          {item.role}
                        </span>
                      </div>
                    </div>

                    <div className="flex shrink-0 flex-col items-start gap-0.5 pr-5 pl-[52px] text-left sm:pl-[56px] 2xl:items-end 2xl:pl-0 2xl:text-right">
                      <div className="relative flex items-center text-[13px] font-medium text-zinc-900 dark:text-zinc-100 sm:text-[14px]">
                        <span>{item.dates}</span>

                        <svg
                          viewBox="0 0 24 24"
                          className={`w-3.5 h-3.5 text-zinc-500 absolute -right-5 top-1/2 -translate-y-1/2 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>

                      <span className="text-[13px] text-zinc-500 dark:text-zinc-400 sm:text-[14px]">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Expandable Details Section */}
                  <div
                    className={`-mx-4 grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`${
                          isOpen
                            ? "pb-4 pt-0 opacity-100 translate-y-0"
                            : "pb-0 pt-0 opacity-0 -translate-y-2"
                        } transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] pl-6 pr-8 text-[14px] text-zinc-600 dark:text-zinc-400`}
                      >
                        {item.metrics && (
                          <div className="relative -ml-6 -mr-8 mb-4">
                            <div className="grid max-w-full grid-cols-2 pl-6 pr-8 2xl:grid-cols-4">
                              {item.metrics.map((metric) => (
                                <div
                                  key={metric.label}
                                  className="relative min-w-0 px-3 py-2 after:absolute after:bottom-0 after:right-0 after:top-0 after:w-0 after:border-r after:border-black/30 after:[mask-image:repeating-linear-gradient(to_bottom,black_0,black_1px,transparent_1px,transparent_6px)] dark:after:border-white/[0.15] [&:nth-child(2n)]:after:hidden 2xl:[&:not(:last-child)]:after:block 2xl:[&:last-child]:after:hidden"
                                >
                                  <p
                                    className={`${
                                      metric.value.includes(" - ")
                                        ? "text-[13px]"
                                        : "text-[16px]"
                                    } whitespace-nowrap font-bold leading-none text-zinc-900 dark:text-zinc-100`}
                                  >
                                    {metric.value}
                                  </p>

                                  <p className="mt-1 text-[10px] font-medium uppercase text-zinc-400 dark:text-zinc-600">
                                    {metric.label}
                                  </p>
                                </div>
                              ))}
                            </div>

                            <span
                              className="pointer-events-none absolute inset-x-0 top-0 h-0 border-t border-black/30 dark:border-white/[0.15]"
                              style={{
                                maskImage:
                                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                                WebkitMaskImage:
                                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                              }}
                            />

                            <span
                              className="pointer-events-none absolute inset-x-0 top-1/2 h-0 border-t border-black/30 dark:border-white/[0.15] 2xl:hidden"
                              style={{
                                maskImage:
                                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                                WebkitMaskImage:
                                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                              }}
                            />

                            <span
                              className="pointer-events-none absolute inset-x-0 bottom-0 h-0 border-b border-black/30 dark:border-white/[0.15]"
                              style={{
                                maskImage:
                                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                                WebkitMaskImage:
                                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                              }}
                            />

                            <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
                            <span className="pointer-events-none absolute right-0 top-0 h-[2px] w-[2px] translate-x-1/2 -translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
                            <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-[2px] -translate-x-1/2 translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
                            <span className="pointer-events-none absolute bottom-0 right-0 h-[2px] w-[2px] translate-x-1/2 translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
                          </div>
                        )}

                        {isOpen && item.screenshot && (
                          <div className="relative mb-4 overflow-hidden bg-black">
                            <Image
                              src={item.screenshot}
                              alt={`${item.title} analytics screenshot`}
                              width={1400}
                              height={1050}
                              sizes="(min-width: 768px) 40vw, calc(100vw - 3rem)"
                              quality={70}
                              className="h-auto w-full object-cover"
                            />
                          </div>
                        )}

                        <ul className="mb-4 space-y-2 text-[13px] leading-relaxed">
                          {item.description
                            .split("\n")
                            .filter((line) => line.trim() !== "")
                            .map((point, i) => {
                              const [label, ...detail] =
                                point.trim().split(":");

                              return (
                                <li
                                  key={i}
                                  className="flex items-start gap-1.5"
                                >
                                  <span className="text-zinc-400 dark:text-zinc-500 mt-[2px] text-[14px] leading-none">
                                    •
                                  </span>

                                  <span>
                                    {detail.length > 0 ? (
                                      <>
                                        <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                                          {label}:
                                        </strong>{" "}
                                        {detail.join(":")}
                                      </>
                                    ) : (
                                      point.trim()
                                    )}
                                  </span>
                                </li>
                              );
                            })}
                        </ul>

                        {item.tech && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {item.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 rounded-[4px] border border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-50 dark:bg-[#111111] text-[11px] font-medium text-zinc-500 dark:text-zinc-400"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Separator */}
        <div className="relative mt-8">
          <div
            className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />

          <div className="absolute -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />

          <div className="absolute -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
        </div>
      </div>
    </div>
  );
}