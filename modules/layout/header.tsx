import {useState} from "react";
import MenuToggle from "./menutoggle";
import MenuLinks from "./menulinks";
import MobileMenu from "./mobilemenu";
import {Collapse} from "@chakra-ui/react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Desktop */}
            <MenuLinks />
            {/* Mobile */}
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <Collapse in={isOpen} animateOpacity>
                <MobileMenu />
            </Collapse>
        </>
    );
};

export default Header;