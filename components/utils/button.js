import { arrowUp } from "./icons";

export function TopButton() {
  return (
    <button
      title="top"
      id="toTop"
      onClick={() => {
        window.scrollTo({
          top: 0,
        });
      }}
      className="bg-white h-8 w-8 fixed bottom-10 md:bottom-6 right-6 cursor-pointer flex items-center justify-center z-30 hover:bg-opacity-40 transition duration-100 rounded border border-white"
    >
      {arrowUp}
    </button>
  );
}
