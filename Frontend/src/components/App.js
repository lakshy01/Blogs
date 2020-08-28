import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogList from '../Blog/BlogList';
import BlogDetail from '../Blog/BlogDetail';

const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <div>
                <Route path="/blog" exact component={BlogList} />
                <Route path="/BlogDetail" exact component={BlogDetail} />
            </div>
            <Footer />
        </BrowserRouter>
    )

}

export default App;