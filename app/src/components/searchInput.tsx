import Image from "next/image";

type Props = {
  size: "small" | "large";
}

export function SearchInput({ size }: Props) {
  return (
    <>
      <div 
        className="flex items-center rounded pl-[10px] text-sm bg-[var(--gray-color)]"
        style={{
          width: size === "small" ? "250px" : "550px"
        }}
      >
        <Image 
          src="/images/icon/search.svg" 
          alt="search" 
          width={24} 
          height={24} 
        />
        <input 
          type="text" 
          placeholder="search" 
          autoComplete="off"
          className="w-full py-[12px] pl-[10px] outline-none"
        />
      </div>
    </>
  );
}