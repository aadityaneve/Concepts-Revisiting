import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { NoMatch } from './components/NoMatch';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
import { Featured } from './components/Featured';
import { New } from './components/New';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import { Profile } from './components/Profile';
import { AuthProvider } from './components/auth';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequireAuth';
const LazyAbout = React.lazy(() => import('./components/About'));

function App() {
    return (
        <div className='App'>
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='about' element={<About />} /> */}
                    <Route
                        path='about'
                        element={
                            <React.Suspense fallback='Loading.....'>
                                <LazyAbout />
                            </React.Suspense>
                        }
                    />
                    <Route path='order-summary' element={<OrderSummary />} />
                    <Route path='products' element={<Products />}>
                        <Route index element={<Featured />} />
                        <Route path='featured' element={<Featured />} />
                        <Route path='new' element={<New />} />
                    </Route>
                    <Route path='users' element={<Users />}>
                        <Route path=':userId' element={<UserDetails />} />
                        <Route path='admin' element={<Admin />} />
                    </Route>
                    <Route
                        path='profile'
                        element={
                            <RequireAuth>
                                <Profile />
                            </RequireAuth>
                        }
                    />
                    <Route path='login' element={<Login />} />
                    <Route path='*' element={<NoMatch />} />
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
