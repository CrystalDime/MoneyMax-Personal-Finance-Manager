import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import AssessmentIcon from "@material-ui/icons/Assessment";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { useNavigate } from "react-router-dom";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  list: {
    paddingTop: theme.spacing(8),
    padding: theme.spacing(2, 0)
  },
  listItem: {
    borderRadius: theme.spacing(1),
    margin: theme.spacing(1, 0)
  },
  listItemIcon: {
    minWidth: theme.spacing(5)
  },
  listItemText: {
    fontSize: "1rem"
  }
}));

function VerticalNavBar() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <List className={classes.list}>
        <Divider />
        <ListItem
          button
          onClick={() => handleNavigation("/dashboard")}
          className={classes.listItem}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() => handleNavigation("/income")}
          className={classes.listItem}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText
            primary="Income"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() => handleNavigation("/expenses")}
          className={classes.listItem}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText
            primary="Expenses"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() => handleNavigation("/savingsgoals")}
          className={classes.listItem}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText
            primary="Savings Goals"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() => handleNavigation("/reports")}
          className={classes.listItem}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText
            primary="Reports"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        <Divider />
      </List>
    </Drawer>
  );
}

export default VerticalNavBar;
