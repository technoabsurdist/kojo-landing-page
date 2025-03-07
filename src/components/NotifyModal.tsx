
import { useState } from "react";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { KojoButton } from "./KojoButton";

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotifyModal = ({ isOpen, onClose }: NotifyModalProps) => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    // This would connect to your backend in a real implementation
    toast({
      title: "Thank you!",
      description: "We'll notify you when Kojo launches!",
    });
    
    setEmail("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="card-kojo w-full max-w-md bg-white animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Get notified on release</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl border-2 border-black focus:outline-none focus:ring-2 focus:ring-kojo-purple"
              required
            />
          </div>
          
          <KojoButton variant="teal" className="w-full">
            Notify Me
          </KojoButton>
        </form>
        
        <p className="mt-4 text-sm text-gray-500 text-center">
          We'll only email you when Kojo is ready. No spam, promise!
        </p>
      </div>
    </div>
  );
};
