"use client";

import { useOthers } from "../../liveblocks.config";

export function CollaborativeApp() {
  const others = useOthers();
  const userCount = others.length;
  return (
    <div> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit non hic, molestias tempore corporis. Vitae sint et quam corrupti molestias, laudantium atque deserunt quos. Tempora minus culpa dicta eveniet.
    </div>
  )
}