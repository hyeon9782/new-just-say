import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <main className="mx-auto my-0 w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] px-4">
      {children}
    </main>
  );
};

export default Container;
