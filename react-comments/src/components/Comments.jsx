import React from 'react';
import Comment from './Comment';
import { useState } from 'react';

const Comments = ({ comment }) => {
    const [expand, setExpand] = useState(false);

    const data = [
        {
            id: '001',
            author: 'albert',
            body: 'Whats the status?',
            timestamp: 'Sun Aug 02 2020 18:08:45 GMT+0530',
            points: '2',
            replies: [
                {
                    id: '003',
                    author: 'haren',
                    body: 'Wrote the test suites, waiting for approval?',
                    timestamp: 'Sun Aug 02 2020 18:12:45 GMT+0530',
                    points: '3',
                    replies: [
                        {
                            id: '004',
                            author: 'albert',
                            body: 'Thanks for the update!',
                            timestamp: 'Sun Aug 02 2020 18:15:45 GMT+0530',
                            points: '8',
                        },
                    ],
                },
                {
                    id: '002',
                    author: 'Nrupul',
                    body: 'looking forward for the demo!',
                    timestamp: 'Sun Aug 02 2020 18:10:45 GMT+0530',
                    points: '2',
                },
            ],
        },
        {
            id: '005',
            author: 'Raj',
            body: 'Whats the status?',
            timestamp: 'Sun Aug 02 2020 18:08:45 GMT+0530',
            points: '2',
            replies: [
                {
                    id: '006',
                    author: 'Aditya',
                    body: 'Wrote the test suites, waiting for approval?',
                    timestamp: 'Sun Aug 02 2020 18:12:45 GMT+0530',
                    points: '3',
                    replies: [
                        {
                            id: '007',
                            author: 'Dhawal',
                            body: 'Thanks for the update!',
                            timestamp: 'Sun Aug 02 2020 18:15:45 GMT+0530',
                            points: '8',
                        },
                    ],
                },
                {
                    id: '008',
                    author: 'Niki',
                    body: 'looking forward for the demo!',
                    timestamp: 'Sun Aug 02 2020 18:10:45 GMT+0530',
                    points: '2',
                },
            ],
        },
    ];

    let allComments = [];
    let createRecusiveView = (commentList, padding = 20) => {
        for (let x of commentList) {
            let obj = {
                id: x.id,
                author: x.author,
                body: x.body,
                timestamp: x.timestamp,
                points: x.points,
            };
            allComments.push({ ...obj, padding });
            if (x.replies?.length > 0) {
                createRecusiveView(x.replies, (padding += 25));
                padding -= 25;
            }
        }
    };
    createRecusiveView(data);
    console.log('allComments:', allComments);

    const classes = {
        comments: {
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',

            width: '70%',
            margin: 'auto',
        },
    };

    return (
        <div style={classes.comments}>
            {allComments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
};

export default Comments;
