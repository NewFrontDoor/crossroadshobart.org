type Props = {level: 'h1' | 'h2'; children: React.ReactNode};

export default function Heading(props: Props) {
  if (props.level === 'h1') {
    return (
      <h1 className="p-16 mb-16 font-display text-5xl font-bold text-center">{props.children}</h1>
    );
  }

  return (
    <h2 className="p-16 pt-32 font-display text-5xl font-bold text-center">{props.children}</h2>
  );
}
