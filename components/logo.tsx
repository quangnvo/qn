import Link from "next/link"

export default function Logo() {
    return (
        <Link href="/">
            <span className="font-bold text-lg dark:hover:text-yellow-200">&lt; Quang /&gt;</span>
        </Link>
    )
}
