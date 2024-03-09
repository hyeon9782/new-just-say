import React from "react";
import { ThemeToggle } from "../theme/theme-toggle";
import { createClient } from "@/util/supabase/server";

const Header = async () => {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  const name = data?.user?.user_metadata.full_name;

  return (
    <header className="mx-auto my-0 w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] px-4">
      <span>Welcome! {name}님!</span>
      <ThemeToggle />
    </header>
  );
};

export default Header;
