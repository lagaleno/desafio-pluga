// Jest imports
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'intersection-observer';

// Component import
import ToolDialog from '@/components/ToolDialog';

// Mock import
import toolsMock from "../__mocks__/toolsMock.json";
import recentViewedToolsMock from "../__mocks__/recentViewedToolsMock.json"

// { open, handleCloseModal, tool, recentlyViewedTools }
describe ('Tool Dialog', () => {
    it ('Renders component correctly', () => {
        toolsMock.forEach((tool) => {
            const { container } = render (<ToolDialog open handleCloseModal={jest.fn()} tool={tool}  recentlyViewedTools={recentViewedToolsMock} />)
            expect(container).toMatchSnapshot()
        })           
    })
})