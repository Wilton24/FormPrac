
export default function Input({ id, onInputChange, label, inputIsValid, ...props }
    : {
        id: string;
        label: string;
        inputIsValid: boolean;
        [key: string]: any;
    }
) {
    return (
        <div className="control no-margin">
            <label htmlFor={id}>{label}</label>
            <input
                onChange={onInputChange}
                id={id}
                {...props} />
            <div className="control-error">{inputIsValid && <p>Please enter a valid email address.</p>}</div>
        </div>
    )
}