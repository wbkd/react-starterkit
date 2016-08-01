import React from 'react';
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

const App = (props) => {
    return (
      <div>
        <Header />
        <div className="content">
          {props.children}
        </div>
          <Footer />
      </div>
    );
};

export default App;