import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { posts } from "./Blog";
import { ArrowLeft, Calendar } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="section-padding max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-3xl font-semibold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="section-padding max-w-3xl mx-auto">
        <Link to="/blog" className="text-primary text-sm flex items-center gap-2 mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">{post.category}</span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-8">{post.title}</h1>
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((para, i) => {
            if (para.startsWith('**') && para.endsWith('**')) {
              return <h3 key={i} className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">{para.replace(/\*\*/g, '')}</h3>;
            }
            if (para.includes('**')) {
              const parts = para.split(/\*\*(.*?)\*\*/g);
              return (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                  {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-foreground">{part}</strong> : part)}
                </p>
              );
            }
            return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</p>;
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-border bg-secondary rounded-2xl p-8 text-center">
          <h3 className="font-heading text-xl font-semibold mb-4">Have Questions?</h3>
          <p className="text-muted-foreground mb-6">Consult with Dr. Manya Thakur for personalized advice.</p>
          <a href="https://wa.me/919827947023" target="_blank" rel="noopener noreferrer" className="bg-gradient-gold text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-gold inline-block">
            Book Consultation
          </a>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
