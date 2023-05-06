import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/assets/logo.svg"
      height={100}
      className="box-border"
      width={100}
      alt="Logo"
    />
  );
}
