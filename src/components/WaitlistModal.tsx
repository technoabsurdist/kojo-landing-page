import { useState } from "react";
import { X, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { KojoButton } from "./KojoButton";
import { supabase } from "@/lib/supabase";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Submitting email to waitlist:", email);

      // Insert email into the waitlist table
      const { error: supabaseError, data } = await supabase
        .from("waitlist")
        .insert([
          {
            email,
            source: "landing-page",
          },
        ])
        .select();

      console.log("Supabase response:", { error: supabaseError, data });

      if (supabaseError) {
        console.error("Error submitting to waitlist:", supabaseError);

        // Check if it's a duplicate email error
        if (supabaseError.code === "23505") {
          setError("This email is already on our waitlist!");
          toast({
            title: "Already registered",
            description: "This email is already on our waitlist!",
            duration: 5000,
          });
        } else {
          setError("Failed to join waitlist. Please try again.");
          toast({
            title: "Submission error",
            description: "Failed to join waitlist. Please try again.",
            duration: 5000,
          });
        }
      } else {
        // Success case
        setEmail("");
        toast({
          title: "You're on the list!",
          description: "We'll email you when Kojo launches.",
          duration: 5000,
        });
        // Add a half-second delay before closing the modal
        setTimeout(() => {
          onClose();
        }, 500);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      if (err instanceof Error) {
        console.error("Error message:", err.message);
        console.error("Error stack:", err.stack);
      }
      setError("An unexpected error occurred. Please try again.");
      toast({
        title: "Submission error",
        description: "An unexpected error occurred. Please try again.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="card-kojo w-full max-w-md bg-white animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Join our waitlist</h2>
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

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <KojoButton variant="teal" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Join Waitlist"}
          </KojoButton>
        </form>

        <p className="mt-4 text-sm text-gray-500 text-center">
          We'll only email you when Kojo is ready for you!
        </p>
      </div>
    </div>
  );
};
