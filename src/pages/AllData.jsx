import { useBankContext } from "../utilities/Bankcontext";

const Data = () => {
    const { bank } = useBankContext();

    return (
        <div>
            {JSON.stringify(bank, null, 2)}
        </div>
    )
};

export default Data;
