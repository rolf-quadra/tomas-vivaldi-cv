"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Developer", "Designer", "Creator"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className=" space-y-3 z-20">
        <Image
          src="/images/pfp1.jpg"
          alt="Profile Picture"
          height={6000}
          width={4000}
          className="relative h-[170px] w-[170px] rounded-full mx-auto object-cover"
        ></Image>
        <div className=" flex flex-col gap-3">
          <h1 className="order-2 text-5xl lg:text-6xl font-semibold px-10">
            <span>{text}</span>
            <Cursor cursorColor="#FF0000" />
          </h1>
          <h2 className="order-1 text-sm text-gray-400 tracking-[15px]">
            Software Engineer
          </h2>

          <div className="order-3 pt-3 flex flex-col md:flex-row gap-6 flex-nowrap">
            <a href="#about">
              <button className="heroButton">About</button>
            </a>
            <a href="#experience">
              <button className="heroButton">Experience</button>
            </a>
            <a href="#skills">
              <button className="heroButton">Skills</button>
            </a>
            <a href="#project">
              <button className="heroButton">Projects</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}