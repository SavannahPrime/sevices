
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import PageTransition from '@/components/PageTransition';
import GoogleReviews from '@/components/GoogleReviews';
import ReviewForm from '@/components/ReviewForm';

const Reviews = () => {
  const [activeTab, setActiveTab] = useState("read");
  
  return (
    <PageTransition>
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Client Testimonials</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Don't just take our word for it. See what our clients say about working with SavannahPrime Agency.
              </p>
            </div>
            
            <Tabs defaultValue="read" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="read">Read Reviews</TabsTrigger>
                <TabsTrigger value="write">Write a Review</TabsTrigger>
              </TabsList>
              
              <TabsContent value="read" className="mt-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-semibold">Google Reviews</h2>
                  <a 
                    href="https://g.page/r/CdOkokapJbTsEBI/review" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    View all on Google
                  </a>
                </div>
                <GoogleReviews />
              </TabsContent>
              
              <TabsContent value="write" className="mt-6">
                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-semibold mb-6">Share Your Experience</h2>
                  <p className="text-muted-foreground mb-8">
                    We appreciate your feedback! Please share your experience working with SavannahPrime Agency.
                  </p>
                  <ReviewForm googleReviewLink="https://g.page/r/CdOkokapJbTsEBI/review" />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Reviews;
