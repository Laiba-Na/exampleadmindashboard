import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, Icon, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import Home from "@mui/icons-material/Home";
import People from "@mui/icons-material/People";
import Contacts from "@mui/icons-material/Contacts";
import Receipt from "@mui/icons-material/Receipt";
import Person from "@mui/icons-material/Person";
import CalendarToday from "@mui/icons-material/CalendarToday";
import Help from "@mui/icons-material/Help";
import BarChart from "@mui/icons-material/BarChart";
import PieChart from "@mui/icons-material/PieChart";
import Timeline from "@mui/icons-material/Timeline";
import Map from "@mui/icons-material/Map";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.lightColor[100], marginTop: "-5px" }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [iscollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.Secondary[900]} !important`,
        },
        "& .pro-icon-wrapper": {
          background: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "3px 20px 3px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: `${colors.Fourth[500]}  !important`,
        },
        "& .pro-menu-item.active": {
          color: `${colors.Secondary[500]} !important`,
        },
      }}
    >
      <ProSidebar
        collapsed={iscollapsed}
        style={{ overflowY: "hidden", height: "140%" }}
      >
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!iscollapsed)}
            icon={iscollapsed ? <MenuOutlinedIcon /> : ""}
            style={{
              margin: "10px 0 10px 0",
              color: colors.lightColor[100],
            }}
          >
            {!iscollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h3" color={colors.lightColor[100]}>
                  ADMINIS
                </Typography>
                <IconButton
                  onClick={() => setIsCollapsed(!iscollapsed)}
                  color={colors.lightColor[100]}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/*USER*/}
          {!iscollapsed && (
            <Box mb="25px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor={colors.lightColor[100]}
                borderRadius="100%"
                width="100px"
                height="100px"
                margin="0 auto"
              >
                <img
                  alt="Profile_PIC"
                  width="100px"
                  height="100px"
                  src={`../../assets/User3.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign={"center"}>
                <Typography
                  variant="h2"
                  color={colors.lightColor[100]}
                  fontWeight="bold"
                  sx={{ m: "5px 0 0 0" }}
                >
                  RAI KH
                </Typography>

                <Typography variant="h5" color={colors.Secondary[400]}>
                  GP NEON ADMIN
                </Typography>
              </Box>
            </Box>
          )}

          {/*MENU ITEMS*/}
          <Box paddingLeft={iscollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<Home />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.lightColor[200]}
              sx={{ m: "10px 0 0 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<People />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<Contacts />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<Receipt />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.lightColor[200]}
              sx={{ m: "10px 0 0 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<Person />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarToday />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<Help />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.lightColor[200]}
              sx={{ m: "10px 0 0 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChart />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChart />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<Timeline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<Map />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
