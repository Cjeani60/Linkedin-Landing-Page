import { useMutation } from "@tanstack/react-query";
import { type InsertInquiry } from "@shared/schema";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

// Since shared/routes wasn't strictly provided with the Zod schema in the prompt 
// (the prompt had schemas in @shared/schema but routes manifest in @shared/routes),
// we will assume the structure matches the request.
// If strictly following the prompt's provided routes_manifest:

export function useCreateInquiry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      // Direct fetch matching the routes manifest provided in prompt
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to send inquiry');
      }

      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
