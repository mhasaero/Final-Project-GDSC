import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetHeader } from "./ui/sheet";

export default function Nav() {
  return (
    <>
      <nav id="navbar" className="left-12 right-12 md:left-20 md:right-20 lg:left-28 lg:right-28 xl:left-40 xl:right-40 text-md md:text-lg lg:text-xl xl:text-2xl items-center pt-2 lg:pt-4 text-primary *: fixed top-0 z-50 backdrop-blur-xl">
        <div className="flex justify-between">
          <div>
            <h2>M. Ilham Syafik</h2>
          </div>
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent side={"bottom"} className="bg-background">
              <SheetHeader>
                <div className="border-primary border-2 absolute left-0 right-0 top-[4%] z-0"></div>
                <h3 className="text-xl font-times relative z-10 bg-background w-max px-2 mx-auto">
                  <strong>Daily News</strong>
                </h3>
                <div className="flex gap-2">
                  <img src="/img/merry.jpeg" alt="merry" className="w-1/2" />
                  <p className="text-xs text-justify">
                    Lorem ipsum dolor sit amet consectetur{" "}
                    <strong>
                      <a href="#home" className="text-sm">
                        HOME
                      </a>
                    </strong>{" "}
                    elit. Dolores vel quisquam unde nostrum consequuntur? Fugiat sapiente inventore iste dignissimos, provident repudiandae deleniti esse,{" "}
                    <strong>
                      <a href="#about" className="text-sm">
                        ABOUT
                      </a>
                    </strong>{" "}
                    unde omnis vitae ratione adreiciendis maxime?
                  </p>
                </div>
                <h3 className="text-xl font-times relative z-10 bg-background w-max px-2 mx-auto">
                  <strong>Lorem Ipsum Dolores unde Maxime ?</strong>
                </h3>
                <div className="flex gap-2 text-justify">
                  <p className="text-xs">Lorem, ipsum dolor sit amet adipisicing elit. Minima odit laborum ullam. Dignissimos nisi reiciendis harum repellendus, odio quasi! Eos totam possimus rem sit corrupti eligendi magni. Nisi.</p>
                  <p className="text-xs">
                    Lorem, ipsum dolor sit amet adipisicing elit. Minima odit laborum ullam. Dignissimos nisi reiciendis{" "}
                    <strong>
                      <a href="#skills" className="text-sm">
                        SKILLS
                      </a>
                    </strong>{" "}
                    repellendus, odio quasi! Eos totam possimus rem sit corrupti eligendi magni. Nisi.
                  </p>
                  <p className="text-xs">
                    Lorem,{" "}
                    <strong>
                      <a href="" className="text-sm">
                        CONTACT
                      </a>
                    </strong>{" "}
                    sit amet adipisicing elit. Minima odit laborum ullam. Dignissimos nisi reiciendis harum repellendus, odio quasi! Eos totam possimus rem sit corrupti eligendi magni. Nisi.
                  </p>
                </div>
                <img src="/img/hololive.jpeg" alt="hololive" className="h-32" />
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <ul className="hidden md:flex w-1/2 justify-between">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <div className="w-full border-b-2 border-primary blur-[1px] mt-3 md:mt-5 lg:mt-8"></div>
      </nav>
    </>
  );
}

// left-12 right-12 md:left-20 md:right-20 lg:left-28 lg:right-28 xl:left-40 xl:right-40 text-md md:text-lg lg:text-xl xl:text-2xl items-center pt-2 lg:pt-4 text-primary fixed top-0 z-50 backdrop-blur-xl
