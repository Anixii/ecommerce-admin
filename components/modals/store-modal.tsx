"use client";
import React from "react";
import Modal from "../ui/modal";
import * as z from "zod";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const formSchema = z.object({
  name: z.string().min(1),
});
const StoreModal = () => {
  const isOpen = useStoreModal((state) => state.isOpen);
  const onClose = useStoreModal((state) => state.onClose);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  const onHandleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <>
      hello
      <Modal
        title="Create a store"
        description="Add a new stotre to manage products and categories"
        isOpen={isOpen}
        onClose={onClose}
      >
        <div>
          <article className="space-y-4 py-2 pb-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onHandleSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="E-Commerce" {...field} />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <div className="pt-6 fkex space-x-2 items-center justify-end w-full">
                  <Button variant={"default"} type="submit">
                    Continue
                  </Button>
                  <Button variant={"outline"} onClick={onClose}>
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          </article>
        </div>
      </Modal>
    </>
  );
};

export default StoreModal;
