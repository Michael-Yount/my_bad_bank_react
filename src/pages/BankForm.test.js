import BankForm from "./BankForm";
import { render, screen } from "@testing-library/react";
import Withdraw from "./Withdraw";

// Describing
describe(Withdraw, () => {
    // this is an individual test
    it("checks if a user entered an amount for withdraw", () => {
        const {getByTestId} = render(<BankForm successMessage={true}/>);
        const balanceValue = screen.getByTestId("amount").textContent;
        expect(balanceValue).toEqual(0);
    });
}) 