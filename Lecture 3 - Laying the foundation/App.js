import React from 'react';
import ReactDOM from 'react-dom/client';

// React Elements

// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Namaste React");

const element = <span>React Elements</span>
// const title = (
//     <h1 className='head' tabIndex="5">
//         Namaste React using JSX !
//         <HeadingCOmponent2 />
//     </h1>
// )

//jsx - not html in js it's like html syntax
const jsxHeading = (<h1 className='head' tabIndex="5">Hi BoSs</h1>);
const number = 10000;

// React functional component
const HeadingCOmponent = () =>
(<div id='container'>
    {/* <HeadingCOmponent2 /> */}
    {title}
    <h2>{number}</h2>
    <h1 className='heading'>Functional component</h1>
</div>)


const HeadingCOmponent2 = () => <h1>Functional component2</h1>

const title = (
    <h1 className='head' tabIndex="5">
        {element}
        Namaste React using JSX !
        {/* <HeadingCOmponent /> */}
    </h1>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingCOmponent />);
