import Link from "next/link";

function More() {
  return (
    <div className="absolute hidden lg:flex bottom-[-3%] md:gap-[500px] gap-[100px] lg:gap-[550px] md:left-[23%] items-center z-10 py-4 border-0 justify-between bg-[#00d6c0]">
      <div className="uppercase  text-slate-100 ml-6 font-bold ">
        for detail information
      </div>
      <Link
        href="aboutus"
        className="text-slate-100 bg-slate-800 px-2.5 py-2 rounded-sm uppercase font-extrabold tracking-wider mr-6"
      >
        About us
      </Link>
    </div>
  );
}

export default More;
