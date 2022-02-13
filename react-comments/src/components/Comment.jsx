import React from 'react';
import { useState } from 'react';

const Comment = ({ comment }) => {
    const classes = {
        card: {
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: comment.padding,
            paddingBottom: '10px',

            backgroundColor: '#F6F6F6',
        },
        details: {
            textAlign: 'left',
        },
        body: {
            textAlign: 'left',
        },
        buttons: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '300px',
        },
        button: {
            border: 'none',
            backgroundColor: 'transparent',
            fontSize: '0.8rem',
            color: 'grey',

            cursor: 'pointer',
        },
    };

    return (
        <div style={classes.card}>
            <p style={classes.details}>
                {comment.author} {comment.points}
                {'points'} {comment.timestamp}
            </p>
            <h5 style={classes.body}>{comment.body}</h5>
            <div style={classes.buttons}>
                <button style={classes.button}>Reply</button>
                <button style={classes.button}>Expand</button>
                <button style={classes.button}>Give Award</button>
                <button style={classes.button}>Share</button>
                <button style={classes.button}>Report</button>
                <button style={classes.button}>Save</button>
            </div>
        </div>
    );
};

export default Comment;
