export default function Image(props: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <img
      alt={props.alt}
      height={props.height ?? 400}
      className={`rounded-xl lg:rounded-3xl h-32 md:h-64 lg:h-auto ${props.className ?? ''}`}
      src={props.src}
    />
  );
}
