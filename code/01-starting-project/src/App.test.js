//this is the file to test the App component 
import { render, screen } from '@testing-library/react'; 
import App from './App'; 

// with in the test function is the description of the test that is upto u.. 
test('My test one', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); //it checks typeof query is in the doc and displays test will pass or fail
});
