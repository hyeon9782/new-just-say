"use client";

import { createClient } from "@/util/supabase/client";

const KakaoButton = () => {
  const supabase = createClient();

  const signInWithKakao = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  return (
    <button
      onClick={signInWithKakao}
      className="rounded-full bg-yellow-300 px-4 py-2 font-bold"
    >
      카카오 로그인
    </button>
  );
};

export default KakaoButton;
