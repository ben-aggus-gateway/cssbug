/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <h1>Test Page</h1>
      <div
        className={`text-white 
py-6 place-items-center 
grid md:grid-cols-12 
md:gap-7 grid-cols-8 
gap-2 bg-blue-500`}
      >
        <span className="text-xl font-semibold md:col-start-2 md:col-span-10 col-span-6 col-start-2">
          Test Content
        </span>
      </div>
    </div>
  );
}
