import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div class="h-screen bg-slate-200">
    <div class="pt-10 md:pt-20">
        <div class="p-4 md:p-8">
            <h1 class="text-black text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">Contact Me</h1>
            <form class="flex flex-col items-center">
                <div class="md:w-3/4 lg:w-2/3 xl:w-1/2">
                    <div class="flex flex-col md:flex-row">
                        <input id="name" type="text"
                            class="my-2 py-2 px-4 rounded-md bg-stone-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Name"/>
                        <input id="email" type="email"
                            class="my-2 py-2 px-4 rounded-md bg-stone-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Email"/>
                    </div>
                    <input id="subject" type="text" placeholder="Subject"
                        class="my-2 py-2 px-4 rounded-md bg-stone-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"/>
                    <textarea id="message" rows="5" placeholder="Say Something"
                        class="my-2 py-2 px-4 rounded-md bg-stone-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                </div>
                <button
                    class="btn border-2 text-md mt-5 rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600">
                    Send Message
                </button>
            </form>
        </div>
    </div>
</div>
    );
};

export default Contact;