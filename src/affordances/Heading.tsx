export default function Heading(props: {level: 'h1' | 'h2' | 'h3'; children: React.ReactNode}) {
  if (props.level === 'h1') {
    return (
      <h1 className="p-16 mb-16 font-display text-5xl font-bold text-center">{props.children}</h1>
    );
  }

  if (props.level === 'h2') {
    return (
      <h2 className="p-16 pt-32 font-display text-5xl font-bold text-center">{props.children}</h2>
    );
  }

  return <h3 className="mb-3 font-display text-2xl font-bold">{props.children}</h3>;
}
