import Link from "next/link";
import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState("");
  const [cursorPosition, setCursorPosition] = useState({ x: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef(null);

  const handleMouseEnter = (e, title) => {
    const divPos = e.target.getBoundingClientRect();
    console.log(divPos);
    setHoveredItem(title);
    setCursorPosition({ x: divPos.left + divPos.width / 2 - 30 });

    // Use the position to animate the arrow
  };
  const handleMouseLeave = () => {
    setHoveredItem("");
    setCursorPosition({ x: 0 });
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="container-items">
            <div className="logo-items-container">
              <div className="logo">
                <Link href="/">
                  <img src="./logo.png" alt="logo" />
                </Link>
              </div>
              <nav className="top-navigation">
                <ul className="nav-items">
                  <li
                    ref={divRef}
                    onMouseEnter={(e) => handleMouseEnter(e, "home")}
                    onMouseLeave={handleMouseLeave}
                  >
                    Agent's Home
                  </li>
                  <li
                    ref={divRef}
                    onMouseEnter={(e) => handleMouseEnter(e, "account")}
                    onMouseLeave={handleMouseLeave}
                  >
                    My Account
                  </li>
                  <li
                    ref={divRef}
                    onMouseEnter={(e) => handleMouseEnter(e, "about")}
                    onMouseLeave={handleMouseLeave}
                  >
                    About
                  </li>
                  <li
                    ref={divRef}
                    onMouseEnter={(e) => handleMouseEnter(e, "insurance")}
                    onMouseLeave={handleMouseLeave}
                  >
                    Insurance
                  </li>
                  <li
                    ref={divRef}
                    onMouseEnter={(e) => handleMouseEnter(e, "news")}
                    onMouseLeave={handleMouseLeave}
                  >
                    News
                  </li>
                </ul>
              </nav>
            </div>
            <div className="contact-container">
              <ul className="top">
                <li
                  className="phone-number"
                  ref={divRef}
                  onMouseEnter={(e) => handleMouseEnter(e, "phone")}
                  onMouseLeave={handleMouseLeave}
                >
                  <a className="a-standalone">(937) 374-0855</a>
                </li>
                <li
                  className="contact"
                  ref={divRef}
                  onMouseEnter={(e) => handleMouseEnter(e, "contact")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                    <span className="button-dep">
                      <a>Contact</a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="top-roofline">
          <div className="mover" style={{ width: cursorPosition.x }}></div>
          <div className="cutout">
            <img
              src="./roofline.svg"
              alt="arrow"
              style={hoveredItem ? { opacity: "1" } : { opacity: "0" }}
            />
            <div
              className="line"
              style={!hoveredItem ? { opacity: "1" } : { opacity: "0" }}
            ></div>
          </div>
          <div className="filler"></div>
        </div>

        <div className="mobileHeader">
          <FaBars
            size={24}
            onClick={() => setIsOpen(!isOpen)}
            className={`hamburger ${isOpen ? "open" : "close"}`}
          />
          <nav className={`nav-items ${isOpen ? "show" : "hide"}`}>
            <a>Home</a>
            <a>About</a>
            <a>Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
