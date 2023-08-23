import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import { Link } from 'react-router-dom'; // Importando o componente Link
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';

function Sidebar() {
    return (
        <Drawer
            variant="permanent"
            anchor="left"
        >
            <Avatar alt="User Name" src="/path-to-user-image.jpg">U</Avatar>
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Iniciar" />
                </ListItem>
                <ListItem button component={Link} to="/agenda">
                    <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
                    <ListItemText primary="Agenda" />
                </ListItem>
                <ListItem button component={Link} to="/pacientes">
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                    <ListItemText primary="Pacientes" />
                </ListItem>
                <ListItem button component={Link} to="/cursos">
                    <ListItemIcon><SchoolIcon /></ListItemIcon>
                    <ListItemText primary="Cursos" />
                </ListItem>
                <ListItem button component={Link} to="/configuracoes">
                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                    <ListItemText primary="Configurações" />
                </ListItem>
            </List>
        </Drawer>
    );
}

export default Sidebar;
