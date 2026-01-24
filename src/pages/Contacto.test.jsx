import { render, screen } from '@testing-library/react';
import Contacto from './Contacto';
import '@testing-library/jest-dom';

// Mock the Formulario component as it's an external dependency
jest.mock('../assets/modules/formulario/Formulario', () => {
  return () => <div data-testid="formulario-mock">Formulario Component</div>;
});

// Mock the LanguageContext to avoid errors with useLanguage hook
jest.mock('../i18n/LanguageContext', () => ({
  useLanguage: () => ({
    t: (key) => key, // Simply return the key for testing
    language: 'ES',
    setLanguage: jest.fn(),
  }),
}));

describe('Contacto', () => {
  test('renders without crashing', () => {
    render(<Contacto />);
    expect(screen.getByTestId('formulario-mock')).toBeInTheDocument();
  });

  test('renders the Formulario component', () => {
    render(<Contacto />);
    expect(screen.getByTestId('formulario-mock')).toHaveTextContent('Formulario Component');
  });
});
