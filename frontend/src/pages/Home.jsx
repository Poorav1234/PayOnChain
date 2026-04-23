import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Globe, Webhook, Key, CreditCard, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center" style={{ padding: '5rem 0 4rem' }}>
        <div className="badge badge-success mb-4" style={{ display: 'inline-flex', gap: '0.5rem' }}>
          <CheckCircle2 size={12} /> Live on Ethereum Sepolia
        </div>
        <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em', maxWidth: '720px', margin: '0 auto 1.5rem' }}>
          Accept Crypto Payments <span className="title-gradient">Easily</span>
        </h1>
        <p className="text-secondary text-lg leading-relaxed mb-10" style={{ maxWidth: '560px', margin: '0 auto 2.5rem' }}>
          A modern payment gateway for Web3. Accept Ethereum payments with simple APIs, instant settlements, and a beautiful hosted checkout.
        </p>
        <div className="flex gap-4 justify-center flex-wrap mb-10">
          <Link to="/merchant/register" className="btn btn-primary btn-lg">
            Get Started Free <ArrowRight size={18} />
          </Link>
          <Link to="/about" className="btn btn-secondary btn-lg">
            View Documentation
          </Link>
        </div>
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-sm text-muted">
            <Lock size={14} /> End-to-end encrypted
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <Shield size={14} /> On-chain verified
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <Zap size={14} /> Instant settlement
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="text-center mb-12">
          <h2 style={{ fontSize: '1.875rem', fontWeight: 800, marginBottom: '0.75rem' }}>
            Everything you need to accept crypto
          </h2>
          <p className="text-secondary text-lg mx-auto" style={{ maxWidth: '560px' }}>
            Built for developers, designed for businesses. PayOnChain handles payments so you can focus on your product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: 'Instant Settlement', desc: 'Funds are settled directly to your wallet via smart contracts. No banks, no delays.' },
            { icon: Shield, title: 'Trustless Security', desc: 'Every transaction is verified on the Ethereum blockchain for maximum transparency.' },
            { icon: Globe, title: 'Global Payments', desc: 'Accept payments from anyone, anywhere. Zero border restrictions, zero FX fees.' },
            { icon: Key, title: 'API Key Auth', desc: 'Familiar REST APIs with secure API key authentication. Integrate in minutes.' },
            { icon: Webhook, title: 'Webhooks', desc: 'Get real-time notifications when payments are confirmed on-chain.' },
            { icon: CreditCard, title: 'Hosted Checkout', desc: 'Beautiful, branded checkout pages that your customers trust and love.' },
          ].map((f, i) => (
            <div key={i} className="card card-interactive" style={{ padding: '1.75rem' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'rgba(79, 70, 229, 0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1rem', color: 'var(--accent-primary)'
              }}>
                <f.icon size={20} />
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{f.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>
          Ready to accept crypto payments?
        </h2>
        <p className="text-secondary mb-8 mx-auto" style={{ maxWidth: '480px' }}>
          Join merchants worldwide using PayOnChain to accept Ethereum payments with zero hassle.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/merchant/register" className="btn btn-primary btn-lg">Start for Free</Link>
          <Link to="/about" className="btn btn-secondary btn-lg">Learn More</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
