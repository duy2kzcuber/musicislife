import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuItem = (props: any) => {
    const {item,isLogin} = props;
    const pathLink = usePathname();
    return (
        <>
        {
            ((isLogin === item.isLogin || item.isLogin === undefined) && (
                <li className="w-[100%]">
                    <Link href={item.link} className={`flex gap-x-[20px] text-[16px] font-[700] hover:text-blue_txt ${item.link === pathLink ? 'text-blue_txt' : 'text-white'}`}>
                        <div className="text-[22px]">{item.icon}</div>
                        <div>{item.title}</div>
                    </Link>
                </li>
            ))
        }
        </>
    )
}