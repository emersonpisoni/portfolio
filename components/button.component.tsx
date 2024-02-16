import { PropsWithChildren } from "react";

export default function Button({ children }: PropsWithChildren) {
  return <button className="font-bold bg-black bg-opacity-50 p-2 rounded-md">{children}</button>
}
