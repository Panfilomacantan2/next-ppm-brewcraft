import Section from "./Section";
import SectionHeading from "./SectionHeading";

// export default function Contact() {
//   return (
//     <Section id="contact">
//       <SectionHeading className="font-medium px-3">Contact</SectionHeading>
//     </Section>
//   );
// }

import React from "react";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactPage() {
  const onSubmit = (e: any) => e.preventDefault();
  return (
    <Section id="contact" className="flex items-center justify-center">
      <div className="w-full max-w-4xl rounded-lg py-8">
        <SectionHeading className="mt-10 text-3xl font-bold lg:text-5xl">
          Contact Us
        </SectionHeading>

        <SectionHeading className="my-8 text-base text-foreground/90 lg:my-4">
          We&apos;d love to hear from you! Send us a message using the form
          below.
        </SectionHeading>

        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <Label htmlFor="name">First name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <Label htmlFor="name">Email Address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter the subject"
            />
          </div>

          <div>
            <Label htmlFor="message"> Message</Label>

            <Textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Write your message here"
            ></Textarea>
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-yellow-600/90  md:w-auto active:outline-none focus:outline-none"
              onClick={onSubmit}
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
}
