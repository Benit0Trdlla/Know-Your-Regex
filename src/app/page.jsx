'use client';
import { useChat } from '@ai-sdk/react';
import { ModeToggle } from "@/components/ModeToggle";
import { ToggleSwitch } from "@/components/ui/toggle-switch";
import { AIChatInput } from "@/components/ui/ai-chat-input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col h-screen my-auto items-center">
      <div className="flex gap-3 items-center mt-6 sm:gap-5">
        <div className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-regex"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5z" /><path d="M17 7.875l3 -1.687" /><path d="M17 7.875v3.375" /><path d="M17 7.875l-3 -1.687" /><path d="M17 7.875l3 1.688" /><path d="M17 4.5v3.375" /><path d="M17 7.875l-3 1.688" /></svg>
          <span className="font-semibold">Know Your Regex</span>
        </div>
        <hr className="h-6 border-r-3" />
        <ModeToggle />
        <span>v0.0.1</span>
        <Select>
          <SelectTrigger className="w-auto">
            <SelectValue placeholder="ES" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ES">ES</SelectItem>
            <SelectItem value="EN">EN</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        {messages.map(message => (
          <div key={message.id} className="whitespace-pre-wrap">
            {message.role === 'user' ? 'User: ' : 'AI: '}
            {message.parts.map((part, i) => {
              switch (part.type) {
                case 'text':
                  return <div key={`${message.id}-${i}`}>{part.text}</div>;
              }
            })}
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          {/* <input
            className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          /> */}
          <AIChatInput />
        </form>
      </div>
    </div>
  );
}