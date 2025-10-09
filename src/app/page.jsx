'use client'
import { useChat } from '@ai-sdk/react';
import { useQueryState } from 'nuqs'
import { toast } from 'sonner'
import { AIChatInput } from "@/components/ui/ai-chat-input"
import { Navbar } from '@/components/ui/navbar';
import { AIChat } from '@/components/ui/ai-chat';
import { useHidratationSolution } from '@/hooks/useHidratationSolution';
import { getLanguage } from '@/lib/language';

export default function Home() {
  const isClient = useHidratationSolution();
  const [activeOption] = useQueryState("type");
  const language = getLanguage();
  // console.log('HOME COMP', language);

  const { messages, input, handleInputChange, handleSubmit, status } = useChat({
    onError: () => toast.error('Su tarifa se ha agotado. Puede volver a intentarlo más tarde.'),
    body: {
      type: activeOption ? activeOption : 'encontrar',
      language
    },
  });

  if (status === 'error') {
    toast.error(status.message);
  }


  return (
    <div className="flex flex-col h-screen my-auto items-center">
      <Navbar />
      <div className="w-full max-w-md pb-10 mt-6 mx-auto stretch">
        <AIChat messages={messages} />
        <form onSubmit={handleSubmit}>
          <AIChatInput input={input} onChange={handleInputChange} status={status} />
        </form>
      </div>
    </div>
  );
}