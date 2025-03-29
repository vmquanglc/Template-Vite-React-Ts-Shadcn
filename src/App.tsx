import { Button } from "@/components/ui/button";
import { useState } from "react";

export default () => {
  const [count, setCount] = useState<number>(0);
  const onclick = (event: any) => setCount(count + 1);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>{count}</p>
      <p>
        <Button onClick={onclick}>Click to increase count</Button>
      </p>
    </div>
  );
};
