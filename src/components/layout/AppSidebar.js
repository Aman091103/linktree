'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
    faChartLine,
    faHouse,
  } from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "@/components/buttons/LogoutButton";
import { usePathname } from "next/navigation";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";

export default function AppSidebar(){
    const path = usePathname();
    return (
        <nav className="inline-flex mx-auto flex-col text-center mt-8 gap-2 text-gray-500">
                <Link 
                  href={"/account"}
                  className={"flex gap-4 p-2 " + 
                    (path ===  '/account' ? 'text-blue-500 font-bold' : '')
                  }>
                  <FontAwesomeIcon
                    fixedWidth={true}
                    icon={faFileLines}
                    className={"w-6 h-6"}
                  />
                  <span className="">My Page</span>
                </Link>
                <Link 
                  href={"/analytics"} 
                  className={"flex gap-4 p-2 " + 
                    (path ===  '/analytics' ? 'text-blue-500 font-bold' : '')
                  }
                >
                  <FontAwesomeIcon
                    fixedWidth={true}
                    icon={faChartLine}
                    className={"w-6 h-6"}
                  />
                  <span className="">Analytics</span>
                </Link>
                <LogoutButton 
                  iconLeft={true} 
                  className={'flex gap-3 items-center text-gray-500 p-2'}
                  iconClasses={'w-6 h-6'}
                />
                <Link href={'/'} 
                  className="flex items-center gap-2 border-t pt-4 text-xs text-gray-500">
                  <FontAwesomeIcon icon={faHouse} className={'w-4 h-4'} />
                  <span>Home</span>
                </Link>
              </nav>
    );
}