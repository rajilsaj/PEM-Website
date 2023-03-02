import React from 'react';


interface ActionGroupProps {
    eventContext: string;
}

interface FooterStateProps {
    isResourceLoading: boolean;
}

export const FooterComponent: React.FC<ActionGroupProps> = ({
}) => {
    return (
       <div className="">
            <input placeholder="What are you looking for ?" />
        </div>
    );
};
