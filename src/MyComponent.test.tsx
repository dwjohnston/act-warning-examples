import React from "react";
import { Example1 } from "./Example1";
import { render, screen, fireEvent} from "@testing-library/react";
import { describe, expect, it, jest } from "@jest/globals";
import '@testing-library/jest-dom/jest-globals'
import { Example2 } from "./Example2";
import { Example3 } from "./Example3";
import { Example4 } from "./Example4";
import { Example5 } from "./Example5";



/**
 * Simple example where:
 *  - Async funtion passed as a prop
 *  - fireEvent to trigger it
 *  - state change after awaiting the async function 
 * 
 * 
 * Has act warning ✅
 */
describe(Example1, () => {
    
    it("renders", async () => {

        const mockFn = jest.fn(async () => {});
        render(<Example1 onClick={mockFn}/>);
        expect(screen.getByText("Hello, World!")).toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", {name: "Click me"}));
        expect(mockFn).toHaveBeenCalled();
    })
}); 

/**
 * Similar example, but instead of passing an async function in
 * we call a module scoped async function
 * 
 * Has act warning: ❌

 */
describe(Example2, () => {
    
    it("renders", async () => {
        render(<Example2 />);
        expect(screen.getByText("Hello, World!")).toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", {name: "Click me"}));
    })
}); 


/**
 * We pass in an async function
 * But instead of firing it onClick
 * We fire it on mount.

 * 
 * Has act warning ✅
 */
describe(Example3, () => {
    
    it("renders", async () => {
        const mockFn = jest.fn(async () => {});

        render(<Example3  onMount={mockFn}/>);
        expect(screen.getByText("Hello, World!")).toBeInTheDocument();

        expect(mockFn).toHaveBeenCalled();
    })
}); 

/**
 * Convoluted example: 
 * 
 * The onClick function takes a callback
 * We call the onClick when clicking the button, but pass in a callback to set the state
 * 
 * I guess it makes sense that this wouldn't be a problem because it's still all synchronous
 * 
 * Has act warning ❌

 */
describe(Example4, () => {
    
    it("renders", async () => {
        const mockFn = jest.fn(() => {});

        render(<Example4  onClick={(cb) => {
        
            mockFn();
            cb();
        }}/>);
        expect(screen.getByText("Hello, World!")).toBeInTheDocument();
        fireEvent.click(screen.getByRole("button", {name: "Click me"}));

        expect(mockFn).toHaveBeenCalled();
    })
}); 


/**
 * We pass in a non-async function 
 * 
 * We do the state update in a setTimeout
 * 
 * Has act warning ❌
 */
describe(Example5, () => {
    
    it("renders", async () => {

        const mockFn = jest.fn(() => {});
        render(<Example5 onClick={mockFn}/>);
        expect(screen.getByText("Hello, World!")).toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", {name: "Click me"}));
        expect(mockFn).toHaveBeenCalled();
    })
}); 
