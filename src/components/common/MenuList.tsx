import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { RoutePath } from "const";

interface ListItemI {
    icon: IconProp;
    name: string;
    link?: RoutePath;
    action?: any;
}

interface Props {
    items: ListItemI[];
    className?: string;
    show: boolean;
    children?: React.ReactNode;
}

const MenuList = ({items, className = "", show, children = null }: Props) => (
    <div className={`menu ${className} ${show ? 'show' : 'hide'}`}>
        <ul className="menuList">
            {items.map((item, index) => {
                return (
                    <li className="menuItem" key={index}>
                        <span className="menuItemIcon">
                            <FontAwesomeIcon icon={item.icon}/>
                        </span>
                        {item.link
                            ? <Link to={item.link}>{item.name}</Link>
                            : <span onClick={item.action}>{item.name}</span>
                        }
                    </li>
                )
            })}
        </ul>
        {children}
    </div>
);

export default MenuList;
