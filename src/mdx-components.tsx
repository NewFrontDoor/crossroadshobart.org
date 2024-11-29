import Link from 'affordances/Link';
import type {MDXComponents} from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <h1 {...props} className="font-display font-bold text-3xl mt-4 mb-2" />,
    h2: (props) => <h2 {...props} className="font-display font-bold text-2xl mt-4 mb-2" />,
    h3: (props) => <h3 {...props} className="font-display font-bold text-xl mt-4 mb-2" />,
    p: (props) => <p {...props} className="mb-4" />,
    a: (props) => <Link {...props} />
  };
}
