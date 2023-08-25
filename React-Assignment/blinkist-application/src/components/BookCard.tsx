import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const BookCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61aAqvkYcqL.jpg"
                    alt="Not found"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ color: '#03314B',  }}>
                        Bring Your Human to Work
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paddingBottom='5px'>
                        Erica Keswin
                    </Typography>
                    <Grid container direction="row">
                        <Grid item>
                            <Button
                                disabled
                                startIcon={<AccessTimeIcon />}
                                size='small'
                                sx={{ textTransform: 'lowercase' }}>13-minute read</Button>

                        </Grid>
                        <Grid item>
                            <Button
                                disabled
                                startIcon={<PersonOutlineOutlinedIcon />}
                                size='small'
                                sx={{ textTransform: 'lowercase' }}>1.9k reads</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" fullWidth>Finished</Button>
            </CardActions>
        </Card>
    );
}

export default BookCard;

