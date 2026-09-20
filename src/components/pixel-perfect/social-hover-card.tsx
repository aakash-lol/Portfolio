"use client";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as HoverCard from "@radix-ui/react-hover-card";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image, { getImageProps } from "next/image";
import lightBannerImage from "../../../public/ChatGPT Image May 22, 2026, 12_40_29 AM.jpg";
import darkBannerImage from "../../../public/ChatGPT Image May 22, 2026, 12_49_39 AM.jpg";

const bannerImageProps = {
  width: 250,
  height: 64,
  quality: 70,
  sizes: "250px",
} as const;

const lightBannerPreload = getImageProps({
  ...bannerImageProps,
  alt: "",
  src: lightBannerImage,
}).props;

const darkBannerPreload = getImageProps({
  ...bannerImageProps,
  alt: "",
  src: darkBannerImage,
}).props;

interface SocialProfile {
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  location: string;
  banner?: boolean;
  stats: {
    label: string;
    value: string | number;
  }[];
}

const socialProfiles: Record<string, SocialProfile> = {
  GitHub: {
    name: "Aakash Tutlani",
    handle: "aakash-lol",
    avatar: "/images.jpeg",
    bio: "19 • Full Stack AI Developer • Building real products.",
    location: "India (UTC +05:30)",
    stats: [],
  },

  X: {
    name: "Aakash Tutlani",
    handle: "@aakash-lol",
    avatar: "/images.jpeg",
    banner: true,
    bio: "19 • Full Stack AI Developer • Building with React, Node.js, Python, C++, Go & Flutter.",
    location: "India (UTC +05:30)",
    stats: [],
  },

  LinkedIn: {
    name: "Aakash Tutlani",
    handle: "in/aakash-tutlani",
    avatar: "/images.jpeg",
    banner: true,
    bio: "Software developer building full-stack applications, AI systems, backend services, and mobile experiences.",
    location: "India",
    stats: [],
  },
};

interface SocialHoverCardProps {
  socialName: string;
  children: React.ReactNode;
}

