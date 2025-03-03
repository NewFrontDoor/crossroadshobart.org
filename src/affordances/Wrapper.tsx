import React, {ReactElement} from 'react';

export default function Wrapper(props: {}): ReactElement {
    return (
        <div className="max-w-2xl m-auto grid grid-cols-5 text-sm items-center">
            {props.children}
        </div>
    );
}
