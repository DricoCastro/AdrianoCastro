import { Home } from "./home/home";

export default function Page() {
  return (
    <div
      className={`
      w-full
      flex 
      flex-col 
      items-center 
      justify-center
      min-h-screen
    `}
    >
      <Home />
    </div>
  );
}
