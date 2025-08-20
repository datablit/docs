import { redirect } from "next/navigation";
import React from "react";

function Page() {
  return redirect("/docs/getting-started");
}

export default Page;
