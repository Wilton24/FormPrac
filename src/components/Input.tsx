
export default function Input({ label, type, value, onBlur, onInputChange, inputIsValid, ...props }:
    { label: string, type: string, value: string | any[], onBlur: (e: React.FocusEvent<HTMLInputElement>) => void, onInputChange: (identifier: string, value: string) => void, inputIsValid: boolean }) {
    return (
        <div className="control no-margin">
            <label htmlFor={type}>{label}</label>
            <input onChange={(e: any) => onInputChange(type, e.target.value)}
                id={type}
                type={type}
                name={type}
                value={value || ''}
                onBlur={onBlur} />
            <div className="control-error">{inputIsValid && <p>Please enter a valid email address.</p>}</div>
        </div>
    )
}