import Link from 'next/link';
import Image from 'next/image';
export function LogoLink() {
  return (
    <div className="mb-4 text-center sm:mb-0">
      <Link href="/">
      <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" className="h-8" width={220} height={0}/>
        </div>
      </Link>
    </div>
  );
}
