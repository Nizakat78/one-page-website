import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome To Our Website</h1>
          <p className="text-gray-600 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard.
          </p>
          <button className="px-6 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
          <Image
            src="/pic1.svg"
            alt="Abstract Design"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
