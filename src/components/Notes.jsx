//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

import React from 'react';

function Notes() {
    return (
        <div className='note'>
            <h1>This is the title</h1>
            <p>This is the content of notes</p>
        </div>

    );

}

export default Notes;