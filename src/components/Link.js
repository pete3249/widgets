import React from 'react';

const Link = ({clasName, href, children}) => {
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        window.history.pushState({}, '', href)
        const navEvent = new PopStateEvent('popstate');
        // communicate to route components that url has changed
        window.dispatchEvent(navEvent);
    };

    return (
        <a onClick={onClick} className={clasName} href={href}>
            {children}
       </a>
    );
}

export default Link