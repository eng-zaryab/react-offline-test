import React from 'react';
import { render, screen } from '@testing-library/react';
import EnergyMix from './EnergyMix';

// Running the tests to render the chart data
test('renders energy mix chart', () => {
    render(<EnergyMix />);
    expect(screen.getByText('UK Energy Generation Mix')).toBeInTheDocument();
});
