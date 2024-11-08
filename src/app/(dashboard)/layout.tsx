import Image from "next/image";
import Link from "next/link";
import Menue from "../../components/Menu";
import Navbar from "../../components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Menue-LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 overflow-y-scroll">
        <Link href="/" className="flex items-center justify-center lg:justify:start gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={32}
            height={32}
          />
          <span className="hidden lg:block">SchoolRun</span>
        </Link>
        <Menue />
      </div>
      {/* Main - RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
