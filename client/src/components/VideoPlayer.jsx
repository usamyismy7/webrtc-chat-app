import React, { useContext } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { SocketContext } from "../SocketContext";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "550px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
  },
  typography: {
    paddingLeft: "5px",
    fontWeight: "bold",
  },
}));

const VideoPlayer = () => {
  const {
    // name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
  } = useContext(SocketContext);
  const classes = useStyles();
  return (
    <Grid container className={classes.gridContainer}>
      {/* Our own video */}
      {stream && (
        <Paper className={classes.paper} elevation={24}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              gutterBottom
              className={classes.typography}
            >
              {/* {name || "William"} */}
              {"William"}
            </Typography>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}
      {/* User's video */}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper} elevation={24}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              gutterBottom
              className={classes.typography}
            >
              {call.name || "James"}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
