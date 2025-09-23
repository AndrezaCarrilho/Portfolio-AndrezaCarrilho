"use client";

import { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfólio | Em Construção</title>
        <meta name="description" content="Portfólio em construção" />
      </Head>
      <main className="flex h-screen w-full flex-col items-center justify-center bg-gray-100 text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Portfólio em Construção </h1>
          <p className="text-lg text-gray-600">
            Estou trabalhando para trazer algo incrível em breve.
          </p>
        </motion.div>
      </main>
    </>
  );
};

export default Home;
