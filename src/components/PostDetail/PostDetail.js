import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        marginTop: "80px"
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const { postId } = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const classes = useStyles();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(commentData => setComments(commentData))
    }, [])

    return (
        <>
            <Container maxWidth="md">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography style={{ textTransform: "uppercase" }} gutterBottom variant="h4" component="h2">
                                {post.title}
                            </Typography>
                            <Typography style={{ margin: "20px 0" }} variant="h6" color="textSecondary" component="p">
                                {post.body}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button size="large" variant="contained" color="primary">
                            Like
                        </Button>
                        <Button size="large" variant="contained" color="primary">
                            {comments.length} Comments
                        </Button>
                        <Button size="large" variant="contained" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
            </Container>
            <Container maxWidth='md'>
                <Card style={{marginTop:"30px"}}>
                    <Typography style={{marginLeft:'30px'}} variant='h5' color="textSecondary" component="h2">Comments: ({comments.length})</Typography>
                    <Container maxWidth='md'>
                        {
                            comments.map(comment => <Comment comment={comment} key={comment.id} />)
                        }
                    </Container>
                </Card>
            </Container>
        </>
    );
}
