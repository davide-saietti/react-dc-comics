export default function Header(){

const navCategory = [
    "CHARACTERS",
    "COMICS",
    "MOVIES",
    "TV",
    "GAMES",
    "COLLECTIBLES",
    "VIDEOS",
    "FANS",
    "NEWS",
    "SHOP",
  ];

    return(

     <header>
      <div className="logo">
        <img src="../public/img/dc-logo.png" alt="DC Comics Logo"  />
      </div>
      <nav className="main-nav">
        <ul>
          {
            navCategory.map(category =>(
             <li> 
              <a href="#">{category}</a>
             </li>
            ))
          }
        </ul>
      </nav>
    </header>

    )

}

