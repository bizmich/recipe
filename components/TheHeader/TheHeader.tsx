import { Button, Container } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import Logo from "../Logo";
import SearchBar from "./SearchBar/SearchBar";

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
        <div className="flex items-center gap-x-3">
          <SearchBar />
          <Link href="/add-recipe">
            <Button radius="xl" leftIcon={<IconPlus />}>
              Добавить блюдо
            </Button>
          </Link>
        </div>
      </Container>
    </header>
  );
};
export default TheHeader;
