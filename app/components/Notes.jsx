import React from 'react';
import Note from './Note';

import Editable from './Editable';


//so heavy on dat es6 lol
export default({
    notes,
    onNoteClick = () => {},
    onEdit = () => {},
    onDelete = () => {}
}) => (
    <ul className="notes">{notes.map(({id, editing, task}) => <li key={id}>
            <Note className="note" onClick={onNoteClick.bind(null, id)}>
                <Editable className="editable" editing={editing} value={task} onEdit={onEdit.bind(null, id)}/>
                <button className="delete" onClick={onDelete.bind(null, id)}>xx</button>
            </Note>
        </li>)}</ul>
)
