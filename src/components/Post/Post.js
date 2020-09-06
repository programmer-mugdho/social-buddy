import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        marginTop: "30px"
    },
    media: {
        height: 140,
    },
});

export default function MediaCard(props) {
    const { title, body, id } = props.post;
    let history = useHistory()
    const handleClick = (postId) => {
        history.push(`post/${postId}`)
    }

    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography style={{ textTransform: "uppercase" }} gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography style={{ margin: "20px 0" }} variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={() => handleClick(id)} size="medium" variant="contained" color="primary">
                        Read More
                    </Button>
                    <Button size="medium" color="primary" variant="contained">
                        Like
                    </Button>
                    <Button onClick={() => handleClick(id)} size="medium" color="primary" variant="contained">
                        Comment
                    </Button>
                    <Button size="medium" color="primary" variant="contained">
                        Share
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
}
