import React from 'react';
import { New } from './New';

export const NewsList = ({ news }) => {
    return (
        <div className="row">
            { news.map( notice => (
                <New 
                    key={ notice.url }
                    notice={notice}
                />
            ))}
        </div>
    )
}
