import Link from "next/link";

export const CardCategory = (props: any) => {
  const item = props.item;
  return (
    <>
      <Link href={item.link} className="flex flex-wrap">
        <div className="w-[180px] aspect-square rounded-[15px] overflow-hidden">
          <img src={item.image} />
        </div>
        <div className="text-white font-[700] text-[14px] pt-[10px]">{item.title}</div>
        <div className="truncate text-[#FFFFFF80] text-[12px] font-[400] pt-[10px]">{item.description}</div>
      </Link>
    </>
  )
}