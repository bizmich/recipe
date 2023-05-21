import { Container, Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import Logo from "../Logo";
import SearchBar from "./SearchBar/SearchBar";
import Navigation from "./Navigation";

const TheHeader = () => {
  return (
    <header className="bg-white border border-b drop-shadow-md">
      <Container className="flex items-center justify-between" py={0}>
        <Link href="/">
          <Logo />
        </Link>
        <Navigation />
        <div className="flex items-center gap-x-3">
          <SearchBar />
          <Link href="/add-recipe">
            <Button leftIcon={<IconPlus />}>Добавить блюдо</Button>
          </Link>
        </div>
      </Container>
    </header>
  );
};
export default TheHeader;
