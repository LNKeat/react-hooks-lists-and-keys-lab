import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {
        links.map(link => {
          const href = `#${link}`
          return <a href={href} key={link}>{link}</a>
        })
      } 
    </nav>
  )
}

export default NavBar;
 