'use client';
import { useChat } from '@ai-sdk/react';
import { useQueryState } from 'nuqs'
import { AIChatInput } from "@/components/ui/ai-chat-input"
import { Navbar } from '@/components/ui/navbar';
import { Markdown } from '@/components/markdown';
export default function Home() {
  const [activeOption] = useQueryState("type");

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    body: { type: activeOption ? activeOption : 'encontrar' },
  });

  const sendQuestion = () => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <div className="flex flex-col h-screen my-auto items-center">
      <Navbar />

      <div className="flex flex-col w-full max-w-md py-10 mx-auto stretch">
        <div className='h-100 overflow-y-scroll px-6 sm:px-0'>
          {messages.map(message => (
            <div key={message.id} className="whitespace-pre-wrap">
              {message.role === 'user' ? 'User: ' : 'AI: '}
              {message.parts.map((part, i) => {
                switch (part.type) {
                  case 'text':
                    return (
                      <Markdown key={`${message.id}-${i}`} children={part.text}>
                        {part.text}
                      </Markdown>
                    )
                }
              })}
            </div>
          ))}
        </div>

        <form onSubmit={sendQuestion}>
          <AIChatInput input={input} onChange={handleInputChange} />
        </form>
      </div>
    </div>
  );
}