import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className=" text-white">
        <div className="flex h-screen">
          <div className="m-auto text-center">
            {/* <div>
              <img src="/404.svg" alt="404" />
            </div> */}
            <p className="text-sm md:text-base text-[#F6009B] p-2 mb-4">
              The page you were looking for doesn't exist
            </p>
            <Link
              href="/"
              className="bg-transparent hover:bg-[#F6009B] text-[#F6009B] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#F6009B] hover:border-transparent"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
