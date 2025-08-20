import { Markdown } from "../markdown";

const AIChat = ({ messages }) => {
    return (
        <div className='h-95 overflow-y-scroll px-6 sm:px-0'>
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
    )
}
export { AIChat };