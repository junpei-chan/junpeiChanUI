import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "@/components/searchInput";
import { GithubIcon } from "@/components/githubIcon";

export function Header() {
  return (
    <header className="flex items-center justify-between bg-[var(--white-color)] py-[10.5px] px-10">
      <div>
        <Link href="/">
          <h1>
            <Image 
              src="/images/header-logo.svg" 
              alt="logo" 
              width={183} 
              height={49} 
            />
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-[30px]">
        <SearchInput size="small" />
        <GithubIcon />
      </div>
    </header>
  );
}