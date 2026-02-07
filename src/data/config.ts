const config = {
  title: "Aakarsh Devulapally | Software Developer",
  description: {
    long: "Explore the portfolio of Aakarsh Devulapally, a software developer specializing in Python, AI/ML, and Full Stack Development. Skilled in Python programming, mobile application development, and web design with hands-on experience in testing and debugging to deliver high-quality software solutions.",
    short:
      "Discover the portfolio of Aakarsh Devulapally, a software developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Aakarsh Devulapally",
    "portfolio",
    "software developer",
    "Python",
    "AI",
    "Machine Learning",
    "web development",
    "Android Development",
    "Flask",
    "Django",
    "Java",
    "Kotlin",
  ],
  author: "Aakarsh Devulapally",
  email: "aakarshkashyap24@gmail.com",
  site: "https://aakarsh-portfolio.vercel.app",

  // for github stars button
  githubUsername: "AakarshKashyap",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/DAakarsh2928",
    linkedin: "https://www.linkedin.com/in/aakarsh-devulapally/",
    instagram: "https://www.instagram.com/aakarsh._.kashyap/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/AakarshKashyap",
  },
};
export { config };
