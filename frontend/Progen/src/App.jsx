import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss";
import Header from './components/header';
import Content from './components/content';
import Searchbar from './components/searchbar';
function App() {

  return (
    <>
    <Header></Header>
    <Content></Content>
    <Searchbar></Searchbar>
    </>
  )
}

export default App
