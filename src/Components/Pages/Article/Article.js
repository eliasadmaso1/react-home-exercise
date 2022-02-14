import React from "react";
import { useArticleContext } from "../../Context/Context";
import "./Article.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom';

function Article() {
  const { articleContext } = useArticleContext();
  return (
    <div className="article-card">
      <Card sx={{ width: 1600 }}>
       
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" marginLeft="240px" fontWeight="bold" marginBottom="30px">
            Title - {articleContext.title}
          </Typography>
          <Typography variant="body2" color="text.secondary"  fontSize="20px" marginBottom="30px">
            Published Date - {articleContext.publishedAt}
          </Typography>
          <CardMedia
          component="img"
          height="500"
          image={articleContext.urlToImage}
          alt="green iguana"
        />
          <Typography variant="body2" color="text.secondary"  fontSize="20px" fontWeight="bold" marginTop="30px">
            Autor - {articleContext.autor ? articleContext.autor : "Not Have Autor"}
          </Typography>

          <Typography variant="body2" color="text.secondary"  fontSize="20px"  marginTop="30px">
            Description - {articleContext.description}
          </Typography>
         
          <Typography variant="body2" color="text.secondary" fontSize="20px"  marginTop="30px">
            Content - {articleContext.content}
          </Typography>
        </CardContent>
        <Link to="/" style={{textDecoration:"none"}}><Button variant="contained" fontSize="10px">Back To Articles</Button></Link>

      </Card>

    </div>
  );
}

export default Article;
