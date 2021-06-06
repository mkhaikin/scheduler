import React, { useEffect } from 'react'
import { withStyles} from "@material-ui/core";
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import IconBarChart from '@material-ui/icons/BarChart'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import MenuItemText from './MenuItemText';

import { useActions } from '../hooks/useActions';
import { useTypesSelector } from '../hooks/menuTypesSelector';

const drawerWidth = 160

const style = {
    sideMenu:{
        display: 'flex',  
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '160px',
        height: '100%',
        backgroundColor: '#253053'
    },
    appMenu: {
        width: '100%',
      },
      navList: {
        width: drawerWidth,
      },
      menuItem: {
        width: drawerWidth,
      },
      menuItemIcon: {
        color: '#97c05c',
      },
      meniItemText: {
          fontSize: 12
      }
}

const SideMenu = (props) => {
    const {classes} = props;
    const [openReports, setOpenReports] = React.useState(false)
    const [openHelp, setOpenHelp] = React.useState(false)
    const [openEmployees, setOpenEmployees] = React.useState(false)
    const [openLocations, setOpenLocations] = React.useState(false)

    const {menuItem } = useTypesSelector(state=> state.menu)
    const { showDashboardPage, showOrdersPage, showLocationsPage, showLocationForm, showEmployeesPage, showEmployeeForm, showStorePage, showReport1Page, showReport2Page, showHelpPage1, showHelpPage2} = useActions()

    useEffect( () => {
        console.log("Menu item: " + menuItem)
    }, [menuItem])

    function handleClickReports() {
        setOpenReports(!openReports)
    }

    function handleClickLocations() {
        setOpenLocations(!openLocations)
    }

    function handleClickEmployees() {
        setOpenEmployees(!openEmployees)
    }
    
    function handleClickHelp() {
        setOpenHelp(!openHelp)
    }

    return (
        <div className={classes.sideMenu}>
            <List component="nav" className={classes.appMenu} disablePadding>
                <ListItem button className={classes.menuItem} onClick={() =>showDashboardPage()}>
                    <ListItemIcon className={classes.menuItemIcon}>
                    <IconDashboard />
                    </ListItemIcon>                    
                    <MenuItemText text="Dashboard"/>
                </ListItem>

                <ListItem button className={classes.menuItem}  onClick={() =>showOrdersPage()}>
                    <ListItemIcon className={classes.menuItemIcon}>
                    <IconShoppingCart />
                    </ListItemIcon>
                    <MenuItemText text="Orders"/>
                </ListItem>

                <ListItem button className={classes.menuItem} onClick={() =>handleClickLocations()}>
                    <ListItemIcon className={classes.menuItemIcon}>
                    <IconPeople />
                    </ListItemIcon>
                   <MenuItemText text="Locations"/>
                   {openLocations ? <IconExpandLess /> : <IconExpandMore />}
                </ListItem>
                <Collapse in={openLocations} timeout="auto" unmountOnExit>
                    <Divider />
                    <List component="div" disablePadding>
                    <ListItem button className={classes.menuItem}  onClick={() =>showLocationsPage()}>
                        <MenuItemText text="Location table"/>
                    </ListItem>
                    <ListItem button className={classes.menuItem}  onClick={() =>showLocationForm()}>
                        <MenuItemText text="Location form"/>
                    </ListItem>
                    </List>
                </Collapse>
                <ListItem button className={classes.menuItem} onClick={handleClickEmployees}>
                    <ListItemIcon className={classes.menuItemIcon}>
                    <PeopleOutlineIcon />
                    </ListItemIcon>
                    <MenuItemText text="Employees"/>
                    {openEmployees ? <IconExpandLess /> : <IconExpandMore />}
                </ListItem>
                <Collapse in={openEmployees} timeout="auto" unmountOnExit>
                    <Divider />
                    <List component="div" disablePadding>
                    <ListItem button className={classes.menuItem}  onClick={() =>showEmployeesPage()}>
                        <MenuItemText text="Employees table"/>
                    </ListItem>
                    <ListItem button className={classes.menuItem}  onClick={() =>showEmployeeForm()}>
                        <MenuItemText text="Employee form"/>
                    </ListItem>
                    </List>
                </Collapse>

                <ListItem button className={classes.menuItem}  onClick={() =>showStorePage()}>
                    <ListItemIcon className={classes.menuItemIcon}>
                    <IconBarChart />
                    </ListItemIcon>
                    <MenuItemText text="Store"/>
                </ListItem>

                <ListItem button onClick={handleClickReports} className={classes.menuItem}>
                    <ListItemIcon className={classes.menuItemIcon}>
                    <IconLibraryBooks />
                    </ListItemIcon>
                    <MenuItemText text="Reports"/>
                    {openReports ? <IconExpandLess /> : <IconExpandMore />}
                </ListItem>
                <Collapse in={openReports} timeout="auto" unmountOnExit>
                    <Divider />
                    <List component="div" disablePadding>
                    <ListItem button className={classes.menuItem}  onClick={() =>showReport1Page()}>
                        <MenuItemText text="Report type 1"/>
                    </ListItem>
                    <ListItem button className={classes.menuItem}  onClick={() =>showReport2Page()}>
                        <MenuItemText text="Report type 2"/>
                    </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={handleClickHelp} className={classes.menuItem}>
                    <ListItemIcon className={classes.menuItemIcon}>
                    <IconLibraryBooks />
                    </ListItemIcon>
                    <MenuItemText text="Help"/>
                    {openHelp ? <IconExpandLess /> : <IconExpandMore />}
                </ListItem>
                <Collapse in={openHelp} timeout="auto" unmountOnExit>
                    <Divider />
                    <List component="div" disablePadding>
                    <ListItem button className={classes.menuItem} onClick={() =>showHelpPage1()}>
                        <MenuItemText text="Help 1"/>
                    </ListItem>
                    <ListItem button className={classes.menuItem} onClick={() =>showHelpPage2()}>
                        <MenuItemText text="Help 2"/>
                    </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    )
}

export default withStyles(style)(SideMenu);