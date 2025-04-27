import Image from "next/image";
import Layout from "./layout";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between  p-8 rounded-lg shadow-md mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Welcome to My Portfolio</h1>
          <p className="text-lg">I am Noah Wright, a Software Engineer and Manager.</p>
        </div>
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <Image src="/path/to/your/portrait.jpg" alt="Noah Wright" width={128} height={128} />
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <p>This is the Home page.</p>
    </div>
  );
}
