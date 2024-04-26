import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import InitialPage from "../components/InitialPage/InitialPage";

describe("Initial Page", ()=>{
    it("renders properly", ()=>{
        render(<MemoryRouter><InitialPage /></MemoryRouter>);
        expect(screen.getByText(/welcome to our cars emporium!/i)).toBeInTheDocument();
    })
})