import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Mail, Lock, User } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/portfolio");
    }, 1500);
  };

  return (
    // Background: Unsplash Image
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed relative flex items-center justify-center px-6 py-20"
      style={{ backgroundImage: "url('/re/listing_card_6.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Main Card: Keeping the Dark Glassmorphism from the first design */}
      <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 bg-primary rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.2)] relative z-10">
        {/* Left Side: Image with Dark Overlay */}
        <div className="hidden lg:block aspect-3/4 relative group">
          <img
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800"
            // src="https://images.unsplash.com/photo-1600607687940-4e2a09695d51?auto=format&fit=crop&q=80&w=800"
            alt="Luxury Interior"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-all duration-1000" />
          <div className="absolute bottom-12 left-12 right-12">
            <h2 className="text-4xl font-serif text-white mb-4">
              Access the <br />{" "}
              <span className="italic text-accent">Inner Circle</span>
            </h2>
            <p className="text-gray-300 font-light leading-relaxed">
              Sign in to manage your global portfolio and access off-market
              opportunities.
            </p>
          </div>
        </div>

        {/* Right Side: The Dark Form (Contrast against White BG) */}
        <div className="p-8 md:p-16 flex flex-col justify-center bg-primary">
          <div className="mb-10">
            <Link to="/" className="inline-flex items-center gap-2 mb-8 group">
              <div className="w-8 h-8 bg-accent rounded-br-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                <span className="text-primary font-bold">E</span>
              </div>
              <span className="text-white font-bold tracking-tighter">
                EstatePro
              </span>
            </Link>

            <h1 className="text-3xl font-serif text-white mb-2">
              {isLogin ? "Welcome Back" : "Join the Elite"}
            </h1>
            <p className="text-gray-400 text-sm font-light">
              {isLogin
                ? "Enter your credentials to access your private dashboard."
                : "Create an account to start your acquisition journey."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="relative group">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent transition-colors"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 rounded-xl text-white focus:outline-none focus:border-accent/50 transition-all"
                />
              </div>
            )}

            <div className="relative group">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent transition-colors"
                size={18}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 rounded-xl text-white focus:outline-none focus:border-accent/50 transition-all"
              />
            </div>

            <div className="relative group">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent transition-colors"
                size={18}
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 rounded-xl text-white focus:outline-none focus:border-accent/50 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent hover:bg-white text-primary py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-xl"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
              ) : (
                <>
                  {isLogin ? "Authorize Access" : "Create Account"}{" "}
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <p className="text-gray-400 text-xs font-light">
              {isLogin ? "New to EstatePro?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-accent font-bold uppercase tracking-widest hover:text-white transition-colors"
              >
                {isLogin ? "Register Now" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
