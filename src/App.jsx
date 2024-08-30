import RightPart from "./components/RightPart";
import LeftPart from "./components/LeftPart";

function App() {
  return (
    <main className="flex w-screen h-screen items-center justify-center">
      <div className="w-[1240px] h-auto flex gap-[36px] py-10">
        <LeftPart />
        <RightPart />
      </div>
    </main>
  );
}

export default App;
