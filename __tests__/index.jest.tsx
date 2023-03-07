// Jest imports
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'intersection-observer';

// Component import
import Home from './../src/pages'

// Mock import
import toolsMock from "../__mocks__/toolsMock.json";

describe ('Home', () => {
    it( 'Renders components correctly', () => {
        const { container } = render (<Home tools={toolsMock} />)
        expect(container).toMatchSnapshot()
    })
})