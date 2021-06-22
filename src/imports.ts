//REACT AND THIRDS
import { useContext, useEffect, useState, createContext } from 'react'
import { BrowserRouter, Route, useHistory, Link } from 'react-router-dom'
import firebase from 'firebase/app';


//PAGES
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

//COMPONENTS
import { Aside } from './components/Aside'
import { GenericButton } from './components/GenericButton'


//IMAGES
import LogoImg from './assets/images/logo.svg'
import GoogleIconImg from './assets/images/google-icon.svg'

//CONTEXTS
import { AuthContext, AuthContextProvider } from './contexts/AuthContext'

//SERVICES
import { auth, database } from './services/firebase'


export {
  //REACT AND THIRDS
  useHistory,
  useState,
  useEffect,
  useContext,
  createContext,

  Link,
  Route,
  BrowserRouter,
  firebase,

  //PAGES
  Home,
  NewRoom,

  //COMPONENTS
  Aside,
  GenericButton,

  //IMAGES
  LogoImg,
  GoogleIconImg,

  // CONTEXT
  AuthContextProvider,
  AuthContext,

  //SERVICES
  auth,
  database,

}