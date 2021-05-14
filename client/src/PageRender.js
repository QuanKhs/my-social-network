import React from 'react';
import lazy from 'react';
import { useParams } from 'react-router-dom';
import NotFound from 'components/NotFound';

const generatePage = (page) => {
    const component = () => lazy(() => import(`pages/${page}`));

    try {
        return React.createElement(component());
    } catch {
        <NotFound />
    }
}
export default function PageRender() {
    const { page, id } = useParams();
    let pageName = '';
    if (id) {
        pageName = `${page}/[id]`;
    } else {
        pageName = `${page}`;
    }
    return (
        generatePage(pageName)
    )
}
