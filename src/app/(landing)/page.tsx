import GetStartedButton from "./_comp/GetStartedButton";
import Logo from "./_comp/Logo";

function Landing() {
    return (
        <main className="flex flex-col gap-2 items-center justify-center w-rscreen h-rscreen">
            <Logo />
            <p className="text-xl text-center">
                Feeling alone at NSU? Not anymore!
            </p>
            <GetStartedButton />
        </main>
    );
}

export default Landing;
