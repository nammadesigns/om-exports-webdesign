import { Link } from 'react-router-dom';

export function ServicesPage() {
  return (
    <div className="bg-surface grainy-bg text-on-surface min-h-screen pt-32">
      <div className="px-margin-desktop max-w-container-max mx-auto py-section-gap">
        <div className="text-center mb-16">
          <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h1 className="font-display-xl text-display-xl text-primary mb-6">
            End-to-End Export Solutions
          </h1>
          <p className="text-on-surface-variant font-body-rt max-w-2xl mx-auto">
            From sourcing to shipping, we provide comprehensive agricultural export services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-16">
          {[
            {
              icon: 'agriculture',
              title: 'Sourcing & Procurement',
              desc: 'Direct relationships with 5,000+ farmers across India ensuring premium quality and fair trade practices.',
            },
            {
              icon: 'verified',
              title: 'Quality Assurance',
              desc: 'Multi-stage QC with SGS certification, lab testing for moisture, purity, and international standards compliance.',
            },
            {
              icon: 'inventory_2',
              title: 'Warehousing',
              desc: '50,000 sq ft climate-controlled facilities with real-time inventory tracking and cold storage capabilities.',
            },
            {
              icon: 'local_shipping',
              title: 'Logistics & Shipping',
              desc: 'Strategic partnerships with major shipping lines for FCL/LCL shipments to 50+ countries.',
            },
            {
              icon: 'description',
              title: 'Documentation',
              desc: 'Complete export documentation including phyto-sanitary certificates, certificates of origin, and customs paperwork.',
            },
            {
              icon: 'payments',
              title: 'Trade Finance',
              desc: 'Flexible payment terms and LC processing support with major international banks.',
            },
          ].map((service, idx) => (
            <div key={idx} className="group bg-surface-container-lowest p-8 rounded-xl ambient-shadow border border-outline-variant/20 hover:border-secondary transition-all">
              <div className="w-14 h-14 rounded bg-primary flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                <span className="material-symbols-outlined text-white text-3xl">{service.icon}</span>
              </div>
              <h3 className="font-subheading-md text-primary mb-4">{service.title}</h3>
              <p className="text-on-surface-variant font-body-rt">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary p-12 rounded-xl text-center">
          <h2 className="font-headline-lg text-headline-lg-mobile text-primary-fixed mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-on-primary-container font-body-rt max-w-xl mx-auto mb-8">
            Our trade experts can design a tailored export program specific to your market needs.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-secondary-fixed text-primary px-8 py-4 font-button-text rounded-lg hover:bg-white transition-colors">
              Request Consultation
            </button>
            <Link to="/products" className="border border-white/30 text-white px-8 py-4 font-button-text rounded-lg hover:bg-white/10 transition-colors">
              View Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
