import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

const blogPosts = [
    {
        title: "Building reliable full-stack features",
        description: "Notes on shipping product work with clean APIs, tests, and thoughtful UI states.",
        date: "Coming soon",
        readTime: "5 min read",
        tags: ["#react", "#dotnet", "#testing", "#product"],
    },
    {
        title: "What I learned from data engineering internships",
        description: "A practical write-up on pipelines, Spark jobs, developer environments, and debugging.",
        date: "Coming soon",
        readTime: "6 min read",
        tags: ["#spark", "#data", "#internship", "#backend"],
    },
    {
        title: "Personal website rebuild notes",
        description: "Thoughts on design choices, routing, dark mode, and keeping a portfolio maintainable.",
        date: "Coming soon",
        readTime: "4 min read",
        tags: ["#portfolio", "#tailwind", "#react", "#design"],
    },
];

function CalendarIcon() {
    return (
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
        </svg>
    );
}

function ExternalLinkIcon() {
    return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
    );
}

export default function Blogs() {
    const context = useContext(ThemeContext);

    return (
        <>
            <div className="max-w-3xl mx-auto px-4 pt-32">
                <h1 className={`${context.theme ? "dark" : ""} text-xl font-medium pb-6 dark:text-white`}>Blog</h1>
                <p className={`${context.theme ? "dark" : ""} max-w-2xl pb-9 leading-7 text-zinc-700 dark:text-neutral-300`}>
                    This space is reserved for my thoughts, concerns, tutorials and other stuff related to tech.
                    Make sure to also checkout my{" "}
                    <a
                        href="https://medium.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline underline-offset-2 text-zinc-900 hover:text-zinc-600 dark:text-white dark:hover:text-neutral-300"
                    >
                        Medium
                    </a>{" "}
                    profile.
                </p>
            </div>

            <div className="max-w-3xl mx-auto px-4 flex justify-center flex-col gap-8 mb-20">
                {blogPosts.map((post) => (
                    <article
                        key={post.title}
                        className={`${context.theme ? "dark" : ""} relative w-full rounded-3xl border border-neutral-200 bg-neutral-50/80 p-2 dark:border-neutral-800 dark:bg-zinc-900/70 motion-preset-blur-up-md motion-delay-0`}
                    >
                        <div className="rounded-2xl bg-white/90 p-6 shadow-sm dark:bg-black">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h2 className={`${context.theme ? "dark" : ""} text-base font-semibold text-zinc-950 dark:text-white`}>
                                        {post.title}
                                    </h2>
                                    <p className={`${context.theme ? "dark" : ""} mt-3 text-sm leading-6 text-zinc-800 dark:text-neutral-300`}>
                                        {post.description}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    className={`${context.theme ? "dark" : ""} rounded-full p-2 text-zinc-800 transition-colors hover:bg-zinc-100 dark:text-neutral-200 dark:hover:bg-neutral-900`}
                                    aria-label={`${post.title} placeholder link`}
                                >
                                    <ExternalLinkIcon />
                                </button>
                            </div>

                            <div className={`${context.theme ? "dark" : ""} mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-zinc-800 dark:text-neutral-300`}>
                                <span className="inline-flex items-center gap-1">
                                    <CalendarIcon />
                                    {post.date}
                                </span>
                                <span className="inline-flex items-center gap-1">
                                    <ClockIcon />
                                    {post.readTime}
                                </span>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={`${context.theme ? "dark" : ""} rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-neutral-900 dark:text-neutral-300`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </>
    );
}
