"use client"
import React, { useEffect, useState } from "react";
import Editorchoice from './editorschoice/page';
import Categories from './categories'
import Platform from './platform'
import Popularapps from "./popularapps/page";

  export default function Sidebar() {
   return (
    <>
      {/* popular-appdata fetch from api */}
      <Popularapps />
      {/* Editor-choice fetch from api */}
      <Editorchoice />
      {/* Categories fetch from api */}
      <Categories />
      {/* Platform fetch from api */}
      <Platform /> 
    </>
  )
}