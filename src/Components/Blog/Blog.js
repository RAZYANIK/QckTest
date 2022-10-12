import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-slate-400 m-5 p-5'>
                <h1 className='bg-black text-white font-bold' > What is the purpose of React Router?</h1>
                <p>A tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform.</p>
            </div>
            <div className='bg-slate-500 m-5 p-5'>
                <h1 className='bg-black text-white font-bold'> How Dose Context Api works?</h1>
                <p>The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It’s aimed at solving the problem of prop drilling.Before the Context API, we could use a module to solve this, which led to the increasing popularity of state management libraries like Redux. Libraries like Redux allows you to get data from the store easily, anywhere in the tree. However, let’s focus on the Context API.The Context API has actually always been there but was considered experimental. Moving forward the API was improved to stability, and as of the release of version 16.3, the feature was made available and subsequently considered a new addition to the clan of features that make React a wonderful framework.

                    Before now many of the tools we have been used to like react-redux, react-native-flux, MobX-react, and react-router all used context to function, so you were probably already using and loving it, even if not directly. So let’s learn how best to use it.</p>
            </div>
            <div className='bg-slate-600 m-5 p-5 '>
                <h1 className='bg-black text-white font-bold'> What is useRef hook?</h1>
                <p>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.

                    Syntax:

                    const refContainer = useRef(initialValue);
                    <br />
                    The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
            </div>
        </div>
    );
};

export default Blog;