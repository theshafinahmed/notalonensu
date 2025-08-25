function Header() {
    return (
        <header className="w-full h-16 flex items-center justify-between px-4">
            <h1 className="text-2xl font-bold text-primary">Shafin</h1>
            <div className="flex items-center gap-2">
                <button className="btn btn-info">Active Status</button>
                <button className="btn btn-primary">Menu</button>
            </div>
        </header>
    );
}

export default Header;
