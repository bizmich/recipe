import { Button, Container, Header, Navbar } from "@mantine/core";
import Logo from "./Logo";

const TheHeader = () => {
    return (

        <header className="flex items-center justify-between border-none py-0" >
            <Logo />
            <nav className="w-auto">
                <Button>Add a dish</Button>
            </nav>
        </header>

    );
}
export default TheHeader;