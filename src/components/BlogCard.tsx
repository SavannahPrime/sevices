
import React from 'react';
import { Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageWithFallback from './ui/image-with-fallback';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorImage?: string;
  category: string;
  tags: string[];
  featuredImage: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20 group h-full flex flex-col">
      <div className="aspect-[16/9] overflow-hidden">
        <ImageWithFallback
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-3">
          <span className="text-xs font-medium px-2.5 py-0.5 bg-primary/10 text-primary rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground ml-auto flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {post.readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-primary line-clamp-2">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="flex items-center text-sm text-muted-foreground mt-auto">
          {post.authorImage && (
            <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
              <ImageWithFallback
                src={post.authorImage}
                alt={post.author}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <span className="mr-4">{post.author}</span>
          <Calendar className="h-4 w-4 mr-1" />
          <span>{post.date}</span>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <Link 
            to={`/blog/${post.id}`} 
            className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center"
          >
            Read more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
