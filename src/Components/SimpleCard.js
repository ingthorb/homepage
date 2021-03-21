import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const { projects } = props;
   console.log(projects);
  return (
    <div>
        {projects.map((project) => (
        <div>
            <Card key={project.title} className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                {project.title}
                </Typography>
                <Typography variant="h5" component="h2">
                {project.category}
                </Typography>
            </CardContent>
            <CardActions>
                <Button href={project.url}>View website</Button>
            </CardActions>
            </Card>
            <Divider />
        </div>
    ))}
    </div>
  );
}