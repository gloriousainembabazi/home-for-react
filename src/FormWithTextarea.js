import React, {useState} from "react";

const FormWithTextarea = () => {
    const [textreaValue, setTextareaValue] = useState("");

    const handleTextareaChange = (e) => {
        setTextareaValue(e.target.value);
        
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Textarea Value',textreaValue);

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="textarea">Enter your message:</label>
                <textarea
                    id="textarea"
                    value={textreaValue}
                    onChange={handleTextareaChange}
                    ></textarea>
            </div>
            <button type="submit"></button>
        </form>
    );
};

export default FormWithTextarea;
