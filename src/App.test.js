import React from 'react';
import { render, screen, within } from '@testing-library/react';
import $ from 'jquery';
import App from './App';
import resumeData from '../public/resumeData.json';

jest.mock('react-ga', () => ({ initialize: jest.fn(), pageview: jest.fn() }));
jest.mock('jquery', () => ({ ajax: jest.fn() }));
jest.mock('./utils/Axios/axiosConfig', () => ({ get: jest.fn(() => Promise.resolve({ data: { current: { condition: { code: 1000 } } } })) }));

it('loads the current profile and renders each project with its destination', () => {
  $.ajax.mockImplementation(({ success }) => success(resumeData));
  render(<App />);

  expect(screen.getByRole('heading', { name: 'NOVA Iceland' })).toBeInTheDocument();
  expect(screen.getByText('Reykjavík, Iceland')).toBeInTheDocument();
  expect(screen.queryByText(/Wylerfeldstrasse/)).not.toBeInTheDocument();
  for (const project of resumeData.portfolio.projects) {
    const link = screen.getByRole('link', { name: `Explore ${project.title}` });
    expect(link).toHaveAttribute('href', project.url);
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    const card = within(link.closest('article'));
    expect(card.getByRole('heading', { name: project.title })).toBeInTheDocument();
    expect(card.getByText(project.category)).toBeInTheDocument();
  }
});
