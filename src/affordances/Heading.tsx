export default function Heading(props: {
  level: 'h0' | 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
}) {
  switch (props.level) {
    case 'h0':
      return (
        <h1 className="md:p-16 mb-16 font-display text-5xl md:text-7xl tracking-tighter md:tracking-[-6px] font-normal text-center">
          {props.children}
        </h1>
      );

    case 'h1':
      return (
        <h1 className="p-16 mb-16 font-display text-5xl font-normal tracking-tighter text-center">
          {props.children}
        </h1>
      );

    case 'h2':
      return (
        <h2 className="p-16 pt-32 font-display text-5xl font-normal tracking-tighter text-center">
          {props.children}
        </h2>
      );

    default:
      return (
        <h3 className="mb-3 font-display text-2xl font-normal tracking-tighter ">
          {props.children}
        </h3>
      );
  }
}
