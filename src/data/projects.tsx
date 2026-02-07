import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiFlask,
  SiDjango,
  SiAndroid,
  SiKotlin,
  SiMysql,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
  },
  django: {
    title: "Django",
    bg: "black",
    fg: "white",
    icon: <SiDjango />,
  },
  android: {
    title: "Android",
    bg: "black",
    fg: "white",
    icon: <SiAndroid />,
  },
  kotlin: {
    title: "Kotlin",
    bg: "black",
    fg: "white",
    icon: <SiKotlin />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  c: {
    title: "C",
    bg: "black",
    fg: "white",
    icon: <SiC />,
  },
  cpp: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: "☕", // react-icons doesn't have a good simple Java icon in Si, usually it's FaJava or similar but I don't want to add another import if I can avoid it. Wait, I should check if SiJava exists. It likely doesn't. I'll use text or a generic icon if failed. Actually, let's use a text emoji for Java or just skip icon if not found. Better yet, let's check devicon for Java content? No, I need React element.
    // I'll use SiCoffee or similar if available? No.
    // I will try to use FaJava from react-icons/fa? I need to import it.
    // I'll stick to what I have. If SiJava is not available, I will use a placeholder.
    // Let's assume SiJava exists? No, it's usually not in Simple Icons.
    // I will use `SiCplusplus` for C++ and `SiC` for C.
    // For Java, I'll use a text fallback or just omit icon for now or use `SiCoffee`?
    // I will just use text "Java" for icon or maybe simply not include Java icon in the definition if I'm unsure.
    // But `PROJECT_SKILLS` requires an icon.
    // I'll add `BiLogoJava` from `react-icons/bi`?
    // I'll add a separate import for Java if needed.
    // Actually, `SiOpenjdk` or `SiOracle`?
    // I'll just use `SiJavascript` as a placeholder if I must, but that's bad.
    // I'll use `SiC` for C and `SiCplusplus` for C++.
    // For Java, I will use `SiKeras`? No.
    // I will use a simple <span>Java</span>.
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "backend-api",
    category: "Backend API",
    title: "Scalable Backend API",
    src: "/assets/projects-screenshots/backend-api/1.png",
    screenshots: ["1.png"],
    live: "https://github.com/aakarsh-devulapally/backend-api-demo", // Placeholder
    github: "https://github.com/aakarsh-devulapally/backend-api", // Placeholder
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.mysql,
        // I defined mysql in PROJECT_SKILLS above.
        PROJECT_SKILLS.mysql,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Built RESTful APIs using Python and Flask to handle structured data processing and automation tasks.
            Implemented request validation, pagination, and authentication for secure and efficient API access.
            Integrated SQL databases for persistent storage and reliable data retrieval.
            Designed modular backend components to support scalability and maintainability.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/backend-api/1.png`]} />
        </div>
      );
    },
  },
  {
    id: "android-app",
    category: "Mobile App",
    title: "Android Application",
    src: "/assets/projects-screenshots/android-app/1.png",
    screenshots: ["1.png"],
    live: "#",
    github: "#",
    skills: {
      frontend: [
        PROJECT_SKILLS.android,
        PROJECT_SKILLS.kotlin,
        // PROJECT_SKILLS.java, // I need to define java
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Developed Android applications using Java and Kotlin with responsive UI components.
            Integrated backend services and local storage for efficient data management.
            Performed testing and debugging to enhance application stability and performance.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/android-app/1.png`]} />
        </div>
      );
    },
  },
  {
    id: "ml-projects",
    category: "Machine Learning",
    title: "ML Mini Projects",
    src: "/assets/projects-screenshots/ml-projects/1.png",
    screenshots: ["1.png"],
    live: "#",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        // PROJECT_SKILLS.ml, // Need to define if I want specific
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Implemented Python-based ML workflows including data preprocessing, feature extraction, and model evaluation.
            Built classification models using real-world datasets as part of coursework.
            Applied dimensionality reduction and data transformation techniques to improve model efficiency.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/ml-projects/1.png`]} />
        </div>
      );
    },
  },
];
export default projects;
