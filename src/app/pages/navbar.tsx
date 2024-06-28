// Navbar.js
import React from 'react';
import { Button } from "@/components/ui/button"

export default function Navbar(props: {onNavClick: any}) {

  return (
      <header id="navbar" className="flex items-center my-14 justify-center">
          <Button id="hero" variant="ghost"  onClick={props.onNavClick}>home</Button>
          <Button id="edu" variant="ghost" onClick={props.onNavClick}>education</Button>
          <Button id="work" variant="ghost" onClick={props.onNavClick}>work</Button>
          <Button id="research" variant="ghost" onClick={props.onNavClick}>research</Button>
    </header>
  )
}