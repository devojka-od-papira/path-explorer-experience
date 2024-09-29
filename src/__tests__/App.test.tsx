import { render, screen } from '@testing-library/react';

import App from '../App';

test('Test app render', () => {
	render(<App />);

	const main = screen.getByTestId('test');
	expect(main).toHaveTextContent('Hello');
});
