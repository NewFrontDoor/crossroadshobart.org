export default function MdxLayout(props: {children: React.ReactNode}) {
  console.log(props);
  return (
    <>
      <div>
        <img src={props.cover} />
      </div>

      <div className="max-w-4xl m-auto p-4">{props.children}</div>
    </>
  );
}
