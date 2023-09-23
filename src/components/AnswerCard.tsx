import React from 'react';
import { Container, Typography, Box, IconButton, Avatar } from '@mui/material'; // Assuming you are using Material-UI
import { ArrowDownward, Comment } from '@mui/icons-material'; // Assuming you are using Material-UI icons
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const answer = {
    user: 'user123', // Replace with a valid user ID or ObjectId
    question: 'question456', // Replace with a valid question ID or ObjectId
    content: 'This is a sample answer content.This is a sample answer content.This is a sample answer content.This is a sample answer content.This is a sample answer content.This is a sample answer content.', // The answer's content
  
    upvotes: ['user789', 'user101'], // An array of user IDs who upvoted the answer
    downvotes: ['user555'], // An array of user IDs who downvoted the answer
  
    comments: ['comment1', 'comment2'], // An array of comment IDs related to this answer
    time: new Date(), // The date and time when the answer was posted
  };

  
  const AnswerCard = () => {
    return (
      <Container sx={{
        color: '#333', // Text color
        // bgcolor: '#fff', // Background color
        // my: 3,
        // borderRadius: 2,
        // boxShadow: 2,
        padding: '20px',
      }}>
        <Typography variant='h6'>{answer.content}</Typography>
  
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Avatar sx={{ width: 30, height: 30, bgcolor: 'primary.main' }}>
            {answer.user[0]} 
          </Avatar>
          <Typography variant='body2' sx={{ ml: 1 }}>{answer.user}</Typography>
          <Typography variant='body2' sx={{ ml: 1, color: 'blue' }}>
            {new Date(answer.time).toLocaleString()}
          </Typography>
        </Box>
  
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <IconButton aria-label='Upvote' sx={{ color: 'green' }}>
            <ArrowUpwardIcon fontSize='medium' />
          </IconButton>
          <Typography variant='body2'>{answer.upvotes.length}</Typography>
  
          <IconButton aria-label='Downvote' sx={{ color: 'error.main', ml: 2 }}>
            <ArrowDownward fontSize='medium' />
          </IconButton>
          <Typography variant='body2'>{answer.downvotes.length}</Typography>
  
          <IconButton aria-label='Comment' sx={{ ml: 'auto' }}>
            <Comment fontSize='small' />
          </IconButton>
          <Typography variant='body2'>{answer.comments.length} Comments</Typography>
        </Box>

        {/* Draw A horizontal line after answer is completed */}

        <hr />

      </Container>
    );
  };
  
  export default AnswerCard;
  