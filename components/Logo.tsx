import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/assets/logo.svg"
      height={80}
      className="box-border"
      width={100}
      alt="Logo"
    />
  );
}
