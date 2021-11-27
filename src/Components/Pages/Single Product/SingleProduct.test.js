import {render,screen,cleanup} from '@testing-library/react'
import Single from './SingleProduct'

test('should render product', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    render(<Single/>);
    const singleElement =screen.getByTestId('todo-1');
    expect(singleElement).toBeInTheDocument();
    expect(singleElement).toHaveTextContent('')
})