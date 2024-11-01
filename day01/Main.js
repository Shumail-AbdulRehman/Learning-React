function customRender(reactElement,mainContainer)

{

    const domElement= document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.child;

    for (const prop in reactElement.props) 
        {
            domElement.setAttribute(prop,reactElement.props[prop])
        }
    mainContainer.appendChild(domElement);
}







const reactElement=
{
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    child: 'Click on this to visit Google'
}

const mainContainer=document.querySelector('#root');

customRender(reactElement,mainContainer)
