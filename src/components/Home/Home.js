import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EmailIcon from '@material-ui/icons/Email';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import Post from '../Post/Post';
import { Avatar, Container } from '@material-ui/core';


export default function ButtonAppBar() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    const menuStyles = {
        display: "flex",
        alignItems: "center"
    }
    const asideStyles = {
        width: "300px",
        backgroundColor: "#f6f6f6",
        height: '70vh',
        float: 'left',
        margin: '30px 50px',
        marginTop: '80px',
        borderRadius: '4px',
        position: 'fixed'
    }

    return (
        <>
            <div style={asideStyles}>
                <div style={menuStyles}>
                    <Avatar style={{ backgroundColor: '#673ab7', margin: '10px' }}>S</Avatar>
                    <Typography>Sadman Sakib Mugdho</Typography>
                </div>
                <div style={menuStyles}>
                    <MenuBookIcon style={{ fontSize: '40px', margin: '10px', color: '#ec2aa0' }} />
                    <Typography>See Pages</Typography>
                </div>
                <div style={menuStyles}>
                    <EmailIcon style={{ fontSize: '40px', margin: '10px', color: 'dodgerblue' }} />
                    <Typography>Messages</Typography>
                </div>
                <div style={menuStyles}>
                    <BookmarksIcon style={{ fontSize: '40px', margin: '10px', color: 'crimson' }} />
                    <Typography>Saved Items</Typography>
                </div>
            </div>
            <Container maxWidth='sm' style={{ height: '50px' }}></Container>
            {
                posts.map(post => <Post post={post} key={post.id} />)
            }
        </>
    );
}
