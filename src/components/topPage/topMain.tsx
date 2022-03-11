import React, { FC, useState } from "react";
import pencil from "../../assets/images/pencil.jpg";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import {
  useNavigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const useStyle = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${pencil})`,
      backgroundSize: "cover",
      height: "100vh",
    },

    paper: {
      position: "relative",
      marginLeft: "auto",
      marginRight: "auto",
      top: "33%",
      width: "45%",
    },
  })
);

const TopMain: FC = () => {
  const classes = useStyle();
  const [keyword, setKeyword] = useState("");
  const history = useNavigate();

  const handleSubmit = () => {
    history("/search/" + keyword);
  };

  return (
    <Routes>
      <Route>
        <div className={classes.background}>
          <Paper
            className={classes.paper}
            component="form"
            onSubmit={handleSubmit}
          >
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
            <InputBase placeholder="検索" />
          </Paper>
        </div>
      </Route>
    </Routes>
  );
};

export default TopMain;
