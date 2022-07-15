import { render, screen } from '@testing-library/react'
import { FieldValues } from 'react-hook-form';
import FormField from '../field';


describe("Home page", () => {
    it("deve renderizar o component corretamente", () =>{
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
        expect(screen.getByTestId("form-error-message")).not.toBeInTheDocument();
    })

    it("deve renderizar o componente de erro ", () =>{
        render(
            <FormField 
                name="name"
                label={{ text: "Nome"}}
                error={{ message: "teste" } as FieldValues}
            >
                <div>Renderizou Children</div>
            </FormField>

        )
        expect(screen.getByTestId("form-error-message")).toBeInTheDocument();
    })

    
})