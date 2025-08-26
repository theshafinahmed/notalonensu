function FinishSetupCard() {
    return (
        <div className="w-full bg-secondary text-secondary-content p-4 rounded-md flex flex-col">
            <h1 className="text-2xl font-bold">Want to join hangouts?</h1>
            <p>A little more steps required to get started</p>
            <button className="btn btn-neutral mt-4">
                Finish Required Steps
            </button>
        </div>
    );
}

export default FinishSetupCard;
