import React from 'react';


/* This will be used to define the interface contract for the context (used for monitoring) */
interface ActionGroupProps {
    eventContext: string;
}

/* This will be used to define the interface contract for the state properties */
interface SearchBarStateProps {
    isResourceLoading: boolean;
}

export const SearchBarComponent: React.FC<ActionGroupProps> = ({
}) => {
    return (
       <div className="">
            <input placeholder="What are you looking for ?" />
        </div>
    );
};
