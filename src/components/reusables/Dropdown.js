import { KeyboardArrowDown } from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";

const Dropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color="inherit"
        sx={{flexGrow: "0", padding: "1", ":hover":{
          bgcolor: "transparent", fontSize: "0.95rem"
        } }}
        id="products"
        onClick={handleClick}
        aria-controls={open ? "product-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDown />}
      >
        <Typography textAlign="center" textTransform="inherit" fontSize="inherit">Products</Typography>
      </Button>
      <Menu
        id="product-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "products",
        }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Features</MenuItem>
        <MenuItem onClick={handleClose}>Channels</MenuItem>
        <MenuItem onClick={handleClose}>Your digital HQ</MenuItem>
        <MenuItem onClick={handleClose}>Integrations</MenuItem>
        <MenuItem onClick={handleClose}>Security</MenuItem>
        <MenuItem onClick={handleClose}>Slack Connect</MenuItem>
        <MenuItem onClick={handleClose}>Customers</MenuItem>
      </Menu>
    </>
  );
};

export default Dropdown;
