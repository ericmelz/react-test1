// @flow
import * as React from 'react';

type Props = {
    numChars?: number;
    children: React.ReactNode;
};
export const ExpandableText = ({children, numChars=2}: Props) => {
    const [expanded, setExpanded] = React.useState(false);
    if (typeof children === 'string') {
        const fullText = children;
        if (expanded) {
            return <div>
                <button onClick={() => setExpanded(false)}>Collapse</button>
                {fullText}
            </div>;
        } else {
            const substring = fullText.substring(0, numChars);
            return (
                <div>
                    {substring}
                    ...
                    <button onClick={() => setExpanded(true)}>Expand</button>
                </div>
            )
        }
    }
    return (
        <div>
            {children}
        </div>
    );
};