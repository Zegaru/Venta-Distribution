import { Route } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

export default function RouteLayout({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => (
        <div className="tracking-widest font-proxima-nova">
          <Header />
          {children}
          <Footer />
        </div>
      )}
    />
  );
}
