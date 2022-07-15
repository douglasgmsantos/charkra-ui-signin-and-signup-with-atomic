import { render, screen } from '@testing-library/react'
import FormField from '../field';


describe("Home page", () => {
    it("renderizar corretamente", () =>{
        render(
            <FormField 
                name="name"
                label={{ text: "Nome"}}
            >
                <div>Renderizou Children</div>
            </FormField>

        )

        expect(screen.getByText("Renderizou Children")).toBeInTheDocument();
        expect(screen.getByTestId("form-label-text")).toBeInTheDocument();
        expect(screen.getByText("Nome")).toBeInTheDocument();
    })
})