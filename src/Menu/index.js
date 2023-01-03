import React from "react";
import { NavLink } from "react-router-dom";

export const Menu = (props) =>{
    return(
        <ul>
            <li>
                <NavLink activeClassName={props.activeLinkClassName} exact to = "/">HOME</NavLink>
            </li>
            <li>
                <NavLink activeClassName={props.activeLinkClassName} exact to = "/support">SUPPORT</NavLink>
            </li>
            <li>
                <NavLink activeClassName={props.activeLinkClassName} exact to = "/name">NAME</NavLink>
            </li>
            <li>
                <NavLink activeClassName={props.activeLinkClassName} exact to = "/todo">LIST</NavLink>
            </li>
        </ul>
    );
}