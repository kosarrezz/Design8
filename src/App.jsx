import { Button } from "@heroui/react";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-900 text-white">
      <h1 className="text-3xl font-bold text-cyan-400">پروژه CoBa 🚀</h1>
      <p className="text-slate-300">HeroUI v3 و Tailwind v4 با موفقیت راه افتادن!</p>
      
      <div className="flex gap-4">
        <Button variant="primary">
          دکمه اصلی ✨
        </Button>
      </div>
    </div>
  );
}

export default App;
