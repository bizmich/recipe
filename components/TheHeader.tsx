import { Button, Container } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import Logo from "./Logo";

const TheHeader = () => {
  return (
    <header className="bg-white border border-b drop-shadow-md">
      <Container className="flex items-center justify-between" py={0}>
        <Link href="/">
          <Logo />
        </Link>
        {/* <nav className="flex items-center w-auto gap-x-2">
          <Button variant="light" compact color="white">
            Блюдо мира
          </Button>
          <Button variant="light" compact color="white">
            Блюдо мира
          </Button>
          <Button variant="light" compact color="white">
            Блюдо мира
          </Button>
          <Button variant="light" compact color="white">
            Блюдо мира
          </Button>
        </nav> */}
        <Link href="/add-recipe">
          <Button leftIcon={<IconPlus />}>Добавить блюдо</Button>
        </Link>
      </Container>
    </header>
  );
};
export default TheHeader;
