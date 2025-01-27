import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        const formValues = {
            from_name: formData.get('name'),
            from_email: formData.get('email'),
            message: formData.get('message')
        };

        try {
            const response = await emailjs.send(
                'service_8uexp9n',  // Replace with your service ID
                'template_nlettoa',  // Replace with your template ID
                formValues,
                'LcOd71GPU-kioKKkG'       // Replace with your user ID
            );

            if (response.status === 200) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                setResult("Failed to send message");
            }
        } catch (error) {
            console.log("Error", error);
            setResult("Error sending message");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-white">Contact Me</h2>
                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label className="block text-white">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder='Enter Your Name'
                            required 
                            className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder='Enter Your Mail'
                            required 
                            className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Message</label>
                        <textarea 
                            name="message" 
                            placeholder='Text Here...'
                            required 
                            className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white"
                            rows="5"
                        ></textarea>
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Submit Form
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <span className="text-white">{result}</span>
                </div>
            </div>
        </div>
    );
}
