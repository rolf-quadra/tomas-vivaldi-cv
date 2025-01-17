"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

function Header() {
  return (
    <header className=" sticky top-0 items-start py-2 px-3 max-w-7xl mx-auto z-20 ">
      <Head>
        <title>My Page Title</title>
        <meta name="description" content="My page description." />
        <meta name="keywords" content="my, page, keywords" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="flex flex-row justify-between xl:items-center">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <SocialIcon
            className=" cursor-pointer"
            network="linkedin"
            fgColor="gray"
            bgColor="transparent"
            url="https://linkedin.com/in/tomas-vivaldi-89475619a"
          />
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className=" items-center cursor-pointer"
        >
          <SocialIcon
            className=" cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className=" uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in Touch
          </p>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
