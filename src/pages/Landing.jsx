import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [longUrl, setLongUrl] = useState();
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        Shorten It. Share It. Track It
      </h2>
      <form
        onSubmit={handleShorten}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
      >
        <Input
          type="url"
          value={longUrl}
          placeholder="Enter your loooong URL!!!"
          onChange={(e) => setLongUrl(e.target.value)}
          className="h-full flex-1 py-4 px-4"
        />
        <Button className="h-full" type="submit" variant="destructive">
          Shorten
        </Button>
      </form>

      <img
        src="banner.png"
        alt="banner"
        className="w-full max-w-5xl mx-auto my-11 md:px-11"
      />

      <h2 className="text-2xl font-semibold mb-4">
        Frequently Asked Questions
      </h2>
      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is a URL shortener?</AccordionTrigger>
          <AccordionContent>
            A URL shortener is a tool that converts long, complex URLs into
            shorter, easy-to-share links.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How does your URL shortener work?</AccordionTrigger>
          <AccordionContent>
            Simply paste your long link into the input box, click "Shorten", and
            we’ll instantly generate a compact URL for you to use.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            Can I track how many times my short link was clicked?
          </AccordionTrigger>
          <AccordionContent>
            Yes! If you are logged in, we provide real-time analytics including
            click count, location, device type, and more.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Landing;
