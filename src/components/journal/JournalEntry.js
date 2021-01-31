import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import { activeNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';

export const JournalEntry = ({id, date, title, body,url}) => {

    const dispatch=useDispatch();

    const noteDate= moment(date)

    const handleEntryClick= ()=>{
        dispatch(activeNote(id,{
            date, title, body, url
        }));
    }

    return (
        <div 
        className="journal__entry"
        onClick={handleEntryClick}
        >
            {
                url &&
                <div className="journal__entry-picture"
                    style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(${url})`
                    }}
                ></div>
            }
            <div className='journal__entry-body'>
                    <p className="journal__entry-tittle">
                        {title}
                    </p>
                    <p className="journal__entry-content">
                        {body}
                    </p>
            </div>
            
            <div className='journal__entry-date-box'>
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('D')}</h4>
            </div>
        </div>
    )
}
