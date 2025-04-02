import { useState } from 'react';
import { Star } from 'lucide-react';
import { toast } from "sonner";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface ReviewFormProps {
  googleReviewLink?: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ 
  googleReviewLink = "https://g.page/r/CdOkokapJbTsEBI/review" 
}) => {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For demonstration purposes, we're simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // If rating is below 3, keep the review private
      if (rating < 3) {
        toast.success("Thank you for your feedback! We'll use it to improve our services.");
        // Here you would typically save the review to your database
      } else {
        // For ratings 3 and above, redirect to Google Reviews
        toast.success("Thank you for your positive feedback! Please share it on Google Reviews.", {
          action: {
            label: "Post on Google",
            onClick: () => window.open(googleReviewLink, "_blank"),
          },
        });
        // Open Google Review in a new tab
        window.open(googleReviewLink, "_blank");
      }
      
      // Reset form
      setRating(0);
      setReviewText("");
      setName("");
      setEmail("");
    } catch (error) {
      toast.error("Failed to submit review. Please try again.");
      console.error("Error submitting review:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Your Rating</label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRatingClick(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="transition-all focus:outline-none"
            >
              <Star 
                className={`w-8 h-8 ${
                  star <= (hoveredRating || rating)
                    ? "text-primary fill-primary"
                    : "text-muted-foreground"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          required
        />
      </div>

      <div>
        <label htmlFor="review" className="block text-sm font-medium mb-2">Your Review</label>
        <Textarea
          id="review"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          rows={4}
          required
        />
      </div>

      <Button 
        type="submit" 
        className="w-full"
        disabled={!rating || !reviewText || !name || !email || isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  );
};

export default ReviewForm;
