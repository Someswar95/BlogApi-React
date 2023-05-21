import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const NavbarDrawer = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton>
        <AiOutlineMenu />
      </IconButton>
    </React.Fragment>
  );
};

export default NavbarDrawer;
