
import React from 'react';
import { shallow, mount } from 'enzyme';
import ProductCard from './ProductCard';
import MemoryRouter from 'react-router-dom';

test('ProductCard goes to SingleProduct when clicking on it', () => {
    const productCard = mount(
        <MemoryRouter>
            <ProductCard id="10" price={20.95} title="Lorem ipsum dolor sit amet." url="images['9.jpg']" />
        </MemoryRouter>);
    expect(productCard.find('[href="/singleProduct/10"]').length).toBe(1);
});