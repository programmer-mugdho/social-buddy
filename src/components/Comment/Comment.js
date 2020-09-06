import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, Typography, makeStyles, CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        marginTop: "15px"
    },
    media: {
        height: 70,
        width: 70,
        marginLeft: '15px',
        borderRadius: '50%'
    },
    action: {
        display: 'flex'
    }
});

const Comment = (props) => {
    const { name, email, body } = props.comment
    const classes = useStyles();
    const [img, setImg] = useState('')

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=1")
            .then(response => response.json())
            .then(data => setImg(data.results[0].picture.large))
    }, [])

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea className={classes.action}>
                    <div>
                        <CardMedia
                            className={classes.media}
                            image={img}
                            title="Contemplative Reptile"
                        />
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {email}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
};

export default Comment;