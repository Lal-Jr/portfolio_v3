import {
	mobile,
	camera,
	web,
	javascript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	git,
	fiverr,
	skillactz,
	netflix,
	blog,
	jobseeker,
	pizza,
	crypto,
	threejs,
	c,
	python,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "App Developer",
		icon: mobile,
	},
	{
		title: "Photographer",
		icon: camera,
	},
];

const technologies = [
	{
		name: "C++",
		icon: c,
	},
	{
		name: "Python",
		icon: python,
	},
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
];

const experiences = [
	{
		title: "React.js Developer",
		company_name: "Fiverr",
		icon: fiverr,
		iconBg: "#383E56",
		date: "Jan 2021 - Nov 2021",
		points: [
			"Developing web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, and other clients to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
		],
	},
	{
		title: "GoLang Developer",
		company_name: "SkillActz",
		icon: skillactz,
		iconBg: "#FFFFFF",
		date: "Nov 2022 - Dec 2022",
		points: [
			"Understanding already existing codebase and migration to GoLang.",
			"Testing efficiency and usability of newly-developed components.",
		],
	},
];

const projects = [
	{
		name: "Netflix Clone",
		description:
			"UI Clone of Netflix which enables the user to login and browse through different movies and TV series pulled from TMDB API.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwindcss",
				color: "green-text-gradient",
			},
			{
				name: "tmdbapi",
				color: "pink-text-gradient",
			},
		],
		image: netflix,
		source_code_link: "https://github.com/Lal-Jr/Netflix-Clone",
		live_link: "https://netflix-laljr.vercel.app/",
	},
	{
		name: "Blog Page",
		description:
			"Web application that integrates blog posts from GraphCMS along with user-friendly commenting feature & owner review.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: blog,
		source_code_link: "https://github.com/Lal-Jr/GraphQL-GraphCMS-Blog",
		live_link: "https://graph-ql-graph-cms-blog.vercel.app/",
	},
	{
		name: "Job Seeker",
		description:
			"Mobile application that enables users to search for job openings, and locate available jobs based on their current location.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: jobseeker,
		source_code_link: "https://github.com/Lal-Jr/job_seeker",
		live_link: "",
	},
	{
		name: "Pizza Shop",
		description:
			"A comprehensive pizza ordering platform that allows users to order pizzas and offers recommendations from available menu.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: pizza,
		source_code_link: "https://github.com/Lal-Jr/PizzaShop-LandingPage",
		live_link: "https://pizza-shop-landing-page.vercel.app/",
	},
	{
		name: "CryptoTracker",
		description:
			"A comprehensive platform that demonstrates users the details about all the available crypto available in the market.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: crypto,
		source_code_link: "https://github.com/Lal-Jr/Crypto-Tracker",
		live_link: "https://crypto-tracker-omega.vercel.app/",
	},
];

export { services, technologies, experiences, projects };
