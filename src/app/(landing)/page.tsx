import GetStartedButton from "./_comp/GetStartedButton";

function Landing() {
    return (
        <main className="flex flex-col gap-2 items-center justify-center w-rscreen h-rscreen">
            <h1 className="text-4xl font-bold text-primary">NotAloneNSU</h1>
            <p className="text-2xl text-center">
                A platform for NSU students to connect with each other
            </p>
            <GetStartedButton />
        </main>
    );
}

export default Landing;
