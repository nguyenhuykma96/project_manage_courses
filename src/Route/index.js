import React from 'react';
import { Route } from 'react-router-dom';

const RouteNormal = ({
    layout: Layout,
    component: Component,
    ...props
}) => {
    if (!Layout) {
        return (
            <Route render={ (props) => <Component {...props} />} {...props}  />
                
            
        )}
    return (
        <Layout>
            <Route render={ (props) => <Component {...props} />} {...props}  />
        </Layout>
    );
};

export default RouteNormal;
