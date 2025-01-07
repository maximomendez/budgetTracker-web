import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //ENABLED PROXY TO GET COOKIE IN THE NAVIGATOR IN DEV MODE
  async rewrites() {
    return [
      {
        source: '/graphql', // Ruta del frontend que deseas interceptar
        destination: 'http://localhost:4000/', // URL del backend
      },
    ];
  },
};

export default nextConfig;
