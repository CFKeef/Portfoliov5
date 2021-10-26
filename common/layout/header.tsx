import {useState} from "react";
import MenuToggle from "./menutoggle";
import NavBarContainer from "./navbarcontainer";
import MenuLinks from "./menulinks";
import MobileMenu from "./mobilemenu";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <NavBarContainer>
                {/* Desktop */}
                <MenuLinks />
                {/* Mobile */}
                <MenuToggle toggle={toggle} isOpen={isOpen} />
            </NavBarContainer>
            {isOpen && <MobileMenu />}
        </>
    );
};

export default Header;