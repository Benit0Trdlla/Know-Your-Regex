'use client';
import { useChat } from '@ai-sdk/react';
import { useQueryState } from 'nuqs'
import { AIChatInput } from "@/components/ui/ai-chat-input"
import { Navbar } from '@/components/ui/navbar';
import { AIChat } from '@/components/ui/ai-chat';
export default function Home() {
  const [activeOption] = useQueryState("type");

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    body: { type: activeOption ? activeOption : 'encontrar' },
  });

  // const sendQuestion = () => {
  //   event.preventDefault();
  //   handleSubmit();
  // };

  return (
    <div className="flex flex-col h-screen my-auto items-center">
      <Navbar />

      <div className="flex flex-col w-full max-w-md py-10 mx-auto stretch">
        <AIChat messages={messages} />

        <form onSubmit={handleSubmit}>
          <AIChatInput input={input} onChange={handleInputChange} />
        </form>
      </div>
    </div>
  );
}