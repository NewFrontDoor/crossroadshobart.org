import type {MDXComponents} from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        h1: (props) => <h1 {...props} className="font-bold text-3xl mt-4" />,
        h2: (props) => <h2 {...props} className="font-bold text-2xl mt-4" />,
        h3: (props) => <h3 {...props} className="font-bold text-xl mt-4" />,
        p: (props) => <p {...props} className="mb-4" />,
        a: (props) => <a {...props} className="text-blue underline" />
    };
}
