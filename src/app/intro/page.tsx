import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const IntroPage = () => {
  return (
    <main className="min-w-10">
      <Image
        src="/images/intro-image.png"
        width={400}
        height={400}
        alt="Intro Image"
        priority
      />
      <div>
        <Button className="">시작하기</Button>
      </div>
    </main>
  );
};

export default IntroPage;
