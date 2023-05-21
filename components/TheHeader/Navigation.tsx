import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="flex items-center w-auto gap-x-2">
      <Link href="/">
        <Button variant="subtle" color="gray">
          Главная
        </Button>
      </Link>
      <Link href="/infinite-scroll">
        <Button variant="subtle" color="gray">
          Infinite scroll
        </Button>
      </Link>
      <Link href="/pagination">
        <Button variant="subtle" color="gray">
          Пагинация
        </Button>
      </Link>
      <Link href="/drag-n-drop">
        <Button variant="subtle" color="gray">
          Drag &apos;n&apos; drop
        </Button>
      </Link>
    </nav>
  );
};

export default Navigation;
