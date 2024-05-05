 import { db } from "~/server/db";

export default async function HomePage() {
  const test = await db.query.posts.findMany()
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
    Start 
    {test.map((item) => (<div key={item.id}>{item.name}</div>))}
    </main>
  );
}
