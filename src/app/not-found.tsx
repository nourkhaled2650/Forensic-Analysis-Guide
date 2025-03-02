import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a2540] flex flex-col items-center justify-center text-white p-4">
      <h2 className="text-4xl font-bold mb-4">404 - Not Found</h2>
      <p className="text-xl text-center mb-8">
        {"The evidence type you're looking for doesn't exist in our database."}
      </p>
      <Link
        href="/"
        className="bg-[#33FF99] text-[#0a2540] px-6 py-3 rounded-lg font-medium hover:bg-[#33FF99]/80 transition-colors"
      >
        {`Return to Home`}
      </Link>
    </div>
  );
}
