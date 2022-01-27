import { Button, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { getPost } from './../../actions/post';

const Form = () => {
    const post = useSelector(state => state.post);
    const emptyPost = {
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    };
    const [postData, setPostData] = useState(emptyPost);
    const dispatch = useDispatch();

    useEffect(() => {
        post._id && setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (postData._id) {
            dispatch(updatePost(postData._id, postData));
        } else {
            dispatch(createPost(postData));
        }
        clear();
    }

    const clear = () => {
        dispatch(getPost(emptyPost));
        setPostData(emptyPost);
    }
    
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <form
                autoComplete='off'
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant='h6'>
                    {`${post._id ? 'Editing' : 'Creating'} a Memory`}
                </Typography>
                <TextField 
                    name='creator'
                    variant='outlined'
                    label='Creator'
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField 
                    name='title'
                    variant='outlined'
                    label='Title'
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField 
                    name='message'
                    variant='outlined'
                    label='Message'
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField 
                    name='tags'
                    variant='outlined'
                    label='Tags'
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.trim().split(',') })}
                />
                <div className={classes.fileInput}>
                    <FileBase 
                        type='file'
                        multiple={false}
                        onDone={(image) => setPostData({ ...postData, selectedFile: image.base64 })}
                    />
                </div>
                <Button 
                    className={classes.buttonSubmit}
                    variant='contained'
                    color='primary'
                    size='large'
                    type='submit'
                    fullWidth
                >Submit</Button>
                <Button 
                    variant='contained'
                    color='secondary'
                    size='small'
                    onClick={clear}
                    fullWidth
                >Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;
