import { Button } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navigation = () => {
  const { pathname } = useRouter();
  return (
    <nav className="flex items-center w-auto gap-x-2">
      <Link href="/">
        <Button variant={pathname === "/" ? "light" : "subtle"} color="gray">
          Главная
        </Button>
      </Link>
      <Link href="/infinite-scroll">
        <Button
          variant={pathname === "/infinite-scroll" ? "light" : "subtle"}
          color="gray"
        >
          Infinite scroll
        </Button>
      </Link>
      <Link href="/pagination">
        <Button
          variant={pathname === "/pagination" ? "light" : "subtle"}
          color="gray"
        >
          Пагинация
        </Button>
      </Link>
      <Link href="/drag-n-drop">
        <Button
          variant={pathname === "/drag-n-drop" ? "light" : "subtle"}
          color="gray"
        >
          Drag &apos;n&apos; drop
        </Button>
      </Link>
    </nav>
  );
};

export default Navigation;
