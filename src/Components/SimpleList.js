import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList(props) {
  const classes = useStyles();
  const { codes } = props;

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Users">
      {codes.map((code) => (
          <ListItem key={code}>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText primary={code} />
        </ListItem>
        ))}  
      </List>
      <Divider />
    </div>
  );
}