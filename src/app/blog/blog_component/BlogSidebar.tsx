import Image from "next/image";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <div className="flex flex-col gap-8 pt-8 text-sm text-gray-700 px-4 lg:px-0">
      {/* Share section */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 px-2 mb-4">
          Share:
        </h3>
        <div className="flex gap-3 mb-6">
          {/* LinkedIn */}
          <Link href="https://www.linkedin.com/company/datablit/" passHref>
            <span className="flex items-center justify-center w-10 h-10 cursor-pointer p-2 hover:brightness-200 transition">
              <Image
                src="/crmlinkedin.svg"
                alt="LinkedIn logo"
                width={16}
                height={16}
              />
            </span>
          </Link>

          {/* X (Twitter) */}
          <Link href="https://x.com/Datablit_cdp" passHref>
            <span className="flex items-center justify-center w-10 h-10 cursor-pointer p-2 hover:brightness-200 transition">
              <Image src="/crmx.svg" alt="X logo" width={16} height={16} />
            </span>
          </Link>

          {/* YouTube */}
          <Link href="https://www.youtube.com/@datablit" passHref>
            <span className="flex items-center justify-center w-10 h-10 cursor-pointer p-2 hover:brightness-200 transition">
              <Image
                src="/crmyoutube.svg"
                alt="YouTube logo"
                width={16}
                height={16}
              />
            </span>
          </Link>
        </div>
        <hr className="border-gray-200" />
      </div>

      {/* Subscribe section */}
      <div>
        <p className="mb-4 leading-relaxed">
          Want to stay updated on Datablit launches, events, and updates?
          Subscribe below to keep in touch.
        </p>

        <form className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Your work email"
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-[#1f1f4c] text-white text-sm font-medium px-4 py-2 rounded hover:bg-[#4747ad]"
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 leading-relaxed">
          We’ll share a copy of Datablit guide, content and update on products
          as we continue to build the world’s leading CDP.
        </p>
      </div>
    </div>
  );
};

export default BlogSidebar;
