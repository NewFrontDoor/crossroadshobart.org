import type {ReactElement, ReactNode} from 'react';

export default function Sermons(): ReactElement {
    return (
        <div className="grid grid-cols-2 gap-5 justify-items-center text-center">
            <Sermon src="https://sermons.crossroadshobart.org/H3BHqYQm3XN0XgXZ-2024-11-24.mp3">
                Isaiah 9
            </Sermon>
            <Sermon src="https://sermons.crossroadshobart.org/ixQUPcPdzMWbfDGQ-2024-10-27.mp3">
                Giving Up All For Jesus
            </Sermon>
            <Sermon src="https://sermons.crossroadshobart.org/l4UqhZXGPIG19Rd4-2024-10-13.mp3">
                Luke 4:14–22
            </Sermon>
            <Sermon src="https://sermons.crossroadshobart.org/UvmedajBX3nUHtrl-2024-08-04.mp3">
                Hebrews 11
            </Sermon>
        </div>
    );
}

function Sermon(props: {src: string; children: ReactNode}) {
    return (
        <figure>
            <figcaption className="mb-2">{props.children}</figcaption>
            <audio controls src={props.src} />
        </figure>
    );
}
