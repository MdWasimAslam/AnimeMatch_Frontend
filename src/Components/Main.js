import React, { useState, useEffect } from 'react';
import './Styles/Main.css';
import { getAnime } from '../Components/APIS/getAnime.js';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { updateScore } from '../Components/APIS/updateScore.js';






function Main() {
  const [firstAnime, setFirstAnime] = useState([]);
  const [secondAnime, setSecondAnime] = useState([]);
  const [scoreUpdating, setScoreUpdating] = useState(false);




  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 39) + 1;
  };

  const fetchData = async () => {
    try {
      const randomAnime = generateRandomNumber();
      const response = await getAnime(randomAnime);
      return response.data.items;
    } catch (error) {
      // Handle any potential errors here
      console.error("Error fetching anime:", error);
    }
  };

  const getAnimeDuo = async () => {
    setScoreUpdating(false)
    const firstData = await fetchData();
    setFirstAnime(firstData);

    const secondData = await fetchData();
    setSecondAnime(secondData);
  };



  const updateAmimeScore = async (selectedAnime) => {
    console.log(selectedAnime)
    setScoreUpdating(true)
    await updateScore(selectedAnime[0].serial, selectedAnime[0].key);
    setFirstAnime([]);
    setSecondAnime([]);
    getAnimeDuo();

  };



  useEffect(() => {
    getAnimeDuo();
  }, []);

  return (
    <div className="main-container">
      

      <div className="cards-container">
      <Card sx={{ maxWidth: 345,boxShadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",padding:"1vh" }}>
      <CardMedia
        sx={{ height: 300 }}
        image={firstAnime[0]?.imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firstAnime[0]?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {firstAnime[0]?.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button disabled={scoreUpdating} onClick={()=>{updateAmimeScore(firstAnime)}} variant='contained' style={{width:"100%",background:"#890304"}}>Choose</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345,boxShadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",padding:"1vh" }}>
      <CardMedia
        sx={{ height: 300 }}
        image={secondAnime[0]?.imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {secondAnime[0]?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {secondAnime[0]?.desc}
        </Typography>
      </CardContent>
      <CardActions>
      <Button disabled={scoreUpdating} onClick={()=>{updateAmimeScore(secondAnime)}} variant='contained' style={{width:"100%",background:"#890304"}}>Choose</Button>
      </CardActions>
    </Card>
      </div>
    </div>
  );
}

export default Main;
