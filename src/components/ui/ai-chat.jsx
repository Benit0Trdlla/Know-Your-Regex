import { Markdown } from "../markdown";
import { Conversation, ConversationContent, ConversationScrollButton } from "../ai-elements/conversation";
import { Message, MessageContent } from "../ai-elements/message";
import { Response } from "../ai-elements/response";

const AIChat = ({ messages }) => {
    return (
        <div className='h-95 overflow-y-scroll px-6 sm:px-0'>
            {/* {messages.map(message => (
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
            ))} */}
            <Conversation>
                <ConversationContent>
                    {messages.map((message) => (
                        <Message from={message.role} key={message.id}>
                            <MessageContent>
                                {message.parts.map((part, i) => {
                                    switch (part.type) {
                                        case 'text': // we don't use any reasoning or tool calls in this example
                                            return (
                                                <Response key={`${message.id}-${i}`}>
                                                    {part.text}
                                                </Response>
                                            );
                                        default:
                                            return null;
                                    }
                                })}
                            </MessageContent>
                        </Message>
                    ))}
                </ConversationContent>
                <ConversationScrollButton />
            </Conversation>
        </div>
    )
}
export { AIChat };