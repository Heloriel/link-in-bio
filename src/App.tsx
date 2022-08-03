function App() {
  return (
    <main className="flex flex-col w-full min-h-screen items-center bg-zinc-900 text-white pt-16">
      <div className="w-">
        <div className="min-w-[100px] max-w-[100px] min-h-[100px] max-h-[100px] mb-4">
          <img src="https://github.com/rocketseat.png" alt="Profile Picture" className="rounded-full border-2 border-green-400" />
        </div>
        <div className="mb-4">
          <span>@andradematheus</span>
        </div>
        <ul>
          <li>
            <a href="#" className="uppercase rounded-full border-2 border-green-500" target={"_blank"}>
              Linkedin
            </a>
          </li>
          <li>
            <a href="#" className="uppercase">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
