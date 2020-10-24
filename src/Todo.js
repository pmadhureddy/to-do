import React, { useState } from "react";
import { Modal, Button, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import db from "./firebase";
import "./Todo.css";
import {
  List,
  ListItem,
  ListItemText,
  //   ListItemAvatar,
} from "@material-ui/core";

function Todo({ todo }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const useStyles = makeStyles((theme) => ({
    modal: {
      justifyItems: "center",
    },

    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const updateTodo = (e) => {
    db.collection("todos").doc(todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );

    setOpen(false);
  };

  const onDelete = (e) => {
    db.collection("todos").doc(todo.id).delete();
  };
  const classes = useStyles();

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        className={classes.modal}
      >
        <div className={classes.paper}>
          <h1>hi Modal!</h1>
          <Input
            placeholder={todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button variant="contained" color="primary" onClick={updateTodo}>
            Update Todo
          </Button>
        </div>
      </Modal>
      <List className="todo_list">
        <ListItem>
          {/* <ListItemAvatar></ListItemAvatar> */}
          <ListItemText primary={todo.todo} secondary="Dummy deadline" />
        </ListItem>
        <EditIcon onClick={(e) => setOpen(true)}></EditIcon>
        <DeleteForeverIcon onClick={onDelete}></DeleteForeverIcon>
      </List>
    </React.Fragment>
  );
}

export default Todo;
