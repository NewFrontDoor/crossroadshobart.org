import type React from 'react';

type Props = {src: string; alt: string; children: React.ReactNode; flip?: boolean};

export default function SideImage(props: Props) {
  return (
    <div className="md:flex gap-8 items-center my-10">
      <img alt={props.alt} className="rounded-3xl" src={props.src} />
      <div className={props.flip ? '-order-1' : ''}>{props.children}</div>
    </div>
  );
}
