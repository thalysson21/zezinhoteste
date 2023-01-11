/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: "/webmail",
        destination: "http://webmail.isn.istv.com.br/",
        permanent: true,
      },
    ];
  },
  reactStrictMode: false,
  images: {
    domains: [
      "p2.trrsf.com",
      "secure.gravatar.com",
      "agenciabrasil.ebc.com.br",
      "www.cnnbrasil.com.br",
      "cdn.discordapp.com",
      "isnportal.com.br",
      "s3.istvplay.com.br",
      "blogzine.webestica.com",
      "s3.isnportal.com.br",
      "i0.wp.com",
    ],
  },
};
