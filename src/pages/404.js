import React from 'react';
import Layout from '@/components/Layout';
import Link from '../resolvers/Link';

const NotFoundPage = () => (
  <Layout nav>
    <section className="block block__404">
        <div className="container">
          <h1 className="section-heading">404</h1>
          <h2>Page Not Found</h2>
          <p>We can’t seem to find the page you’re looking for. Try going back to the previous page.</p>
          <Link to='/' className='button button--standard'>Back to Home</Link>
        </div>
    </section>
  </Layout>
);

export default NotFoundPage;
