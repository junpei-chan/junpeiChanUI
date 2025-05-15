import Link from "next/link";
import Image from "next/image";

export function GithubIcon() {
  return (
    <Link 
      href="https://github.com/junpei-chan/junpeiChanUI"
      className="rounded p-[7px] bg-[var(--gray-color)]"
    >
      <Image 
        src="/images/icon/github.svg"
        alt="github"
        width={30}
        height={30}
      />
    </Link>
  );
}