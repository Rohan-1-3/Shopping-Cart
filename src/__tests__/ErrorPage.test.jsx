import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ErrorPage from "../components/ErrorPage"
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Error element", ()=>{
    it("renders properly", ()=>{
        render(<MemoryRouter><ErrorPage /></MemoryRouter>)
        expect(screen.getByText(/hello you landed/i)).toBeInTheDocument();
    })

    it("renders link properly", ()=>{
        render(<MemoryRouter><ErrorPage /></MemoryRouter>)
        const link = screen.getByRole('link', {
            name: /go back/i
          })
        expect(link).toBeInTheDocument()
    })

    it("fires event properly",async ()=>{
        const user = userEvent.setup();
        render(<MemoryRouter><ErrorPage /></MemoryRouter>)
        const link = screen.getByRole('link', {
            name: /go back/i
          })
        await user.click(link);
        expect(window.location.pathname).toMatch("/")

    })
})