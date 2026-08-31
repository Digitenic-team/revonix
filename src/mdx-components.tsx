import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";

/**
 * Prose styling for case-study MDX bodies. Tailwind v4 is configured without
 * the typography plugin, so element styles are mapped explicitly here.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="font-neue text-secondary mt-14 mb-5 text-2xl leading-normal font-medium tracking-[-0.02rem] md:text-[2rem]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-neue text-secondary mt-10 mb-3 text-lg leading-normal font-medium tracking-[-0.01rem] md:text-xl">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-5 text-base leading-[1.75] text-[#5B5B5B] md:text-lg">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="mb-5 flex list-none flex-col gap-3">{children}</ul>
    ),
    li: ({ children }) => (
      <li className="relative pl-6 text-base leading-[1.75] text-[#5B5B5B] before:absolute before:top-[0.7em] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#3558DA] md:text-lg">
        {children}
      </li>
    ),
    strong: ({ children }) => (
      <strong className="text-secondary font-medium">{children}</strong>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-primary underline underline-offset-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="font-neue text-secondary my-10 border-l-2 border-[#3558DA] pl-6 text-lg leading-[1.6] font-medium tracking-[-0.01rem] md:text-xl">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-12 border-[#EEE]" />,
    img: (props) => (
      <Image
        {...(props as ImageProps)}
        width={1200}
        height={750}
        alt={props.alt ?? ""}
        className="my-8 w-full rounded-3xl border border-[#EEE] object-cover"
      />
    ),
    ...components,
  };
}
