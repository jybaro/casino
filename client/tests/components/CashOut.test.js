import React from 'react';
import { shallow } from 'enzyme';
import {CashOut} from '../components/CashOut';

describe('Probando componente CashOut', () => {
    test('debe mostrar <CashOut> correctamente', () => {
        const wrapper = shallow(<CashOut />);
        expect(wrapper).toMatchSnapshot();
    })
    
});