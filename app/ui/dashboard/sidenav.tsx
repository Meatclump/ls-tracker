import Link from "next/link";
import NavLinks from "./nav-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4">
            <Link
                className="rounded-md px-3 py-2 text-2xl text-gray-100 hover:text-neutral-50 bg-red-500 hover:bg-red-700 h-20 items-end flex mb-2"
                href={"/"}
            >
                <h2>
                    Yep
                </h2>
            </Link>
            <div className="flex flex-col justify-between grow gap-2">
                <NavLinks />
                <div className="hidden md:block grow h-auto w-full"></div>
                <button className="flex items-center gap-2 rounded-md bg-zinc-800 w-full p-3 text-sm hover:bg-amber-500 hover:text-amber-950 font-medium">
                    <FontAwesomeIcon icon={faPowerOff} /> Log Out
                </button>
            </div>
        </div>
    )
}
