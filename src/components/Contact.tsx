import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

import "./../lib/firebaseConfig";

export default function Contact() {
  const form = useForm();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data.username, data.textarea);
  };

  return (
    <section id="contact" className="font-times">
      <Link to={"/"}>
        <LogOut className="size-8 md:size-12 lg:size-20 text-red-500 absolute top-5 right-5 md:top-10 md:right-10 z-20" />
      </Link>

      <img src="/img/medieval-board.png" alt="scroll" className="h-screen w-screen mx-auto absolute top-0" />
      <div className="absolute top-[15%] md:left-[44%] z-10 bg-[url('/img/scroll.png')] bg-cover p-20 lg:p-16 xl:p-20 w-full md:w-96 space-y-2 ">
        <h3 className="text-primary text-xl xl:text-2xl text-center">
          <strong>High Rank Bounty !</strong>
        </h3>
        <p className="text-center leading-none text-base">bounty for killing some minutes with me via form below !!!</p>
        <Form {...form}>
          <form className="pt-2 relative w-fit" onSubmit={handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name..." {...field} {...register("username")} className="" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="textarea"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Text..." {...field} {...register("textarea")} className="h-40" />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="absolute top-[100%] lg:top-[95%] xl:top-[100%] left-[40%]">
              <img src="/img/stamp.png" alt="stamp" className="size-14 xl:size-16" />
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}

{
  /* <div className="bg-[url('/img/scroll.png')] h-screen mx-auto absolute top-0 lg:left-[37%]"></div> */
}
