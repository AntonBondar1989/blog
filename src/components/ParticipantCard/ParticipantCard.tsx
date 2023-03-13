import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box/Box';

/* --------------------------------- иконки --------------------------------- */
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';

import { IСardContent } from '../../components/ParticipantCard/participantCardData'

/* ---------------------------------- стили --------------------------------- */
import './ParticipantCard.css'


interface IProps {
    cardContent: IСardContent;
}

export const ParticipantCard: React.FC<IProps> = ({ cardContent }) => {
    const { avatarImg, name,
        screenWork, mainDescription,
        // title, dropDescription,
        telegram, linkedIn,
        code, lifePage
    } = cardContent

    return (
        <>

            <Card className='card_style' sx={{ maxWidth: 345, background: 'transparent' }} >
                <CardHeader className='card_title'
                    // аватарка
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {avatarImg ? <CardMedia
                                component="img"
                                height="40"
                                image={avatarImg}
                                alt={name}
                            /> : <Box >{name[0]}</Box>}
                        </Avatar>
                    }
                    title={name}
                />
                {/* скрин работы */}
                <CardMedia
                    component="img"
                    height="194"
                    image={screenWork}
                    alt={name}
                />
                {/* краткое описание проекта */}
                <CardContent>
                    <Typography className='card_text' >
                        {mainDescription}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    {/* ссылки на соцсети */}
                    {telegram && <IconButton className='card_icon' href={telegram} target="_blank" aria-label="Cast a vote" title='Cast a vote'>
                        <FavoriteIcon />
                    </IconButton>}
                    {linkedIn && <IconButton className='card_icon' href={linkedIn} target="_blank" aria-label="LinkedIn" title='LinkedIn'>
                        <LinkedInIcon />
                    </IconButton>}
                    {code && <IconButton className='card_icon' href={code} target="_blank" aria-label="Code" title='Code'>
                        <CodeIcon />
                    </IconButton>}
                    {lifePage && <IconButton className='card_icon' href={lifePage} target="_blank" aria-label="Life Page" title='Life Page'>
                        <LinkIcon />
                    </IconButton>}

                </CardActions>

            </Card>
        </>
    )
}
