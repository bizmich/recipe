import { Button } from "@mantine/core";
import Logo from "./Logo";
import Link from "next/link";

const TheHeader = () => {
    return (

        <header className="flex items-center justify-between border-none py-0" >
            <Logo />
            <nav className="w-auto">
                <Link href='/add-recipe'>
                    <Button>Add a dish</Button>
                </Link>
            </nav>
        </header>
    );
}
export default TheHeader;