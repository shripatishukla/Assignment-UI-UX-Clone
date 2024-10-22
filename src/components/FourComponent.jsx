const FourComponent = () => {
    return (
        <div className="flex justify-between items-start p-4 ">
            {/* Product Column */}
            <div className="  four flex-1 w-1/4 px-4">
                <h2 className="text-lg font-bold px-4">Product</h2>
                <p className="mt-2 px-4">Employee database</p>
                <p className="mt-2 px-4">Payroll</p>
                <p className="mt-2 px-4">Absences</p>
                <p className="mt-2 px-4">Time Tracking</p>
                <p className="mt-2 px-4">Shift planner</p>
                <p className="mt-2 px-4">Recruiting</p>
            </div>

            {/* Information Column */}
            <div className="flex-1 w-1/4 px-4">
                <h2 className="text-lg font-bold px-4">Information</h2>
                <p className="mt-2 px-4 ">FAQ</p>
                <p className="mt-2 px-4">Blog</p>
                <p className="mt-2 px-4">Support</p>
            </div>

            {/* Company Column */}
            <div className="flex-1 w-1/4 px-4">
                <h2 className="text-lg font-bold px-4">Company</h2>
                <p className="mt-2 px-4">About Us</p>
                <p className="mt-2 px-4">Careers</p>
                <p className="mt-2 px-4">Contact us</p>
            </div>

            {/* Subscribe Column */}
            <div className="flex-1  w-1/4 bg-gray-100 h-[300px] flex flex-col justify-between ">
                <h2 className="text-lg font-bold mt-2 px-4">Subscribe</h2>
                <p className="mt-2 px-4">Stay updated by subscribing.</p>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="mt-2 email border border-gray-300 rounded"
                />
                <p className="text-wrap  p-4 mt-2">
                    Hello, we are Lift Media. Our goal is to translate the positive<br /> effects from revolutionizing how companies engage their client & their team.
                </p>
                <button
                    type="submit"
                    className="w-full mt-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    SUBSCRIBE
                </button>
            </div>
        </div>
    );
}

export default FourComponent;
