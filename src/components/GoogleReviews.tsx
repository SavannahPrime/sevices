
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Review {
  id: string;
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

interface GoogleReviewsProps {
  placeId?: string;
  className?: string;
}

const GoogleReviews: React.FC<GoogleReviewsProps> = ({ 
  placeId = "CdOkokapJbTsEBI",
  className
}) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // For demo purposes, using mock data instead of actual API call
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // In a real implementation, you would fetch from the Google Places API
        // This requires a server-side component to protect your API key
        
        // Mock data for demonstration
        const mockReviews: Review[] = [
          {
            id: '1',
            author_name: 'John Doe',
            profile_photo_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            rating: 5,
            text: 'SavannahPrime Agency delivered an exceptional website that has transformed our business. Their attention to detail and technical expertise is unmatched.',
            relative_time_description: '3 weeks ago'
          },
          {
            id: '2',
            author_name: 'Mary Smith',
            profile_photo_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            rating: 4,
            text: 'Great service and professional team. The AI chatbot they built has reduced our customer response time significantly.',
            relative_time_description: '1 month ago'
          },
          {
            id: '3',
            author_name: 'David Mwaniki',
            profile_photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            rating: 5,
            text: 'Working with SavannahPrime was a game changer for our business. Their solutions are innovative and effective.',
            relative_time_description: '2 months ago'
          }
        ];
        
        setTimeout(() => {
          setReviews(mockReviews);
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to load reviews. Please try again later.');
        setIsLoading(false);
        console.error('Error fetching Google reviews:', err);
      }
    };

    fetchReviews();
  }, [placeId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      {reviews.map((review) => (
        <div key={review.id} className="glass-card rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img
                src={review.profile_photo_url}
                alt={review.author_name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium">{review.author_name}</h4>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < review.rating ? "text-primary fill-primary" : "text-muted-foreground"
                    )}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-2">
                  {review.relative_time_description}
                </span>
              </div>
            </div>
          </div>
          <p className="text-foreground/90">{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default GoogleReviews;
