function Landing() {
    return (
        <main className="flex flex-col gap-2 items-center justify-center w-rscreen h-rscreen">
            <h1 className="text-4xl font-bold">NotAloneNSU</h1>
            <p className="text-2xl">
                A platform for NSU students to connect with each other
            </p>
            <div className="my-4">
                <button className="btn btn-primary btn-lg rounded-md">
                    Get Started
                </button>
            </div>
        </main>
    );
}

export default Landing;