export default function SocialHoverCard({
  socialName,
  children,
}: SocialHoverCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const profile = socialProfiles[socialName];

  // If there's no profile configuration for this social name,
  // just render the child as-is.
  if (!profile) {
    return <>{children}</>;
  }

  if (profile.banner) {
    ReactDOM.preload(lightBannerPreload.src, {
      as: "image",
      imageSrcSet: lightBannerPreload.srcSet,
      imageSizes: lightBannerPreload.sizes,
    });

    ReactDOM.preload(darkBannerPreload.src, {
      as: "image",
      imageSrcSet: darkBannerPreload.srcSet,
      imageSizes: darkBannerPreload.sizes,
    });
  }

  return (
    <HoverCard.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      openDelay={80}
      closeDelay={120}
    >
      <HoverCard.Trigger asChild>
        <span className="inline-block">{children}</span>
      </HoverCard.Trigger>

      <AnimatePresence>
        {isOpen && (
          <HoverCard.Portal forceMount>
            <HoverCard.Content
              asChild
              forceMount
              side="bottom"
              align="center"
              sideOffset={8}
              className="z-50 select-none outline-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 4, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 3, scale: 0.985 }}
                transition={{
                  duration: 0.22,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                  "w-[230px] overflow-hidden rounded-xl shadow-2xl backdrop-blur-md sm:w-[250px]",
                  "border border-black/5 bg-white/95 dark:border-white/5 dark:bg-[#0c0c0e]/95",
                  "select-none text-zinc-900 dark:text-zinc-100"
                )}
              >
                {socialName === "GitHub" ? (
                  /* GitHub flat layout */
                  <div className="p-4">
                    {/* Avatar + Name */}
                    <div className="flex items-center gap-3">
                      <div className="relative shrink-0">
                        <div className="h-12 w-12 overflow-hidden rounded-full border border-black/5 bg-zinc-100 dark:border-white/10 dark:bg-zinc-900">
                          <Image
                            src={profile.avatar}
                            alt={profile.name}
                            width={48}
                            height={48}
                            loading="eager"
                            decoding="async"
                            quality={90}
                            sizes="48px"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex min-w-0 flex-col">
                        <h3 className="truncate text-[13.5px] font-bold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50">
                          {profile.name}
                        </h3>

                        <span className="mt-0.5 font-mono text-[11.5px] leading-none text-zinc-400 dark:text-zinc-500">
                          {profile.handle}
                        </span>
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="mt-3">
                      <p className="text-[12px] leading-relaxed text-zinc-800 dark:text-zinc-300">
                        {profile.bio}
                      </p>
                    </div>

                    {/* Location */}
                    {profile.location && (
                      <div className="mt-2.5 flex items-center gap-1.5">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 shrink-0 text-zinc-400 dark:text-zinc-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>

                        <span className="text-[10.5px] text-zinc-400 dark:text-zinc-500">
                          {profile.location}
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  /* X / LinkedIn banner layout */
                  <>
                    {/* Banner */}
                    {profile.banner ? (
                      <div className="relative h-[64px] w-full overflow-hidden bg-[#d9e5e7] dark:bg-[#071329]">
                        <Image
                          {...bannerImageProps}
                          src={lightBannerImage}
                          alt=""
                          placeholder="blur"
                          loading="eager"
                          className="h-full w-full object-cover object-center dark:hidden"
                        />

                        <Image
                          {...bannerImageProps}
                          src={darkBannerImage}
                          alt=""
                          placeholder="blur"
                          loading="eager"
                          className="hidden h-full w-full object-cover object-center dark:block"
                        />
                      </div>
                    ) : (
                      <div className="relative h-[36px] w-full border-b border-black/5 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:border-white/5 dark:from-zinc-900 dark:to-zinc-950" />
                    )}

                    {/* Card Content */}
                    <div className="p-3.5 pt-0">
                      {/* Avatar */}
                      <div className="relative mb-1.5 h-9">
                        <div
                          className={cn(
                            "absolute -top-7 left-0 shrink-0 overflow-hidden rounded-full border-2 bg-zinc-100 shadow-sm dark:bg-zinc-900",
                            profile.banner
                              ? "h-14 w-14 border-white dark:border-[#0c0c0e]"
                              : "h-12 w-12 -top-4 border-black/5 dark:border-white/10"
                          )}
                        >
                          <Image
                            src={profile.avatar}
                            alt={profile.name}
                            width={56}
                            height={56}
                            loading="eager"
                            decoding="async"
                            quality={90}
                            sizes="56px"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Name */}
                      <div className="flex min-w-0 flex-col">
                        <div className="flex items-center gap-1.5">
                          <h3 className="truncate text-[13.5px] font-extrabold leading-none tracking-tight text-zinc-900 dark:text-zinc-50">
                            {profile.name}
                          </h3>

                          {/* X badge */}
                          {socialName === "X" && (
                            <svg
                              viewBox="0 0 24 24"
                              className="h-[13px] w-[13px] shrink-0 fill-current text-zinc-900 dark:text-zinc-100"
                              aria-hidden="true"
                            >
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.681l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                            </svg>
                          )}
                        </div>

                        <span className="mt-0.5 font-mono text-[10.5px] leading-none text-zinc-400 dark:text-zinc-500">
                          {profile.handle}
                        </span>
                      </div>

                      {/* Bio */}
                      <div className="mt-2.5">
                        <p className="font-sans text-[12px] leading-[16px] text-zinc-600 dark:text-zinc-300">
                          {profile.bio}
                        </p>
                      </div>

                      {/* Location */}
                      {profile.location && (
                        <div className="mt-2 flex items-center gap-1">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-2.5 w-2.5 shrink-0 text-zinc-400 dark:text-zinc-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>

                          <span className="text-[10.5px] text-zinc-400 dark:text-zinc-500">
                            {profile.location}
                          </span>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            </HoverCard.Content>
          </HoverCard.Portal>
        )}
      </AnimatePresence>
    </HoverCard.Root>
  );
}