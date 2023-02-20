import { useState } from "react";

export default function Home() {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex items-center justify-center h-screen">
      <p
        className="text-8xl"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {!hover
          ? "Aobakwe Kodisang!"
          : "This does not do anything at this point"}
      </p>
    </div>
  );
}
