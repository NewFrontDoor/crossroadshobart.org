import type {ReactElement, ReactNode} from 'react';

export default function Wrapper(props: {children: ReactNode}): ReactElement {
  return <div className="max-w-2xl m-auto flex flex-col gap-8 px-3">{props.children}</div>;
}
