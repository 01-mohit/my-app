import React, { useState } from 'react';
import "./style.css";
import Menu from "./MenuApi";
import { MenuCard } from './MenuCard';
import { Navbar } from './Navbar';

const uniqueList = [
  // spread operator
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
console.log(uniqueList);

export const Resturant = () => {
  //useState Hook
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList)
  // console.log(typeof (setMenuData));
  console.log("m", setMenuList);
  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  }
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  )
}

