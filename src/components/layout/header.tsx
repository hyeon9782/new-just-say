import React from "react";
import { ThemeToggle } from "../theme/theme-toggle";
import { createClient } from "@/util/supabase/server";

const Header = async () => {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  const name = data?.user?.user_metadata.full_name;

  return (
    <header>
      <span>Welcome! {name}님!</span>
      <ThemeToggle />
    </header>
  );
};

export default Header;
