
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Send, X, Bot, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Predefined responses for when webhook is unavailable
const fallbackResponses = [
  "I'm sorry, I can't connect to my services right now. How else can I help you?",
  "I understand you need assistance. Please try calling our support team at 555-123-4567.",
  "That's an interesting question. When our services are back online, I'll be able to provide a more detailed answer.",
  "I'd be happy to help with that once my connection is restored. In the meantime, you can check our FAQ section.",
  "I'm still learning. For immediate assistance, please email support@example.com.",
];

const getRandomFallbackResponse = () => {
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sessionId, setSessionId] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Generate a session ID when component mounts
  useEffect(() => {
    const newSessionId = generateSessionId();
    setSessionId(newSessionId);
    
    // Add welcome message
    setMessages([
      {
        id: generateMessageId(),
        text: "Hello! I'm Moran, your virtual assistant. How can I help you today?",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const generateSessionId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const generateMessageId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    // Add user message to chat
    const userMessage = {
      id: generateMessageId(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      // Use the GET webhook URL with user message and session ID as query parameters
      const encodedMessage = encodeURIComponent(userMessage.text);
      const url = `http://localhost:5678/webhook-test/66d55d13-bdff-451e-b486-bd2032884686?sessionId=${sessionId}&message=${encodedMessage}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response from bot');
      }
      
      const data = await response.json();
      
      // Add bot response to chat
      const botMessage = {
        id: generateMessageId(),
        text: data?.message || "I'm sorry, I couldn't process your request.",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
      
      // Use fallback response when webhook is unavailable
      const fallbackMessage = {
        id: generateMessageId(),
        text: getRandomFallbackResponse(),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Chat window */}
      {isOpen && (
        <Card className="w-72 sm:w-80 h-96 mb-2 shadow-lg border border-border bg-background flex flex-col">
          {/* Chat header */}
          <div className="flex items-center justify-between p-2 border-b border-border bg-card">
            <div className="flex items-center gap-1.5">
              <Avatar className="h-6 w-6 bg-primary">
                <Bot className="h-3 w-3 text-primary-foreground" />
              </Avatar>
              <div>
                <h3 className="font-medium text-xs">Moran</h3>
                <p className="text-[10px] text-muted-foreground">Virtual Assistant</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="h-6 w-6">
              <X className="h-3 w-3" />
            </Button>
          </div>
          
          {/* Chat messages */}
          <CardContent className="flex-grow overflow-y-auto p-3 flex flex-col gap-2 bg-white/5">
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-1.5 rounded-lg text-xs ${
                    msg.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-none'
                      : 'bg-muted text-foreground rounded-bl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className="text-[8px] mt-0.5 opacity-70">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] px-3 py-1.5 rounded-lg bg-muted text-foreground rounded-bl-none">
                  <Loader2 className="h-3 w-3 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>
          
          {/* Chat input */}
          <div className="p-2 border-t border-border flex gap-1">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-grow h-8 text-xs"
            />
            <Button 
              onClick={handleSendMessage} 
              disabled={!inputValue.trim() || isLoading}
              size="icon"
              className="h-8 w-8"
            >
              <Send className="h-3 w-3" />
            </Button>
          </div>
        </Card>
      )}
      
      {/* Chat toggle button */}
      {!isOpen && (
        <Button 
          onClick={toggleChat}
          size="icon" 
          className="rounded-full h-10 w-10 shadow-sm"
        >
          <Bot className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default Chatbot;
