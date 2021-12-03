import faker from 'faker';

const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number(10)} items in your cart.</div>`

    el.innerHTML = cartText;
}

if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector("#cart-dev");

    console.log("hello");

    if(el) mount(el);
}

export { mount };