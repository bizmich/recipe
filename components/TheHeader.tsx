import { Button, Container } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import Logo from "./Logo";

const TheHeader = () => {
  return (
    <header className="bg-white border border-b drop-shadow-md">
      <Container className="flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="w-auto">
          <Link href="/add-recipe">
            <Button leftIcon={<IconPlus />}>Add a dish</Button>
          </Link>
        </nav>
      </Container>
    </header>
  );
};
export default TheHeader;
