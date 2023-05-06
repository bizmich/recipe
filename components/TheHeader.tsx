import { Button, Container } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import Logo from "./Logo";

const TheHeader = () => {
  return (
    <header>
      <Container className="flex items-center justify-between border-none py-0">
        <Logo />
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
